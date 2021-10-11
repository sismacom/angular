export class Usuario{
    nombreUsuario!:string;
    passUsuario!:string;

    constructor(nombre:string,pass:string){
        this.nombreUsuario=nombre;
        this.passUsuario=pass
    }
}