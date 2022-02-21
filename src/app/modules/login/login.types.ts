export interface UserData{
  user: string,
  password: string,
  grant_type: string
}


export interface User {
  access_token: string
  expires_in: string,
  role: Role[]
  scope: string
  token_type: string,
  userEmail: string,
  userId: string
}

export interface Role {
  authority: string
}
