import { api } from '~/api/index'
import type { IUser } from '~/types/user'

export function login(username: string, password: string) {
  return api.post('/login', {
    name: username,
    password,
  })
}

export function logout() {
  return api.post('/logout')
}

export function register(username: string, email: string, password: string, passwordConfirmation: string) {
  return api.post('/api/register', {
    name: username,
    password,
    email,
    password_confirmation: passwordConfirmation,
  })
}

export function getSessionUser() {
  return api.get<IUser>('/api/user').then(res => res.data)
}
