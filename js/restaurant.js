var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {

    this.horarios = this.horarios.filter(hora => hora != horarioReservado);
    return this.horarios;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return this.promediarCalificacion(this.calificaciones);
    }
}

Restaurant.prototype.promediarCalificacion = function(arrayCalificacion){

    var sumaResultante = this.sumaArray(arrayCalificacion);
    var promedio = sumaResultante / arrayCalificacion.length;
    return Math.round(promedio * 10) / 10;
}

Restaurant.prototype.sumaArray = function(arrayASumar){
    var resultadoSuma = 0;
    for(var i = 0; i < arrayASumar.length; i++){
        resultadoSuma += arrayASumar[i]
    }
    return resultadoSuma;
}


