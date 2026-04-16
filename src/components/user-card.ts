import { html } from '#/utils.ts'
import { TimeTag } from './time-tag.ts'

export interface UserCardProps {
    user_id?: string
    name?: string
    email?: string
    session_id?: string
    session_created_at?: Date
    user_created_at?: Date
    updated_at?: Date
    expires_at?: Date
    valid?: 'valid' | 'expired' | 'invalid'
    token?: string
}
export function UserCard({
    user_created_at,
    session_created_at,
    expires_at,
    session_id,
    updated_at,
    user_id,
    name,
    email,
    valid,
    token,
}: UserCardProps) {
    return html`
        <form class="card" method="get" action="/user">
            <h2>Perfil</h2>

            <div class="field">
                <label>token</label>
                <input
                    name="token"
                    type="text"
                    value="${token ?? ''}"
                    required
                />
            </div>

            ${user_id ?
                html`<div class="info">
                    <span class="label">ID de Usuario</span>
                    <span class="value">${user_id}</span>
                </div>`
            :   ''}
            ${name ?
                html`<div class="info">
                    <span class="label">Nombre</span>
                    <span class="value">${name}</span>
                </div>`
            :   ''}
            ${email ?
                html`<div class="info">
                    <span class="label">Correo</span>
                    <span class="value">${email}</span>
                </div>`
            :   ''}
            ${user_created_at ?
                html`<div class="info">
                    <span class="label">Usuario Creado</span>
                    <span class="value">
                        ${TimeTag(user_created_at, true)}
                    </span>
                </div>`
            :   ''}
            ${updated_at ?
                html`<div class="info">
                    <span class="label">Usuario Modificado</span>
                    <span class="value"> ${TimeTag(updated_at, true)} </span>
                </div>`
            :   ''}
            ${session_id ?
                html`div class="info">
                    <span class="label">ID de Sesion</span>
                    <span class="value">${session_id}</span>
                </div>`
            :   ''}
            ${session_created_at ?
                html`<div class="info">
                    <span class="label">Sesion Creada</span>
                    <span class="value">
                        ${TimeTag(session_created_at, true)}
                    </span>
                </div>`
            :   ''}
            ${expires_at ?
                html`<div class="info">
                    <span class="label">Expira</span>
                    <span class="value"> ${TimeTag(expires_at, true)} </span>
                </div>`
            :   ''}
            ${typeof valid !== 'undefined' ?
                html`<div class="info">
                    <span class="label">Token</span>
                    <span class="badge ${valid == 'valid' ? 'ok' : 'bad'}">
                        ${valid}
                    </span>
                </div>`
            :   ''}

            <button type="submit">Validar</button>
        </form>

        <style>
            .card {
                background: #111827;
                border: 1px solid #1f2937;
                border-radius: 1rem;
                padding: 1.5rem;
                max-width: 400px;
                margin: 2rem auto;
                color: #e5e7eb;
                font-family:
                    system-ui,
                    -apple-system,
                    sans-serif;
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
                background: rgba(34, 197, 94, 0.15);
                color: #22c55e;
            }

            .bad {
                background: rgba(239, 68, 68, 0.15);
                color: #ef4444;
            }
        </style>
    `
}
