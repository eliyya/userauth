import { Router } from 'express'
import { LoginForm, type LoginFormProps } from '#/components/login-form.ts'
import { Layout } from '#/components/layout.ts'
import { db } from '#/prisma/db.ts'
import bcrypt from 'bcrypt'
import { SignJWT } from 'jose'
import { SECRET } from '#/constants.ts'
import { LoginCard } from '#/components/login-card.ts'

const login = Router()

login.get('/', (req, res) => {
    res.send(Layout(LoginForm()))
})

login.post('/', async (req, res) => {
    const { email = '', password = '' } = req.body

    const errors: LoginFormProps['errors'] = {}

    if (!email) {
        errors.email = 'el correo es obligatorio'
    }

    if (!password) {
        errors.password = 'la contrasenia es obligatoria'
    }

    if (Object.values(errors).length) {
        return res.send(
            Layout(
                LoginForm({
                    values: {
                        email,
                        password,
                    },
                    errors,
                }),
            ),
        )
    }

    const user = await db.user.findUnique({
        where: { email },
    })

    if (!user) {
        return res.send(
            Layout(
                LoginForm({
                    values: {
                        email,
                        password,
                    },
                    errors: {
                        form: 'email o contrasenia incorrectas',
                    },
                }),
            ),
        )
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        return res.send(
            Layout(
                LoginForm({
                    values: {
                        email,
                        password,
                    },
                    errors: {
                        form: 'email o contrasenia incorrectas',
                    },
                }),
            ),
        )
    }

    const {
        created_at,
        expires_at,
        id: session_id,
        user_id,
    } = await db.session.create({
        data: {
            expires_at: new Date(Date.now() + 1000 * 60 * 60 * 2),
            user_id: user.id,
        },
    })

    const token = await new SignJWT({
        session_created_at: created_at.getTime(),
        user_created_at: user.created_at.getTime(),
        expires_at: expires_at.getTime(),
        session_id,
        updated_at: user.updated_at.getTime(),
        user_id,
        email: user.email,
        name: user.name
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(SECRET)

    return res.send(
        Layout(
            LoginCard({
                name: user.name,
                email,
                token,
            }),
        ),
    )
})

export { login }
