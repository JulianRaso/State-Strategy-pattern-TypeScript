export default class strategy {

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

    
    static var1: number[] = []; //Cliente, Tiempo Aux

    static empleado(a:number, b:number){ 
        let cliente: number[] = []; //Cliente, Tiempo
         

        for(let i=0; i<cliente.length;i++){ //Las dos variables se tiene que guardar dentro del cliente
            if(this.var1[1] == null){
                this.var1[1] = cliente[i];
            }
            else{
                if(var1[1] == cliente)
            }
        }
    }


}