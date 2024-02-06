<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { reactive, ref } from 'vue';

const router = useRouter()

const userAdmin = reactive({
  email: '',
  password: '',
})

const email = ref('');
const password = ref('');

const loginUserAdmin = () => {
  console.log('Email:', email.value);
  // console.log('Password:', password.value);
  userAdmin.email = email.value
  userAdmin.password = password.value
  localStorage.setItem("user", JSON.stringify(userAdmin));

  // router.push({ name: 'admin-dashboard'})
  // const amsUrlPro ='https://accounts.sellsuki.com'
  const amsUrl = 'http://127.0.0.1:4455/welcome?theme=sellsuki'
  const amsDomain='https://localhost:5173/admin/dashboard'
  const amsPatona = 'https://accounts.dev.patona.online/'
  const testUrl = 'https://accounts.dev.sellsuki.com/welcome?theme=sellsuki'

  window.location.href = `${amsUrl}/cookie?destination_accounts_url=${testUrl}&referer=${amsDomain}`;
}

</script>
<template>
    <div class="hero min-h-screen bg-base-200 mt-4">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <ssk-text size="3xl" fontweight="bold">Login now!</ssk-text>
          <ssk-text class="py-6">Welcome to Oc2Plus LINE CRM. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolore accusamus. Mollitia, eligendi voluptates. Nostrum nobis, quaerat, ex distinctio, veniam dicta facere eligendi et nihil ullam architecto possimus! Similique, corporis!</ssk-text>
        </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
                @input="email = $event.target.value"
                :value="email"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                @input="password = $event.target.value"
                :value="password"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <!-- <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <ssk-input
                size="md"
                placeholder="Placeholder"
                @input="email = $event.detail.value"
                :value="email"> 
              </ssk-input>
            </div> -->
            <!-- <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <ssk-input
                size="md"
                placeholder="password"
                @input="password = $event.target.value"
                :value="password"> 
              </ssk-input>
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div> -->
            <div class="form-control mt-6">
              <!-- <div class="btn btn-primary" @click="loginUserAdmin()">Login</div> -->
              <!-- <RouterLink :to="{ name: 'admin-dashboard'}" class="btn btn-primary">Login</RouterLink> -->
              <div class=" flex items-center justify-center">
                <ssk-button @click="loginUserAdmin()" variant="solid" size="md" themecolor="success" width="full" >Login</ssk-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
