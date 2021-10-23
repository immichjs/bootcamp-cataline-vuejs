<template>
  <div>
    <h1>{{ person.name }}</h1>
    <span>{{ fullName }}</span>

    <h3>{{ count }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  interface Person {
    name: string
    age: number
  }

  export default defineComponent({
    name: 'App',
    data() {
      return {
        person: {} as Person,
        name: 'Mich',
        lastname: 'França',
        count: 0,
        message: 'Cataline'
      }
    },
    beforeCreate () {
      console.log(this.message)
    },
    created () {
      console.log(this.message)
    },
    beforeMount () {
      console.log(this.$el)
    },
    mounted () {
      console.log(this.$el)
    },
    beforeUpdate () {
      console.log('Antes de atualizar')
    },
    updated () {
      if (this.count === 5) this.count = 6
    },
    beforeUnmount () {
      console.log('Salvo no banco de dados')
    },
    unmounted () {
      console.log('Desmontado')
    },
    computed: {
      fullName(): string {
        return `${this.name} ${this.lastname}`
      }
    },
    methods: {
      increment() {
        this.count++
      },
      decrement() {
        this.count--
      },
      reset() {
        this.count = 0
      },
    },
    watch: {
      count(newValue, oldValue) {
        console.log(oldValue, newValue)
      }
    }
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
