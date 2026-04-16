import { Router } from 'express'
import { UserCard } from '#/components/user-card.ts'
import { Layout } from '#/components/layout.ts'
import { decodeJwt, jwtVerify } from 'jose'
import { ErrorCard } from '#/components/error-card.ts'
import { SECRET } from '#/constants.ts'
import { JWTInvalid } from 'jose/errors'

const user = Router()

async function verifyToken(token: string) {
    try {
        await jwtVerify(token, SECRET)
        return 'valid'
    } catch (err) {
        if ((err instanceof JWTInvalid) && err.code === 'ERR_JWT_EXPIRED') {
            return 'expired'
        }

        return 'invalid'
    }
}

user.get('/', async (req, res) => {
    const { token } = req.query

    if (typeof token !== 'string') {
        return res.send(
            Layout(
                ErrorCard({
                    title: 'Token invalido',
                    message:
                        'Debe incluir un token en la url como ?token=abc.def.ghi',
                    code: 400,
                }),
            ),
        )
    }

    const {
        session_created_at = '',
        user_created_at = '',
        expires_at = '',
        session_id = '',
        updated_at = '',
        user_id = '',
        email = '',
        name = '',
    } = decodeJwt(token) as {
        session_created_at: number
        user_created_at: number
        expires_at: number
        session_id: string
        updated_at: number
        user_id: string
        email: string
        name: string
    }

    const valid = await verifyToken(token)
    res.send(
        Layout(
            UserCard({
                session_created_at: new Date(session_created_at ?? Date.now()),
                user_created_at: new Date(user_created_at ?? Date.now()),
                expires_at: new Date(expires_at ?? Date.now()),
                updated_at: new Date(updated_at ?? Date.now()),
                session_id,
                user_id,
                email,
                name,
                valid,
                token
            }),
        ),
    )
})

export { user }
