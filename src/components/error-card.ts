import { html } from "#/utils.ts";

export function ErrorCard({ title = 'Ocurrió un error', message = 'Algo salió mal', code = 500 }) {
    return html`
<div class="card">
    <div class="icon">⚠️</div>

    <h2>${title}</h2>
    <p class="subtitle">${message}</p>

    ${code ? `<div class="code">Error: ${code}</div>` : ''}

    <div class="actions">
        <a href="javascript:history.back()" class="button secondary">Volver</a>
        <a href="/" class="button">Ir al inicio</a>
    </div>
</div>

<style>
    .card {
        background: #111827;
        border: 1px solid #1f2937;
        border-radius: 1rem;
        padding: 2rem;
        max-width: 420px;
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
        background: rgba(239,68,68,0.15);
        color: #ef4444;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }

    h2 {
        margin-bottom: 0.25rem;
    }

    .subtitle {
        font-size: 0.9rem;
        color: #9ca3af;
        margin-bottom: 1rem;
    }

    .code {
        font-size: 0.8rem;
        background: #020617;
        border: 1px solid #1f2937;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        color: #ef4444;
    }

    .actions {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
    }

    .button {
        display: block;
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

    .secondary {
        background: transparent;
        border: 1px solid #1f2937;
    }

    .secondary:hover {
        background: #1f2937;
    }
</style>
`
}