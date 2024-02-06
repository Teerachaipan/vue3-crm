import { useSessionStore } from '@/stores/session'
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { ErrPermissionDenied } from '@/exceptions/common/permission-denied'
import { ErrUnauthorized } from '@/exceptions/common/unauthorized'
import type { Profile } from '@/entities/profile'
import type { GetProfileResponse, RestField, RestProfile } from './types/get-profiles'
import type { Field } from '@/entities/field'
import { HTTP_REQUEST_TIMEOUT } from '@/utils/constants'

class ProfileService {
  client: AxiosInstance
  constructor() {
    this.client = axios.create({
      baseURL: 'https://takumi.4th.in/mock',
      timeout:  HTTP_REQUEST_TIMEOUT,

    })

    this.client.interceptors.request.use((config) => {
      const sessionStore = useSessionStore()
      config.headers['Authorization'] = 'Bearer ' + sessionStore.storeJWT
      return config
    })
  }

  errorHandler(err: any) {
    if (!err.isAxiosError) {
      throw err
    }

    switch (err.response?.status) {
      case '401':
        throw new ErrUnauthorized('unauthorized')
      case '403':
        throw new ErrPermissionDenied('permission denied')
      default:
        switch (err.response.data?.error_code) {
          default:
            throw new Error(`unexpected error: ${err.response.data.error}`)
        }
    }
  }

  async getProfileList(offset: string, limit: string, keyword: string): Promise<Profile[]> {
    try {
      const query = {
        offset: offset,
        limit: limit,
        keyword: keyword,
        sort_by: 'updated_at',
        sort_dir: 'desc'
      }

      const res = await this.client.get(`profile.php`,{params: query})
      const resp: GetProfileResponse = res.data as GetProfileResponse

      const profiles = resp.results.map((item: RestProfile): Profile => {

        const fields = item.fields.map((field: RestField): Field => {
          return {
            id: field.id,
            name: field.name,
            displayName: field.display_name,
            dataType: field.data_type,
            type: field.type,
            value: field.value
          }
        })


        return {
          id: item.id,
          fields: fields,
          createdAt: item.created_at,
          updatedAt: item.updated_at
        }
      })

      return profiles

    } catch (err) {
      throw this.errorHandler(err)
    }
  }


}

export default new ProfileService()
