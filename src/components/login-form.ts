import { html } from "#/utils.ts";

export interface LoginFormProps {
    errors?: {
        form?: string
        email?: string
        password?: string
    }
    values?: {
        email?: string
        password?: string
    }
}
export function LoginForm({ errors = {}, values = {} }: LoginFormProps = {}) {
    return html`
    <form class="card" method="post" action="/register">
        <h1>Iniciar sesion</h1>

        ${errors.form ? `<div class="error-box">${errors.form}</div>` : ''}

        <div class="field">
            <label>Correo</label>
            <input
                name="email"
                type="email"
                value="${values.email ?? ''}"
                class="${errors.email ? 'error' : ''}"
                required
            />
            ${errors.email ? `<div class="error-text">${errors.email}</div>` : ''}
        </div>

        <div class="field">
            <label>Contraseña</label>
            <input
                name="password"
                type="password"
                value="${values.password ?? ''}"
                class="${errors.password ? 'error' : ''}"
                required
            />
            ${errors.password ? `<div class="error-text">${errors.password}</div>` : ''}
        </div>
    </form>
`
}