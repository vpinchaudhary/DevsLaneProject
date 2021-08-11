import { User } from './User'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginData {
  token: string
  user: User
  data: {
    is_2fa_enabled: boolean
  }
}

export interface GroupRequest {
  limit?: number
  offset?: number
  query?: string
  status: 'all-groups' | 'fav' | 'archieve'
}
