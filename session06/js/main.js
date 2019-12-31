var app = new Vue({
    el: '#app',
    data: {
        message: "hello world",
        basePrice: 100
    },
    methods: {
        reversedMessageMethod: function () {
            return this.message.split('').reverse().join('');
        },
        methodsNumber: function () {
            console.log('computed');
            return Math.random();
        }

    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
        taxIncludedPrice: {
            get: function () {
                return parseInt(this.basePrice * 1.08);
            },
            set: function (taxIncludedPrice) {
                this.basePrice = Math.ceil(taxIncludedPrice / 1.08);
            }
        },
        computedNumber: function () {
            console.log('methods');
            return Math.random();
        }
    },
})
