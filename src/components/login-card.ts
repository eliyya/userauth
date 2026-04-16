import { html } from "#/utils.ts"

export interface LoginCardProps {
    name: string
    email: string
    token: string
}
export function LoginCard({ name, email, token }: LoginCardProps) {
    return html`
<div class="card">
    <div class="icon">✓</div>

    <h2>Cuenta creada</h2>
    <p class="subtitle">Sesion creada correctamente</p>

    <div class="info">
        <span class="label">Nombre</span>
        <span class="value">${name}</span>
    </div>

    <div class="info">
        <span class="label">Correo</span>
        <span class="value">${email}</span>
    </div>

    <div class="token-box">
        <span class="label">JWT</span>
        <code class="token">${token}</code>
    </div>

    <a href="/login" class="button">Ir a iniciar sesión</a>
    <a href="/user?token=${token}" class="button">Ir a información</a>
</div>

<style>
    .card {
        background: #111827;
        border: 1px solid #1f2937;
        border-radius: 1rem;
        padding: 2rem;
        max-width: 400px;
        margin: 2rem auto;
        text-align: center;
        color: #e5e7eb;
        font-family: system-ui, -apple-system, sans-serif;
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        background: rgba(34,197,94,0.15);
        color: #22c55e;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
    }

    h2 {
        margin-bottom: 0.25rem;
    }

    .subtitle {
        font-size: 0.9rem;
        color: #9ca3af;
        margin-bottom: 1.5rem;
    }

    .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
        font-size: 0.95rem;
    }

    .label {
        color: #9ca3af;
    }

    .value {
        font-weight: 500;
    }

    .button {
        display: block;
        margin-top: 1.5rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
        text-decoration: none;
        background: #6366f1;
        color: white;
        font-weight: 600;
        transition: background 0.2s;
    }

    .button:hover {
        background: #4f46e5;
    }

    .token-box {
        margin-top: 1rem;
        text-align: left;
    }

    .token {
        display: block;
        margin-top: 0.25rem;
        padding: 0.5rem;
        background: #020617;
        border: 1px solid #1f2937;
        border-radius: 0.5rem;
        font-size: 0.75rem;
        overflow-x: auto;
        word-break: break-all;
        color: #22c55e;
    }
</style>
`
}