import { Router } from 'express'
import {
    LoginForm,
    type LoginFormProps,
} from '#/components/login-form.ts'
import { Layout } from '#/components/layout.ts'

const login = Router()

login.get('/', (req, res) => {
    res.send(Layout(LoginForm()))
})

login.post('/', (req, res) => {
    const { email = '', password = '' } = req.body
    const errors: LoginFormProps['errors'] = {}

    res.send(
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
})

export { login }
