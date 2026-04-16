function formatDate(date: Date) {
    return new Intl.DateTimeFormat('es-MX', {
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(date)
}

function relativeTime(date: Date) {
    const rtf = new Intl.RelativeTimeFormat('es-MX', { numeric: 'auto' })

    const diff = date.getTime() - Date.now()

    const minutes = diff / 60000
    const hours = diff / 3600000
    const days = diff / 86400000

    if (Math.abs(minutes) < 60) {
        return rtf.format(Math.round(minutes), 'minute')
    }

    if (Math.abs(hours) < 24) {
        return rtf.format(Math.round(hours), 'hour')
    }

    return rtf.format(Math.round(days), 'day')
}

export function TimeTag(timestamp: number, relative = false) {
    const date = new Date(timestamp)
    return `
        <time datetime="${date.toISOString()}">
            ${relative ? relativeTime(date) : formatDate(date)}
        </time>
    `
}