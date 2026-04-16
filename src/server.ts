import Express, { urlencoded } from 'express'
import cors from 'cors'
import { errorHandler } from './errors.ts'
import { register } from './routers/register.ts'
import { login } from './routers/login.ts'
import { user } from './routers/user.ts'

const server = Express()

server.use(cors({ origin: '*' }))
server.use(urlencoded({ extended: true }))
server.use(errorHandler)

server.use('/register', register)
server.use('/login', login)
server.use('/user', user)

server.get('/', (req, res) => {
    res.send('Hello World')
})


export { server }
