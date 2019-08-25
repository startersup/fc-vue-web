<template>
  <div id="app">
<navbar></navbar>
 <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import css from './assets/css/style.css'
/*eslint-disable*/
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>


