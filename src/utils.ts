function html(strings: TemplateStringsArray, ...values: any[]) {
    let result = ''

    for (let i = 0; i < strings.length; i++) {
        result += strings[i]
        if (i < values.length) {
            result += values[i]
        }
    }

    return result
}
export { html }

export function loadEnv() {
    try {
        process.loadEnvFile()
    } catch {
        console.error("No hay .env")
        process.exit(1)
    }
}