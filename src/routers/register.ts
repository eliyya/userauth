import { Router } from 'express'
import {
    RegisterForm,
    type RegisterFormProps,
} from '#/components/register-form.ts'
import { Layout } from '#/components/layout.ts'

const register = Router()

register.get('/', (req, res) => {
    res.send(Layout(RegisterForm()))
})

register.post('/', (req, res) => {
    const { name = '', email = '', password = '', confirm = '' } = req.body
    const errors: RegisterFormProps['errors'] = {}
    if (password !== confirm) {
        errors.confirm = 'Las contrasenias deben ser iguales'
    }

    res.send(
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
})

export { register }
