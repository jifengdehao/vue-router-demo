<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{ name: 'Hello', params: { id: 123 }}">Hello</router-link>
    <router-link :to="'Apple'">Apple</router-link>
    <router-link :to="'Banana'">Banana</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  /**
   * es6  let, const, class, extends, super, arrow functions, template string, destructuring, default, rest arguments
   */
  /**
   * es6 面向对象写法   //箭头函数 ()=>{}  函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
   */
  /*class Animal {
   constructor() {
   this.type = 'animal'
   }

   says(message) {
   /!*
   var self=this
   setTimeout(function () {
   console.log(self.type + ' say ' + message)
   },1000)
   *!/
   /!*
   setTimeout(function () {
   let self = this
   console.log(self.type + ' says ' + message)
   }.bind(this), 1000)
   *!/
   setTimeout(() => {
   console.log(this.type + ' says ' + message)
   }, 1000)
   }
   }
   let animal = new Animal()
   animal.says('hello') //Animal say hello
   class Cat extends Animal {
   constructor() {
   super()
   this.type = 'cat'
   }
   }
   let cat = new Cat()
   cat.says('hello')  //cat say hello*/
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #app .active {
    color: indianred;
  }
</style>
