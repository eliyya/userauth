import { Router } from 'express'
import { html } from '#/utils.ts'

const register = Router()

register.get('/', (req, res) => {
    res.send(html`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Registro</title>
    <style>
        :root {
            color-scheme: dark light;
            --bg: #0f172a;
            --card: #111827;
            --border: #1f2937;
            --text: #e5e7eb;
            --muted: #9ca3af;
            --primary: #6366f1;
            --primary-hover: #4f46e5;
            --error: #ef4444;
        }

        * {
            box-sizing: border-box;
            font-family: system-ui, -apple-system, sans-serif;
        }

        body {
            margin: 0;
            background: radial-gradient(circle at top, #1e293b, #020617);
            color: var(--text);
            display: grid;
            place-items: center;
            min-height: 100vh;
        }

        .card {
            background: var(--card);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
            width: 100%;
            max-width: 400px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        h1 {
            margin: 0 0 1.5rem;
            font-size: 1.5rem;
            text-align: center;
        }

        .field {
            margin-bottom: 1rem;
        }

        label {
            display: block;
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
            color: var(--muted);
        }

        input {
            width: 100%;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border: 1px solid var(--border);
            background: #020617;
            color: var(--text);
            outline: none;
            transition: border 0.2s;
        }

        input:focus {
            border-color: var(--primary);
        }

        button {
            width: 100%;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border: none;
            background: var(--primary);
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }

        button:hover {
            background: var(--primary-hover);
        }

        .footer {
            text-align: center;
            margin-top: 1rem;
            font-size: 0.85rem;
            color: var(--muted);
        }
    </style>
</head>
<body>
    <form class="card" method="POST" action="/register">
        <h1>Crear cuenta</h1>

        <div class="field">
            <label for="name">Nombre</label>
            <input id="name" name="name" type="text" required />
        </div>

        <div class="field">
            <label for="email">Correo</label>
            <input id="email" name="email" type="email" required />
        </div>

        <div class="field">
            <label for="password">Contraseña</label>
            <input id="password" name="password" type="password" required />
        </div>

        <div class="field">
            <label for="confirm">Confirmar contraseña</label>
            <input id="confirm" name="confirm" type="password" required />
        </div>

        <button type="submit">Registrarse</button>

        <div class="footer">
            ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </div>
    </form>
</body>
</html>
`)
})

export { register }