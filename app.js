const app = Vue.createApp({
    data(){
        return{
            written: '',
            showWithEnter: ''
        }
    },
    methods: {
        showAlert(){
           return alert('hey, how are you?')
        },
        captureWritten(event){
            this.written = event.target.value
        },
        captureWithEnter(event){
            this.showWithEnter = event.target.value
        }
    }
})


app.mount('#assignment')