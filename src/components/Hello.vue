<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'Word'}">Word</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'this is  a hello components' +'------------'+this.$route.params.id
    }
  }
}
</script>

<style>

</style>
