import Express, { urlencoded } from 'express'
import cors from 'cors'
import { errorHandler } from './errors.ts'
import { register } from './routers/register.ts'

const server = Express()

server.use(cors({ origin: '*' }))
server.use(urlencoded({ extended: true }))
server.use(errorHandler)

server.use('/register', register)

server.get('/', (req, res) => {
    res.send('Hello World')
})


export { server }
