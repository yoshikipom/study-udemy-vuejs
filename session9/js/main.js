var app = new Vue({
  el: '#app',
  data: {
    isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
      large: true,
      'text-danger': true,
    },
    largeClass: {
      large: true,
      'bg-gray': true,
    },
    dangerClass: {
      'text-danger': true,
    },
    color: 'blue',
    fontSize: 36,
    styleObject: {
      color: 'blue',
      fontSize: '36px',
    }
  },
  methods: {
  },
})
