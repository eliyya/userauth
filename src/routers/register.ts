import { Router } from 'express'
import { html } from '#/utils.ts'
import { RegisterForm, type RegisterFormProps } from '#/components/register-form.ts'

const register = Router()

register.get('/', (req, res) => {
    res.send(RegisterForm())
})

register.post('/', (req, res) => {
    console.log(req.body);
    
    const { name = '', email = '', password = '', confirm = '' } = req.body
    const errors: RegisterFormProps['errors'] = {}
    if (password !== confirm) errors.confirm = "Las contrasenias deben ser iguales"

    res.send(
        RegisterForm({
            values: {
                name,
                email,
                password,
                confirm,
            },
            errors
        }),
    )
})

export { register }
