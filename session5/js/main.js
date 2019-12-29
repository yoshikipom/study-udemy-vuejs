Vue.filter('globalNumberFormat', function (value) {
    return value.toLocaleString();
})
Vue.filter('toUSD', function (jpy) {
    return jpy / 100;
})
Vue.filter('readMore', function (text, length, suffix) {
    return text.substring(0, length) + suffix;
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        htmlMessage: '<span style="color:red;">hello red world</span>',
        cloakMessage: 'hello cloak message',
        text: "moji",
        number: 100,
        ok: true,
        price: 2980000000,
        jpyPrice: 298000,
        sentence: 'In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design.',
        url: "https://www.google.com"

    },
    methods: {
        clickHandler: function (event) {
            this.message = this.message.split('').reverse().join('');
        }
    },
    filters: {
        numberFormat: function (value) {
            return value.toLocaleString();
        }
    }
})
