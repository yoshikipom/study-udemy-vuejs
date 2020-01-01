Vue.component('hello-component', {
  template: '<p>Hello</p>',
});

var helloLocalComponent = {
  template: '<p>hello local component</p>',
}

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0,
    }
  },
  template: '<button @click="count++">{{count}}</button>'
})
var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  },
  components: {
    'hello-local-component': helloLocalComponent,
  }
})
