import { Router } from 'express'
import {
    RegisterForm,
    type RegisterFormProps,
} from '#/components/register-form.ts'
import { Layout } from '#/components/layout.ts'
import { db } from '#/prisma/db.ts'
import bcrypt from 'bcrypt'
import { CreatedCard } from '#/components/created-card.ts'

const register = Router()

register.get('/', (req, res) => {
    res.send(Layout(RegisterForm()))
})

register.post('/', async (req, res) => {
    const { name = '', email = '', password = '', confirm = '' } = req.body

    const errors: RegisterFormProps['errors'] = {}

    const exist = await db.user.findFirst({
        where: { email },
    })

    if (exist) {
        errors.email = 'Ese email ya tiene una cuenta asociada'
    }

    if (!name) {
        errors.name = 'el nombre es obligatorio'
    }

    if (!email) {
        errors.email = 'el correo es obligatorio'
    }

    if (!password) {
        errors.password = 'la contrasenia es obligatoria'
    }

    if (!confirm) {
        errors.name = 'la contrasenia es obligatoria'
    }

    if (password !== confirm) {
        errors.confirm = 'Las contrasenias deben ser iguales'
    }

    if (Object.values(errors).length){
        return res.send(
            Layout(
                RegisterForm({
                    values: {
                        name,
                        email,
                        password,
                        confirm,
                    },
                    errors,
                }),
            ),
        )
    }

    const hash = await bcrypt.hash(password, 10)

    await db.user.create({
        data: {
            email, name, password: hash
        }
    })

    return res.send(
            Layout(
                CreatedCard({
                    name,
                    email,
                }),
            ),
        )
})

export { register }
