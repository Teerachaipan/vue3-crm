export interface GetSessionQueryParam {
  session_key: string
}

export interface GetSessionResponse {
  store_token: string
  user_token: string
}
