<script setup lang="ts">
import {type PropType} from 'vue'


export interface TableHeader {
  name: string,
  text: string
}


const props = defineProps({
  headers: {
    type: Array as PropType<TableHeader[]>,
    default: () => []
  },
  items: {
    type: Array as PropType<{[key: string]: string}[]>,
    default: () => []
  }
})


</script>

<template>
  <div class="ssk-data-table _ssk-data-table elevation-0">
    <div class="ssk-data-table__wrapper">
      <table>
        <thead class="ssk-data-table-header">
          <tr>
            <th v-for="header in props.headers" :key="header.name" class="text-start">
              <span>{{ header.text }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in props.items" :key="index">
            <td v-for="header in props.headers" :key="header.name + index" class="text-start">
              <span>
                {{ item[header.name] || '-' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.ssk-data-table {
  line-height: 1.5;
  max-width: 100%;
}

.elevation-0 {
  -webkit-box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important;
    box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important;
}

._ssk-data-table {
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}



._ssk-data-table .ssk-data-table__wrapper {
  border-radius: 6px 6px 0px 0px !important;
}

.ssk-data-table__wrapper {
  overflow-x: auto;
  overflow-y: hidden;
}

.ssk-data-table> .ssk-data-table__wrapper> table {
  width: 100%;
  border-spacing: 0;
}

._ssk-data-table .ssk-data-table__wrapper > table  > thead {
  background-color: rgb(248, 248, 248) !important;
}

.ssk-data-table>.ssk-data-table__wrapper>table>tbody>tr>th, .ssk-data-table>.ssk-data-table__wrapper>table>thead>tr>th {
  -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 48px;
    font-size: var(--ssk-font-size-xs)
}

.ssk-data-table>.ssk-data-table__wrapper>table>tbody>tr>td, .ssk-data-table>.ssk-data-table__wrapper>table>tbody>tr>th, .ssk-data-table>.ssk-data-table__wrapper>table>tfoot>tr>td, .ssk-data-table>.ssk-data-table__wrapper>table>tfoot>tr>th, .ssk-data-table>.ssk-data-table__wrapper>table>thead>tr>td, .ssk-data-table>.ssk-data-table__wrapper>table>thead>tr>th {
  padding: 0 16px;
    -webkit-transition: height .2s cubic-bezier(.4,0,.6,1);
    transition: height .2s cubic-bezier(.4,0,.6,1);
}

.text-start {
  text-align: start!important;
}

.ssk-data-table table td, .ssk-data-table table th {
  white-space: nowrap;
  padding: 0 0 0 32px;
}

.ssk-data-table table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
  color: rgb(36, 42, 67) !important;
}

.ssk-data-table>.ssk-data-table__wrapper>table>tbody>tr>td {
  padding: 0 16px;
    -webkit-transition: height .2s cubic-bezier(.4,0,.6,1);
    transition: height .2s cubic-bezier(.4,0,.6,1);
}

</style>
