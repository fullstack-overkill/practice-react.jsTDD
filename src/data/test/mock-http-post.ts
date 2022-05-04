import { faker } from '@faker-js/faker'
import { HttpPostParams } from '../protocols/http'

export const mockPostRequests = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
