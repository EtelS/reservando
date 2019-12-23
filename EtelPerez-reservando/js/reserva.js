//se crea el constructor
var Reserva= function(horario, cantpersonas,precioxpers,coddesc){
    this.horario= horario;
    this.cantpersonas= cantpersonas;
    this.precioxpers= precioxpers;
    this.coddesc= coddesc;
}

//se calcula el precio base
Reserva.prototype.precioBase= function(){
    return this.cantpersonas * this.precioxpers;
}
// se usa el metodo getDay y getHour para calcular el adicional por hora y dia
Reserva.prototype.adicional=function(){
    var adicional= 0
    if (this.horario.gethours === 13 || this.horario.gethours===20){
        adicional=this.precioBase*0.05;
    } 
    if (this.horario.getDay=== 4 || this.horario.getDay===5 || this.horario.getDay===6){
        adicional= this.precioBase*0.1;
    }
    return adicional;
}
// se calcula en cascada la cantidad de personas para usar menos lineas de codigo
Reserva.prototype.descxCant = function(){
    desccant=0;
    if (this.cantpersonas > 8){
        desccant=this.precioBase*0.15;
    }else if (this.cantpersonas>6){
        desccant=this.precioBase*0.1;
    }
    else if (this.cantpersonas>3){
        desccant=this.precioBase*0.05;
    }
    return desccant;
}

// se usa switch para calcular le descuento por codigo
Reserva.prototype.desxCod= function(){
    var desccod=0;
    switch(this.coddesc){
        case "DES15":
            desccod= this.precioBase*0.15;
            break;
        case "DES200":
            desccod=200;
            break;
        case "DES1":
            desccod= this.precioxpers;
            break;
        default:
            return 0;
    }
    return desccod;
}

// se hacen las sumas y restas de cada funcion
Reserva.prototype.precioFinal= function(){
    return preciofinal= this.precioBase()+this.adicional()-(this.descxCant()+this.desxCod());
    
}
