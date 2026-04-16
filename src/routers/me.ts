import { Router } from 'express'
import { UserCard } from '#/components/user-card.ts'
import { Layout } from '#/components/layout.ts'

const me = Router()

me.get('/', (req, res) => {
    res.send(
        Layout(
            UserCard({
                name: 'Eli Maciel',
                email: 'elimacmun@gmail.com',
                tokenValid: true,
            }),
        ),
    )
})

export { me }
