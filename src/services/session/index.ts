import axios, { Axios } from 'axios'
import type { GetSessionQueryParam, GetSessionResponse } from './types/get-session'
import { useSessionStore } from '@/stores/session'
import { ErrUnauthorized } from '@/exceptions/common/unauthorized'
import { ErrPermissionDenied } from '@/exceptions/common/permission-denied'
import type { GetSessionInfoResponse } from './types/get-session-info'
import type { Space } from '@/entities/space'
import type { GetSessionPermissionResponse } from './types/get-session-permission'

class SessionService {
  client: Axios
  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_SERVICE_SESSION_BASE_URL,
      timeout: import.meta.env.VITE_SETTING_HTTP_REQUEST_TIMEOUT,
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
  

  async getSessionToken(sessionKey: string): Promise<[string, string]> {
    const query: GetSessionQueryParam = {
      session_key: sessionKey
    }

    const res = await this.client.get(`/session`, { params: query })

    const resp: GetSessionResponse = res.data as GetSessionResponse

    return [resp.store_token, resp.user_token]
  }

  async getSessionPermission(): Promise<string[]> {
    const sessionStore = useSessionStore()
    try {
      const res = await this.client.get(`/session/permission`, {
        headers: {
          Authorization: `Bearer ${sessionStore.storeJWT}`
        }
      })

      const resp: GetSessionPermissionResponse = res.data as GetSessionPermissionResponse

      return resp.permissions
    } catch (err) {
      throw this.errorHandler(err)
    }
  }

  async getSessionInfo(): Promise<Space> {
    const sessionStore = useSessionStore()

    try {
      const res = await this.client.get(`/session/info`, {
        headers: {
          Authorization: `Bearer ${sessionStore.storeJWT}`
        }
      })

      const resp: GetSessionInfoResponse = res.data as GetSessionInfoResponse

      return {
        id: resp.store.id,
        name: resp.store.name,
        tel: resp.store.tel,
        address: resp.store.address,
        subDistrict: resp.store.sub_district,
        province: resp.store.province,
        postCode: resp.store.post_code,
        imageURL: resp.store.photo
      }
    } catch (err) {
      throw this.errorHandler(err)
    }
  }
  
}

export default new SessionService()
