
export interface GetProfileQuery {
  offset: string
  limit: string
}

export interface RestProfile {
  id: string
  fields: RestField[]
  labels: string[]
  created_at: string
  updated_at: string
}

export interface RestField {
  id: string
  name: string
  display_name: string
  data_type: string
  type: string
  value: string
}

export interface GetProfileResponse {
  results: RestProfile[]
  total: number
}