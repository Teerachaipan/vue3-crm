<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  elevation: {
    type: String,
    default: '2'
  }
})

const navbarClass = computed(() => {
  return `elevation-${props.elevation}`
})
</script>

<template>
  <div class="navbar-layout">
    <div :class="['navbar', navbarClass]">
      <div class="navbar-content" style="height: 72px">
        <div class="navbar-prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="navbar-append">
          <slot name="append"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-layout {
  top: 0px;
  z-index: 1008;
  transform: translateY(0%);
  position: fixed;
  left: 0px;
  width: calc((100% - 0px) - 0px);
}

.elevation-0 {
  box-shadow: none;
}

.elevation-1 {
  box-shadow: var(--ssk-box-shadow-xs);
}
.elevation-2 {
  box-shadow: var(--ssk-box-shadow-sm);
}
.elevation-3 {
  box-shadow: var(--ssk-box-shadow-md);
}
.elevation-4 {
  box-shadow: var(--ssk-box-shadow-lg);
}
.elevation-5 {
  box-shadow: var(--ssk-box-shadow-xl);
}

.elevation-6 {
  box-shadow: var(--ssk-box-shadow-2xl);
}

.elevation-7 {
  box-shadow: var(--ssk-box-shadow-3xl);
}

.elevation-8 {
  box-shadow: var(--ssk-box-shadow-4xl);
}
.elevation-9 {
  box-shadow: var(--ssk-box-shadow-5xl);
}

/* Add a black background color to the top navigation */
.navbar {
  top: 0px;
  left: 0px;
  width: calc((100% - 0px) - 0px);
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100%;
  overflow: hidden;
  transition-property: height, width, transform, max-width, left, right, top, bottom, box-shadow;
  border-color: var(--border-color-border-900);
  border-style: solid;
  border-width: 0;
  background-color: var(--colors-white-50);
}

.navbar-content {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  transition: inherit;
}

.navbar-prepend {
  margin-inline-start: 10px;
  margin-inline-end: auto;
}

.navbar-append {
  margin-inline-start: auto;
  margin-inline-end: 10px;
}

.navbar-prepend,
.navbar-append {
  align-items: center;
  align-self: stretch;
  display: flex;
}
</style>
