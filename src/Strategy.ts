export default class strategy {

    static precios: number[] = [15,60,20];
    static tiempo: number[] = [35,10,25];
    static vehiculos: string[] = ["Colectivo","Auto","Combi"];

    static traslado(a:number,b:number){  //Tiempo, Precio Disponible
        let precioF = this.Precio(a);
        let tiempF = this.Tiempo(b);


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

    static Precio(a:number){
        let aux = null

        for(let i=0;i<3;i++){
            if(a == this.precios[i]){
                aux=i;
            }
        }
        return aux;

    }

    static Tiempo(b:number){
        let aux = null

        for(let i=0;i<3;i++){
            if(b == this.precios[i]){
                aux=i;
            }
        }
        return aux;
    }

}