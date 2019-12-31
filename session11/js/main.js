var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    message: '',
    timeMessage: '',
    escMessage: '',
  },
  methods: {
    countUp: function (message, event) {
      this.count = this.count + 1;
      console.log(event);
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
      console.log(event.target.type);
      this.message = message;
    },
    clickHandler: function () {
      this.timeMessage = new Date().toLocaleTimeString();
    },
    clear: function () {
      this.escMessage = '';
    },
    clickMe: function () {
      alert('good click');
    }
  },
})
