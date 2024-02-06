<script  setup lang="ts">
import { ref, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

import AdminLayout from "@/components/AdminLayout.vue";
import { useProfileStore } from "@/stores/profile"
import type { Profile } from '@/entities/profile';
import { useDateTime } from '@/composable/useDateTime';

const { isoToDateTime } = useDateTime()
const profileStore = useProfileStore()
const router = useRouter()

const tableItems = computed(():{[key: string]: string}[]  => {
  return profileStore.profileList.map((profile: Profile): {[key: string]: string} => {

    const firstName = profile.fields.find((item) => item.name == 'firstName')
    const lastName = profile.fields.find((item) => item.name == 'lastName')
    const email = profile.fields.find((item) => item.name == 'email')
    return {
      updateDate: isoToDateTime.value(profile.updatedAt),
      firstName: firstName?.value || '',
      lastName: lastName?.value || '',
      email: email?.value || '',
    }
  })
})

const profiles = ref([
    {
        updateDate: (new Date()).toDateString(),
        firstName: 'first',
        lastName: 'last',
        email: 'test@example.com',
        action: '-'    
    }
])

const searchText = ref("");
const searchKeyword = ref("");

fetchProfile();

async function fetchProfile() {
  await profileStore.getProfileList(0, 100, searchKeyword.value);
}

const deleteProfile = (index) => {
  console.log('deleteProfile', index);
  alertVisible.value = true;
  setTimeout(function() {
    alertVisible.value = false
  }, 2000);
}

const updateProfile = (index, profile) => {
  localStorage.setItem("myProfile", JSON.stringify(profile));
  router.push({ name: 'admin-profile-update', params: { id: index } })

}
const alertVisible = ref(false);
// const openAlert = () => {
//   alertVisible.value = true;
// };

// const closeAlert = () => {
//    alertVisible.value = false;
// };
</script>

<template>
  <AdminLayout>
    <ssk-text size="4xl" color="black.900">Profile List</ssk-text>
    <div class="mb-3">
      <ssk-divider size="xs" color="gray" ></ssk-divider>
    </div>
    <!-- <div v-if="alertVisible" role="alert" class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Delete success !!</span>
    </div> -->
    <ssk-alert v-if="alertVisible" type="success" message="Delete successfully!!" topic="Delete !!" ><ssk-icon name="outline-information-circle" slot="icon-slot" themecolor="success"></ssk-icon>
    </ssk-alert>
    <div>
      <!-- <ssk-input margin="lg" placeholder="search profile here" @change="onSearch" v-model="searchText"></ssk-input> -->
    </div>
    <div class=" flex items-center justify-between my-4">
      <div id="main-container">
        <ssk-input placeholder="search profile here..."></ssk-input>
        </div>
        <RouterLink :to="{ name: 'admin-profile-create' }">
            <ssk-button variant="solid" size="md"><ssk-icon slot="prefix" name="solid-users" size="md"></ssk-icon>
              add profile</ssk-button>
        </RouterLink>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th><ssk-text>Update Date</ssk-text></th>
            <th><ssk-text>First Name</ssk-text></th>
            <th><ssk-text>Last Name</ssk-text></th>
            <th><ssk-text>Email</ssk-text></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for=" (profile, index) in tableItems" :key="index"> 
            <th>{{ profile.updateDate}}</th>
            <th>{{ profile.firstName}}</th>
            <th>{{ profile.lastName}}</th>
            <th>{{ profile.email}}</th>
            <th>
                <div class="flex gap-1 ">
                  <!-- <RouterLink
                    :to="{ name: 'admin-profile-update', params: {id: index}}"
                    id="main-container" class="btn btn-ghost"><ssk-icon name="solid-pencil-square" size="sm"></ssk-icon>
                  </RouterLink> -->
                  <div id="main-container" class="btn btn-ghost" @click="updateProfile(index, profile)">
                    <ssk-icon name="solid-pencil-square" size="sm"></ssk-icon>
                  </div>
                    <div id="main-container" @click="deleteProfile(profile)" class="btn btn-ghost" ><ssk-icon name="solid-trash" size="sm"></ssk-icon></div>
                </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </AdminLayout>
</template>

<style></style>
