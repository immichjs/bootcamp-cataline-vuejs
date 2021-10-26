<template>
  <div>
    <h1>{{ person.name }}</h1>
    <span>{{ fullName }}</span>

    <h3>{{ count }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>

    <a :href="product.url" :class="productClass">{{ product.name }}</a>

    <strong v-text="company" v-highlight.background.shadow="'red'"></strong>

    <p>Acesse: <span v-html="link"></span></p>

    <a href="#" @click.once.prevent="something">Link Interto</a>
    <input type="text" @keyup.k="something" />

    <p v-once>Estoque Inicial: {{ stock }}</p>
    <p>Estoque Atualizado: {{ stock }}</p>
    <button @click="stock++">Aumentar Stock</button>

    <h2 v-if="sex === 'Man'">Man</h2>
    <h2 v-else-if="sex === 'Woman'">Woman</h2>
    <h2 v-else>Other</h2>

    <ul>
      <li v-for="person in people" :key="person.id">
        Nome & Idade: {{ person.name }} - {{ person.age }}
      </li>
    </ul>

    <form>
      <input type="text" placeholder="Nome" v-model.trim="form.name" />

      <input type="number" placeholder="Idade" v-model.number="form.age" />

      <textarea
        rows="2"
        placeholder="Descrição"
        v-model.trim="form.message"
      ></textarea>

      <input type="checkbox" v-model="form.newsletter" /> Newsletter <br />

      <input type="radio" name="color" value="vermelho" v-model="form.color" />
      Vermelho
      <input type="radio" name="color" value="verde" v-model="form.color" />
      Verde
      <input type="radio" name="color" value="azul" v-model="form.color" /> Azul

      <select v-model="form.fruit">
        <option disabled selected>Selecione uma fruta</option>
        <option value="uva">Uva</option>
        <option value="banana">Banna</option>
        <option value="morango">Morango</option>
      </select>
    </form>

    <p>Nome: {{ form.name }}</p>
    <p>Idade: {{ form.age }}</p>
    <p>Mensagem: {{ form.message }}</p>
    <p>Newsletter: {{ form.newsletter }}</p>
    <p>Cor: {{ form.color }}</p>
    <p>Fruta: {{ form.fruit }}</p>

    <h1
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></h1>
    <h1 :class="['static', { 'text-danger': hasError }]"></h1>

    <ButtonStyled />
    <ButtonStyled text="Login">
      <template v-slot:before>
        <i class="fab fa-facebook-f"></i>
      </template>
    </ButtonStyled>
    <ButtonStyled text="Login" @bird="action($event)">
      <template v-slot:after>
        <i class="fab fa-google"></i>
      </template>
    </ButtonStyled>

    <div>
      <button @click="component = 'Home'">Home</button>
      <button @click="component = 'About'">About</button>
    </div>

    <component :is="component" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'

interface Person {
  name: string
  age: number
}

export default defineComponent({
  name: 'App',
  components: {
    Home,
    About
  },
  data() {
    return {
      person: {} as Person,
      name: 'Mich',
      lastname: 'França',
      count: 0,
      message: 'Cataline',
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true
      },
      company: 'Cataline',
      link: '<a href="https://cataline.io">Cataline</a>',
      stock: 1,
      sex: 'Outro',
      people: [
        { id: 1, name: 'Mich', age: 19 },
        { id: 2, name: 'Nicky', age: 18 }
      ],
      form: {
        name: '',
        age: 0,
        message: '',
        newsletter: false,
        color: '',
        fruit: ''
      },
      isActive: true,
      hasError: true,
      component: 'About'
    }
  },
  beforeCreate() {
    console.log(this.message)
  },
  created() {
    console.log(this.message)
  },
  beforeMount() {
    console.log(this.$el)
  },
  mounted() {
    console.log(this.$el)
  },
  beforeUpdate() {
    console.log('Antes de atualizar')
  },
  updated() {
    if (this.count === 5) this.count = 6
  },
  beforeUnmount() {
    console.log('Salvo no banco de dados')
  },
  unmounted() {
    console.log('Desmontado')
  },
  computed: {
    fullName(): string {
      return `${this.name} ${this.lastname}`
    },
    productClass(): string {
      return this.product.stock ? 'sucess' : 'danger'
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
    something() {
      console.log('Hello Cataline')
    },
    action(event: string) {
      console.log(event)
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(oldValue, newValue)
    }
  }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}

/* .button-styled {
  position: absolute;
  right: 0
}

::v-deep.button-styled span {
  color: #000
} */
</style>
