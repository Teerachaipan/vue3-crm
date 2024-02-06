import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'
import ProfileService from  '@/services/profile'
import type { Profile } from '@/entities/profile'

export const useProfileStore = defineStore('profile', () => {
  const profileList: Ref<Profile[]> = ref([])


  async function getProfileList(offset: number, limit: number, keyword: string) {
    const profileData = await ProfileService.getProfileList(offset.toString(), limit.toString(), keyword)
    profileList.value = profileData
  }


  return {
    profileList,
    getProfileList
  }
})
