var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function (event) {
            if (this.newItem == '') return;

            var todo = {
                item: this.newItem,
                isDone: false
            };

            this.todos.push(todo);
            this.newItem = '';
        },
        deleteItem: function (index) {
            // delete element from index(size 1
            this.todos.splice(index, 1);
        }
    },
})
