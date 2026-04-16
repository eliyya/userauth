import { html } from "#/utils.ts";

export interface LayoutProps {
    body?: string
}
export function Layout(body = "") {
    return html`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Autenticacion</title>
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
        }

        h1 {
            margin-bottom: 1.5rem;
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
        }

        input.error {
            border-color: var(--error);
        }

        .error-text {
            font-size: 0.8rem;
            color: var(--error);
            margin-top: 0.25rem;
        }

        .error-box {
            background: rgba(239,68,68,0.1);
            border: 1px solid var(--error);
            padding: 0.75rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
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
        }
    </style>
</head>
<body>
    ${body}
</body>
</html>
`
}