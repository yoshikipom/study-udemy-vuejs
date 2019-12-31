var app = new Vue({
    el: '#app',
    data: {
        message: "hello view js",
        km: 0,
        m: 0,
        mm: 0,
        firstName: '',
        lastName: '',
        // fullName: '',
        colors: [
            { name: 'Red' },
            { name: 'Green' },
            { name: 'Blue' },
        ]
    },
    methods: {
    },
    watch: {
        message: function (newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue);
        },
        km: function (value) {
            // console: log(value);
            this.km = value;
            this.m = value * 1000;
            this.mm = value * 1000000;
        },
        m: function (value) {
            this.km = value / 1000;
            this.m = value;
            this.mm = valu * 1000;
        },
        mm: function (value) {
            this.km = value / 1000000;
            this.m = value / 1000;
            this.mm = value;
        },
        // firstName: function (value) {
        //     this.fullName = value + ' ' + this.lastName;
        // },
        // lastName: function (value) {
        //     this.fullName = this.firstName + ' ' + value;
        // },
        colors: {
            handler: function (newValue, oldValue) {
                console.log('updated');
                console.log('new: %s, old:: %s',
                    JSON.stringify(newValue, null, '\t'),
                    JSON.stringify(oldValue, null, '\t')
                );

            },
            deep: true,
            immediate: true,
        }
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
})
