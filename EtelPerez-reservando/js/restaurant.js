var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

// Restaurant.prototype.reservarHorario = function(horarioReservado) {
//     for (var i = 0; i < this.horarios.length; i++) {
//         if (this.horarios[i] === horarioReservado) {
//             this.horarios.splice(i, 1);
//             return;
//         }
//     }
// }

Restaurant.prototype.reservarHorario = function(horarioReservado) {
 //se refactoriza la funcion usando filter
 
    let horariosFiltrado = this.horarios.filter(function(horario){
         return  horario!==horarioReservado;
     })
     this.horarios = horariosFiltrado;
     return;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}
//se modularizan las funciones sumatoria y promedio para que esten por separado de obtenerPuntuacion
function sumatoria(numeros){
    var sumatoria = 0;
    for (var i = 0; i < numeros.length; i++) {
        sumatoria += numeros[i]
    }
    return sumatoria;
}

function promedio(numeros){
    let arregloNumeros= numeros.length;
    var promedio = sumatoria(numeros) / arregloNumeros;
    return Math.round(promedio * 10) / 10;}



Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return promedio(this.calificaciones);
    }
}



