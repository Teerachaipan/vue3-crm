
<script setup lang="ts">
import AdminLayout from '@/components/AdminLayout.vue'
import YattaTable, { type TableHeader } from '../components/YattaTable.vue';
import { useProfileStore } from '../stores/profile'
import type { Profile } from '../entities/profile';
import { computed, ref, type Ref } from 'vue';
import { useDateTime } from '../composable/useDateTime';

const { isoToDateTime } = useDateTime()
const profileStore = useProfileStore()

const searchKeyword = ref('')

const tableHeaders: Ref<TableHeader[]> = ref([
  {
    name: 'updateDate',
    text: 'Update Date'
  },
  {
    name: 'firstName',
    text: 'First Name'
  },
  {
    name: 'lastName',
    text: 'Last Name'
  },
  {
    name: 'email',
    text: 'Email'
  },
  {
    name: 'action',
    text: 'Action'
  }
])
// const  tableItems = []

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

const searchText = ref('testSearch')

fetchProfile()

async function fetchProfile() {
  await profileStore.getProfileList(0, 100, searchKeyword.value)
}

function onSearch(evt: CustomEvent) {
  searchKeyword.value = evt.detail.value
  fetchProfile()
}
const name = ref('')

const inputValue = ref('')

// function handleChange(event: CustomEvent) {
//   const newValue = event.detail.value;
//   console.log('Input value changed:', newValue);
//   inputValue.value = newValue;
// }
const handleChangeInput = (event) => {
    console.log('aaaa');
      console.log('Input value changed123:', event.target.value);
      inputValue.value = event.target.value;
  };

const handleChange = (event) => {
      // console.log('Input value changed:', event.target.value);
      inputValue.value = event.target.value;
  };

</script>
<template>
  <AdminLayout>
    <div class="text-3xl my-4">Profile List</div>
    <div class="divider"></div> 
  <div class="page-main">
    <div class="page-container">
      <ssk-heading>โปรไฟล์</ssk-heading>
      <!-- <ssk-toggle themeColor="secondary"></ssk-toggle> -->
      <ssk-input margin="lg" placeholder="search profile here.." @change="handleChangeInput"></ssk-input>
      <p>Input value: {{ inputValue }}</p>
      <!-- <input class="imput-text" v-model="searchText"> -->
      <!-- <ssk-text size="sm">{{searchText}}</ssk-text> -->
      <br>
      <input type="input" :value="name" @change="handleChange">
      <br>
      <yatta-table :headers="tableHeaders" :items="tableItems"></yatta-table>
      </div>
    </div>
    </AdminLayout>
</template>

<style scoped>
.page-main {
  flex: 1 0 auto;
  max-width: 100%;
  padding: var(--ssk-padding-md) var(--ssk-padding-md) 0px var(--ssk-padding-md);
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-container {
  max-width: 1024px;
  width: 100%;
  padding: var(--ssk-padding-md);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column !important;
}

.ssk-my-1 {
  margin-top: var(--ssk-margin-1);
  margin-bottom: var(--ssk-margin-1);
}

.ssk-my-5 {
  margin-top: var(--ssk-margin-5);
  margin-bottom: var(--ssk-margin-5);
}
.imput-text {
  border: 1px solid #000;
}
</style>
