var todos =[
    {
        text: 'Learn inglish verbs',
        done: true
    },
    {
        text: 'Implemented a UI to make burguer',
        done: false
    }
];



const toDoApp = {
    data(){
        return{
            tasks: [], //tarefas adicionadas pelo usuário
            todos: window.todos, // tarefas de exemplo para o usuário
            newTask:{
                text: '',
                done: false  
            }

        }
    },
    methods:{
        addTask: function(){
            if(this.newTask.text){
                this.tasks.push({...this.newTask}); //adiciona no array do usuário
                this.newTask = {
                    done: false
                }
            }else{
                alert('To-do text is required')
            }
        }
    }
};

Vue.createApp(toDoApp).mount('#app');