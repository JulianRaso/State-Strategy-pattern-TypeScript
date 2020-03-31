export default class state {

    static estado = "Pausa";

    static Estado(a:string){
        
        let mss = "Comando Repetido";

        if(this.estado == a){
            return mss;
        }
        else{
            this.estado = a;
            return this.estado;
        }
    }

}