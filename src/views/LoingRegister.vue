<template>
  <div class="page-main">
    <div class="page-container">
        <div class="text-style">
            <ssk-text size="2xl">Register</ssk-text>
        </div>
        <ssk-divider size="xs"></ssk-divider>
        <div>
            <ssk-text size="md">ชื่อจริง</ssk-text>
            <!-- <ssk-input class="form" v-model="formData.firtname" placeholder="test"></ssk-input> -->
            <input type="text" placeholder="ชื่อจริง" class="input input-bordered w-full input-md " v-model="formData.firtname"/>
            <pre>{{formData.firtname}}</pre>
        </div>
        <div>
            <ssk-text size="md">นามสกุล</ssk-text>
            <ssk-input class="form" v-model="formData.lastname" placeholder="aaa" ></ssk-input>
        </div>
        <div>
            <ssk-text size="md">อายุ</ssk-text>
            <ssk-input class="form" v-model="formData.age" min="0" max="100" type="number"></ssk-input>
        </div>
        <div>
            <ssk-text size="md">เพศ</ssk-text>
            <div v-for="gender in genderList" v-bind:key="gender">
                <input type="radio" :value="gender" v-model="formData.gender"> {{ gender }}
            </div>
        </div>
        <div>
            <ssk-text size="md">สิ่งที่สนใจ</ssk-text>
            <div v-for="interest in interestList" v-bind:key="interest">
                <input type="checkbox" :value="interest" v-model="formData.interests"> {{ interest }}
                <!-- <ssk-checkbox :value='interest' :label='interest'></ssk-checkbox> -->
            </div>
        </div>
        <div>
            <ssk-text size="md">คำอธิบายเพิ่มเติม</ssk-text>
            <!-- <ssk-alert size="md" type="success" :message="mess"></ssk-alert> -->
            <textarea class="text-area-style"></textarea>
            <!-- <ssk-textarea size="md"></ssk-textarea> -->
        </div>
        <div>
            <ssk-button @click="submitData()">ส่งข้อมูล</ssk-button>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref} from 'vue';
import { reactive } from "vue"

let formData = reactive({
    firtname:"",
    lastname:"",
    age:0,
    gender:"",
    interests:[],
    description:"",
})

const genderList = ["male", "female", "none"]
const interestList = ["หนังสือ", "กีฬา", "เกม", "การเมือง"]
const mess = ref('testtt')
const submitData = () => {
    console.log('formData', JSON.parse(JSON.stringify(formData)))
    console.log('interest', formData.interests.join())
}
</script>
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
.text-style {
    text-align: center;
}
.text-area-style {
    border: 1px solid #000;
    width: 100%;
}
</style>
