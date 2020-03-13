var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Oi Felipe!',
    }
});
app.message = 'I have changed the data!';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})
app2.message = 'alguma nova mensagem';

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
app3.seen = true

var app4 = new Vue({
    el: '#app-4',
    data:{
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Criar algo incrivel' }
        ]
    }
})

app4.todos.push({ text: 'Novo item'})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Olá Vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data:{
        message: 'Olá Vue!'
    }
})

Vue.component('todo-item', {
    //O Componente todo-item agora aceita uma 
    //"prop", que é como um atributo personalizado.
    //Esta propriedade foi chamada de "todo".
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetais'},
            {id: 1, text: 'Queijo'},
            {id: 2, text: 'Qualquer outra coisa que humanos podem comer'}
        ]
    }
})

var appVueSchool = new Vue({
    el: '#appVueSchool',
    data:{

    },

    computed: {
        categories(){
            return Object.values("Array")
        }
    },

    beforeCreate() {
        console.log('beforeCreate', this.categories)
    },

    created() {
        console.log('created', this.categories)
    },

    beforeMount() {
        console.log('beforeMount', this.categories)
    },

    mounted() {
        console.log('mounted', this.categories, this.$el.innerText)
    },

    beforeDestroy() {
        console.log('beforeDestroy - turn off listeners', this.categories)
    },

    destroyed() {
        console.log('destroyed', this.categories)
    },
})
