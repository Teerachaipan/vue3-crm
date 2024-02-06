<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { applyTheme } from 'sellsuki-components'
import 'sellsuki-components'
import { useRouter, RouterView, useRoute } from 'vue-router'
import TopNavBar from '@/components/TopNavBar.vue'
import appLogo from './assets/img/logo/logo.png'

const route = useRoute();

// Customize Primary color and secondary for Oc2Plus
const t = applyTheme({
  colors: {
    primary: {
      50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAE6FD',
      300: '#7DD3FC',
      400: '#38BDF8',
      500: '#0EA5E9',
      600: '#0284C7',
      700: '#0369A1',
      800: '#075985',
      900: '#0C4A6E'
    },
    secondary: {
      50: '#F0FDFA',
      100: '#CCFBF1',
      200: '#99F6E4',
      300: '#5EEAD4',
      400: '#2DD4BF',
      500: '#14B8A6',
      600: '#0D9488',
      700: '#0F766E',
      800: '#115E59',
      900: '#134E4A'
    }
  },
})


const router = useRouter()


function onClickHome() {
  router.push({ name: 'home' })
}

function onClickToLogin() {
  console.log('login');
  router.push({ name: 'login' })
}

// function onClickProfile() {
//   router.push({ name: 'profile' })
// }
const profileUser = ref('')

onMounted(() => {
  // location.reload();
  const user = localStorage.getItem('user');
  if(user){
    const userDetail = JSON.parse(user)
    profileUser.value = userDetail.email
    console.log(profileUser);
  }
})

</script>

<template>
  <div class="app">
    <ssk-theme-provider :theme="t" SizeSystem="5xl">
      <top-nav-bar>
        <template v-slot:prepend>
          <div class="v-responsive" aria-label="oc2plus-logo" role="img" style="width: 150px">
            <div class="v-responsive__sizer" style="padding-bottom: 50%"></div>
            <img class="img img-contain" :src="appLogo" alt="oc2plus-logo" style="" />
          </div>
        </template>
        <template v-slot:append>
          <ssk-button variant="ghost" themeColor="primary" :onClick="onClickHome">Home</ssk-button>
          <!-- <ssk-button variant="ghost" themeColor="primary" :onClick="onClickProfile">Profile List</ssk-button> -->
          <div v-if="profileUser">
            <ssk-button variant="ghost" themeColor="secondary" size="md"><ssk-icon slot="prefix" name="solid-users" size="md"></ssk-icon>
              {{ profileUser || '-' }}
            </ssk-button>
          </div>
          <div v-else>
            <ssk-button variant="outline" themeColor="secondary" :onClick="onClickToLogin">Login</ssk-button>
          </div>
        </template>
      </top-nav-bar>
      <div class="layout-with-nav">
        <RouterView />
      </div>
    </ssk-theme-provider>
  </div>
</template>

<style scoped>
.layout-with-nav {
  padding-top: 72px; 
}

.v-responsive {
  display: flex;
  flex: 1 0 auto;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  margin-left: var(--ssk-margin-xl);
}

.v-responsive__sizer {
  flex: 1 0 0px;
  transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.img-contain {
  object-fit: contain;
}
</style>
