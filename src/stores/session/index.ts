import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
import SessionService from '@/services/session'

export const useSessionStore = defineStore('session', () => {
  const sessionKey: Ref<string> = ref('')
  const storeJWT: Ref<string> = ref('')
  const userJWT: Ref<string> = ref('')

  async function getSessionToken(sessionKey: string) {
    const [storeToken, userToken] = await SessionService.getSessionToken(sessionKey)
    storeJWT.value = storeToken
    userJWT.value = userToken
  }

  return {
    getSessionToken,
    sessionKey,
    storeJWT,
    userJWT
  }
})
