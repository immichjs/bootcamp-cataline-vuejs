<template>
  <button class="button-styled" @click="$emit('bird', 'Bem-te-vi')">
    <slot name="before" />
    {{ text }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IUser {
  id: number
  name: string
}

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      default: 'Default'
    },
    user: {
      type: Object as PropType<IUser>
    }
  }
})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}
</style>
