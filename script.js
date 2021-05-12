const app = Vue.createApp({
    data(){
        return{
            estatus: false,

            estatus2: false,
            imagen: "focoOn.png"
        }
    },
    methods:{
        cambiarEstatus(){
            if(this.estatus2 == true){
                this.imagen = "focoOn.png"
                this.estatus2 = false
            }
            else{
                this.imagen = "focoOff.png"
                this.estatus2 = true
            }
        }
    }
})

const vm = app.mount('#app')