var Reserva = function(horario, cantidadPersonas, precioPersona, descuento){
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.descuento = descuento;
}

Reserva.prototype.precioBase = function(){
    return this.cantidadPersonas * this.precioPersona;
}

Reserva.prototype.adicionalTotal = function(){
    var adicionalPorcentual = this.adicionalPorDia() + this.adicionalPorHora()
    var adicionalEnPesos = this.precioBase() * adicionalPorcentual / 100
    return adicionalEnPesos;
}
Reserva.prototype.adicionalPorHora = function(){
    var determinarHora = this.horario.getHours();
    if(determinarHora == 13 || determinarHora == 14 || determinarHora == 20 || determinarHora ==21){
        return 5;
    } else {
        return 0;
    }
}
Reserva.prototype.adicionalPorDia = function(){
    var determinarDia = this.horario.getDay();
    if(determinarDia == 0 || determinarDia == 5 || determinarDia == 6){
        return 10;
    } else {
        return 0;
    }
}

Reserva.prototype.descuentoTotal = function(){
    if(this.descuentosPorCodigo() == 15){
        var descuentoPorcentual = this.descuentosPorCodigo() + this.descuentosPorPersona();
        return this.precioBase() * descuentoPorcentual / 100
    } else {
        return this.precioBase() * this.descuentosPorPersona() / 100 + this.descuentosPorCodigo();
    }
}
Reserva.prototype.descuentosPorPersona = function(){
    var personas = this.cantidadPersonas
    if(personas >=4 && personas <=6){
        return 5;
    } if (personas == 7 || personas == 8){
        return 10;
    } if (personas > 8){
        return 15
    }
    return 0;
}
Reserva.prototype.descuentosPorCodigo = function(){
    var codigo = this.descuento;
    if(codigo == "DES15"){
        return 15;
    } if (codigo == "DES200"){
        return 200;
    } if (codigo == "DES1"){
        return this.precioPersona;
    }
    return 0;
}

Reserva.prototype.precioTotal = function(){
    return this.precioBase() + this.adicionalTotal() - this.descuentoTotal();
}

