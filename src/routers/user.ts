import { Router } from 'express'
import { UserCard } from '#/components/user-card.ts'
import { Layout } from '#/components/layout.ts'
import { decodeJwt, jwtVerify } from 'jose'
import { SECRET } from '#/constants.ts'
import { JWTInvalid } from 'jose/errors'

const user = Router()

async function verifyToken(token: string) {
    try {
        await jwtVerify(token, SECRET)
        return 'valid'
    } catch (err) {
        if (err instanceof JWTInvalid && err.code === 'ERR_JWT_EXPIRED') {
            return 'expired'
        }

        return 'invalid'
    }
}

async function payloadToken(token: string) {
    try {
        const payload = decodeJwt(token) as {
            session_created_at?: number
            user_created_at?: number
            expires_at?: number
            session_id?: string
            updated_at?: number
            user_id?: string
            email?: string
            name?: string
        }
        return payload
    } catch {
        return {}
    }
}

user.get('/', async (req, res) => {
    const { token } = req.query

    if (typeof token !== 'string') {
        return res.send(Layout(UserCard({})))
    }

    const {
        session_created_at,
        user_created_at,
        expires_at,
        session_id,
        updated_at,
        user_id,
        email,
        name,
    } = await payloadToken(token)

    const valid = await verifyToken(token)
    res.send(
        Layout(
            UserCard({
                session_created_at,
                user_created_at,
                expires_at,
                updated_at,
                session_id,
                user_id,
                email,
                name,
                valid,
                token,
            }),
        ),
    )
})

export { user }
