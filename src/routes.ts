import { Router } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController'
import { GetLoggedUserDataController } from './controllers/GetLoggedUserDataController'
import { ProfileUserController } from './controllers/ProfileUserController'

import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

router.get('/messages/last3', new GetLast3MessagesController().handle)

router.get('/user', ensureAuthenticated, new GetLoggedUserDataController().handle)

router.get('/profile/:id', new ProfileUserController().handle)

export { router }