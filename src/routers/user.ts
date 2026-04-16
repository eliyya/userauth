import { Router } from 'express'
import { UserCard } from '#/components/user-card.ts'
import { Layout } from '#/components/layout.ts'

const user = Router()

user.get('/', (req, res) => {
    res.send(
        Layout(
            UserCard({
                id: "2357536345",
                name: 'Eli Maciel',
                email: 'elimacmun@gmail.com',
                tokenValid: true,
            }),
        ),
    )
})

export { user }
