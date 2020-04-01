export default class strategy {

    static precios: number[] = [15,60,20];
    static tiempo: number[] = [35,10,25];
    static vehiculos: string[] = ["Colectivo","Auto","Combi"];

    static traslado(a:number,b:number){  //Tiempo, Precio Disponible
        let tiempF = this.Tiempo(b);
        let precioF = this.Precio(a);



        if(tiempF != null && precioF != null){
            return this.vehiculos[precioF]
        }
        else if(tiempF != null && precioF == null){
            return this.vehiculos[tiempF]
        }
        else if(tiempF == null && precioF != null){
            return this.vehiculos[precioF]
        }
        else{
            return "Error";
        }
        
        
    }

    static Tiempo(b:number){
        
        for(let i=0;i<4;i++){
            if(b == this.tiempo[i]){
                return i;
            }
            else{
                return null
            }
        }
    }

    static Precio(a:number){
        
        for(let i=0;i<4;i++){
            if(a == this.precios[i]){
                return i;
            }
            else{
                return null
            }
        }
    }


}