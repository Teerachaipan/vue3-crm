<script  setup lang="ts">
import { ref, computed, reactive, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
import AdminLayout from "@/components/AdminLayout.vue";
import { useProfileStore } from "@/stores/profile"
import type { Profile } from '@/entities/profile';
import { useDateTime } from '@/composable/useDateTime';

const { isoToDateTime } = useDateTime()
const profileStore = useProfileStore()

const route = useRoute()
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

const searchKeyword = ref("");

fetchProfile();

async function fetchProfile() {
  await profileStore.getProfileList(0, 100, searchKeyword.value);
}

const formData = [{
    filed: 'updateDate',
    name: 'Update Date'
  },
  {
    filed: 'firstName',
    name: 'First Name'
  },
  {
    filed: 'lastName',
    name: 'Last Name'
  },
  {
    filed: 'email',
    name: 'Email'
  },
]
const profileId = ref(-1)
const profileData = reactive({
  updateDate: '',
  firstName: '',
  lastName: '',
  email: ''
})
const alertVisible = ref(false);
const mode = ref('Create')

const addProfile = () => {
  if (mode.value === 'Edit') {
    // Edit mode
    console.log('edit profile',profileData);
    alertVisible.value = true;
    setTimeout(function() {
      alertVisible.value = false
    }, 2000);
  } else {
    // Create mode
    console.log('adding profile',profileData);
    alertVisible.value = true;
    setTimeout(function() {
      alertVisible.value = false
    }, 2000);
  }
  router.push({ name: 'admin-profile' })
}


onMounted(() => {
  if (route.params.id) {
    profileId.value = parseInt(route.params.id)
    mode.value = 'Edit'
    const retrievedObject = localStorage.getItem('myProfile');
    
    var user = JSON.parse(retrievedObject)
    console.log(user)
    profileData.updateDate = user.updateDate
    profileData.firstName = user.firstName
    profileData.lastName = user.lastName
    profileData.email = user.email
  }
})

</script>
<template>
  <AdminLayout>
    <div class=" shadow-xl">
      <!-- <ssk-heading class="my-3">Profile {{mode}}</ssk-heading> -->
      <ssk-text size="4xl" color="black.900">Profile {{mode}}</ssk-text>
      <div class="mb-3">
        <ssk-divider size="xs" color="gray" ></ssk-divider>
      </div>
      <!-- <div v-if="alertVisible" role="alert" class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Delete success !!</span>
    </div> -->
      <!-- <div class=" grid grid-cols-2 "> -->
      <div v-for=" form in formData" :key="form.filed" class="form-control w-full">
        <!-- <div class="label">
          <span class="label-text">{{form.name}}</span>
        </div> -->
        <!-- <input type="text" class="input input-bordered w-full" v-model="profileData[form.filed]" /> -->
        <ssk-text size="xs">{{form.name}}</ssk-text>
        <ssk-input
          size="md"
          type="text"
          :value="profileData[form.filed]"> 
        </ssk-input>
      </div>
    <!-- </div> -->
      <div class="divder"></div>
      <div class="mt-4 flex  items-center justify-between gap-2">
          <ssk-button @click="router.push({ name: 'admin-profile' })" variant="solid" themecolor="black" size="md">
            back
          </ssk-button>
          <ssk-button @click="addProfile()" variant="solid" size="md">
            {{ mode }}
          </ssk-button>
      </div>
    </div>
   
  </AdminLayout>
</template>

<style></style>
