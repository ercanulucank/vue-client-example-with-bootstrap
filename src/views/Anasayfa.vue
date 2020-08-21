<template>
  <div class="hello">
    <Menu/>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Anasayfa',
  components: {
    Menu
  },
  data () {
    return {
      msg: 'burası anasayfa'
    }
  }
}
</script>
