<script setup lang="ts">
import { ref, reactive, computed } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const state = reactive({ countObj: 0 });
const increment = () => {
  state.countObj++;
};
// const varTest = import.meta.env.VITE_TEST_VAR
const isChecked = ref(false);
const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

// case computed
const firstName = ref("");
const lastName = ref("");
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});
const priceUSD = ref(0);
const exchangeRate = 35;

const priceTHB = computed({
  get: () => priceUSD.value * exchangeRate,
  set: (newValue) => {
    priceUSD.value = newValue / exchangeRate;
  },
});
</script>

<template>
  <div class="page-main">
    <div class="page-container">
      <div>
        <h1>{{ msg }}</h1>
        <div class="card">
          <!-- <button type="button" @click="count++">count is {{ count }}</button> -->
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>

        <p>
          Check out
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
            >create-vue</a
          >, the official Vue + Vite starter
        </p>
        <p>
          Install
          <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
          in your IDE for a better DX
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
        <h2>input</h2>
        <ssk-input></ssk-input>
        <div class="text-css">
          <ssk-text size="2xl">Hello World</ssk-text>
          <ssk-text size="sm">This is small text</ssk-text>
          <ssk-text size="md">This is medium text</ssk-text>
          <ssk-text size="lg">This is large text</ssk-text>
          <!-- <ssk-text size="md">This is env Text "{{ varTest }}"</ssk-text> -->
        </div>
        <div>
          <!-- <button @click="clickOn" type="button">Click ME</button> -->
          <ssk-heading>Show case Web Component</ssk-heading>
          <div class="button-gap">
            <ssk-button size="xs" themeColor="primary" @click="increment">up</ssk-button>
            <ssk-text size="2xl">{{ state.countObj }}</ssk-text>
          </div>
          <div>
            <input type="checkbox" v-model="isChecked" />
            ติ๊กถูกเพื่อแสดงผล
          </div>
          <div v-if="isChecked">Checkbox is checked!</div>
        </div>
        <div class="loop-vue">
          <ul>
            <li v-for="(item, index) in items" :key="index">
              {{ index + 1 }}. {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>computed</p>
        <div>
          <div>Your fullname: {{ fullName }}</div>
          <div>Firstname <input type="text" v-model="firstName" /></div>
          <div>Lastname <input type="text" v-model="lastName" /></div>
        </div>
        <div>
          Price in USD <input type="number" v-model="priceUSD" /> Price in THB
          <input type="number" v-model="priceTHB" />
          <p>Price in USD: ${{ priceUSD }}</p>
          <p>Price in THB: {{ priceTHB }}฿</p>
        </div>
        <button class="bg-indigo-600 px-4 py-3 text-center text-mb font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95">
          Tailwind Button
        </button>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
      <div>
        <h2>DasiyUi</h2>
        <button class="btn">Button</button>
        <button class="btn btn-neutral">Neutral</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-ghost">Ghost</button>
        <button class="btn btn-link">Link</button>
        <button class="btn btn-outline">Default</button>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
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
.button-gap {
  margin: var(--ssk-margin-sm);
}
form {
  width: 300px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

input[type="submit"]:hover {
  opacity: 0.8;
}
</style>
