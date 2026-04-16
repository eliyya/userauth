import { html } from "#/utils.ts"

export interface UserCardProps {
    id: string
    name: string
    email: string
    tokenValid: boolean
}
export function UserCard({ id, name, email, tokenValid }: UserCardProps) {
    return html`
<div class="card">
    <h2>Perfil</h2>

    <div class="info">
        <span class="label">ID</span>
        <span class="value">${id}</span>
    </div>

    <div class="info">
        <span class="label">Nombre</span>
        <span class="value">${name}</span>
    </div>

    <div class="info">
        <span class="label">Correo</span>
        <span class="value">${email}</span>
    </div>

    <div class="info">
        <span class="label">Token</span>
        <span class="badge ${tokenValid ? 'ok' : 'bad'}">
            ${tokenValid ? 'Válido' : 'Alterado'}
        </span>
    </div>
</div>

<style>
    .card {
        background: #111827;
        border: 1px solid #1f2937;
        border-radius: 1rem;
        padding: 1.5rem;
        max-width: 400px;
        margin: 2rem auto;
        color: #e5e7eb;
        font-family: system-ui, -apple-system, sans-serif;
    }

    h2 {
        margin-bottom: 1rem;
        text-align: center;
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

    .badge {
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .ok {
        background: rgba(34,197,94,0.15);
        color: #22c55e;
    }

    .bad {
        background: rgba(239,68,68,0.15);
        color: #ef4444;
    }
</style>
`
}