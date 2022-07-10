import { api } from '~/api/index'

export function login(username: string, password: string) {
  return api.post('/login', {
    name: username,
    password,
  })
}

export function register(username: string, email: string, password: string, passwordConfirmation: string) {
  return api.post('/api/register', {
    name: username,
    password,
    email,
    password_confirmation: passwordConfirmation,
  })
}
