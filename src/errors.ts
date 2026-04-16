import { type ErrorRequestHandler } from 'express'
class ApiError extends Error {
    statusCode: number
    constructor(
        message: string,
        statusCode = 500,
        cause: Record<string, unknown> = {},
    ) {
        super(message, { cause })
        this.statusCode = statusCode
    }
}
const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    if (err instanceof ApiError) {
        const cause = err.cause ?? {}
        return res.status(err.statusCode).json({ ...cause, error: err.message })
    } else {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
export { ApiError, errorHandler }