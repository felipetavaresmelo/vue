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
            this.message = this.message.split('').re
        }
    }
})