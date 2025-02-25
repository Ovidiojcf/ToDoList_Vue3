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
                };
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }else{
                alert('To-do text is required')
            }
        },
        storeAll(){
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    created(){
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : this.tasks;
    }
    //necessário para atualizar a tarefa como feito no localStorage
    // updated(){
    //     localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // }
};

Vue.createApp(toDoApp).mount('#app');
