<script setup>
import { ref, onMounted } from "vue"
import { RouterLink, useRoute, useRouter} from 'vue-router'

const menus = [
    {
        name: 'Dashboard',
        routeName: 'admin-dashboard'
    },
    {
        name: 'Profile',
        routeName: 'admin-profile'
    },
    {
        name: 'User',
        routeName: 'admin-user'
    },
    {
        name: 'Logout',
        routeName: 'admin-login'
    },
]

const route = useRoute()
const router = useRouter()
const activeMenus = ref('')

onMounted(()=>{
    console.log('mouted active', route.name);
    activeMenus.value = route.name
})

const goToPage = (value) => {
  console.log(value);
  if (value === 'admin-login') {
    localStorage.clear();
    console.log('logout');
    router.push({ name: value})
    // window.location.reload();
  } else {
  router.push({ name: value})
  }
}

</script>

<template>
  <div class="drawer lg:drawer-open mt-4">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content mx-4">
      <!-- Page content here -->
      <!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> -->
    <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li class="text-3xl font-bold">
            <a>Oc2Plus CRM</a>
        </li>
        <li v-for="menu in menus" :key="menu">
            <!-- <RouterLink :to="{name: menu.routeName}" -->
              <div @click="goToPage(menu.routeName)"
              :class="menu.routeName === activeMenus ? 'active': '' ">
                {{menu.name}}
              </div>
            <!-- @click="goToPage(menu.routeName)"
            :class="menu.routeName === activeMenus ? 'active': '' " >{{menu.name}} -->
          <!-- </RouterLink> -->
        </li>
      </ul>
    </div>
  </div>
</template>
