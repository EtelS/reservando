var expect = chai.expect;

describe('Test de Horarios del Restaurant ',function(){
    //ingreso un nuevo restaurant sacado del listado de restaurantes, le pongo let para qeu solo funcione en este entorno
    let restaurant= new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        it ('Al reservar un horario, el arreglo disminuye en uno', function(){
        let cantHorarios= restaurant.horarios.length;
        restaurant.reservarHorario("15:30");
        expect (restaurant.horarios.length).to.equal (cantHorarios-1);
    })

    it ('Si el horario no existe, nada cambia', function(){
        var arrayHorarios= (restaurant.horarios);
        restaurant.reservarHorario("20:00");
        expect (restaurant.horarios).to.eql (arrayHorarios);
    })

    it ('Si le paso un horario vacio, el arreglo queda igual',function(){
        var arrayHorarios= (restaurant.horarios);
        restaurant.reservarHorario("20:00");
        expect (restaurant.horarios).to.eql (arrayHorarios);
    })
})

describe('Test de puntuaciones del Restaurant ',function(){
    it('Dado un restaurant, la puntuacion se calcula correctamente',function(){
        let otroRestaurant= new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
        expect (otroRestaurant.obtenerPuntuacion()).to.equal(6.6);
    })
    it ('Dado un restaurant sin calificaciones, la puntuacion es igual a 0', function(){
        let otroRestaurant= new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [0, 0, 0, 0, 0]);
        expect (otroRestaurant.obtenerPuntuacion()).to.equal(0);
    })
})

describe ('Test de calificaciones ', function(){
    it('Si la puntuacion es menor a 0, no sucede nada',function(){
        let otroRestaurant= new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
        let cantCalificaciones= otroRestaurant.calificaciones.length;
        otroRestaurant.calificar(-5);
        expect (otroRestaurant.calificaciones.length).to.equal(cantCalificaciones);
    })
    it('Si la puntuacion es menor a 10, no sucede nada',function(){
        let otroRestaurant= new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
        let cantCalificaciones= otroRestaurant.calificaciones.length;
        otroRestaurant.calificar(15);
        expect (otroRestaurant.calificaciones.length).to.equal(cantCalificaciones);
    })
    it('Si la puntuacion esta dentro del rango de 0 a 10, se agrega una calificacion',function(){
        let otroRestaurant= new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
        let cantCalificaciones= otroRestaurant.calificaciones.length;
        otroRestaurant.calificar(7);
        expect (otroRestaurant.calificaciones.length).to.equal(cantCalificaciones+1);
    })
})

describe ('Test de busqueda de Restaurantes', function(){
    it('Al pasar un ID Valido, tiene que devolver un objeto', function(){
        expect(listado.buscarRestaurante(3)).to.be.an("Object");
    })
    it('Si paso un ID invalido, debe devolver un String',function(){
        expect(listado.buscarRestaurante(0)).to.be.an("String");
    })
})

describe('Test de funcion obtenerRestaurantes',function(){
    it('Si existe el lugar y el horario, devuelve un arreglo',function(){
        expect(listado.obtenerRestaurantes(null, "Roma", "18:00")).to.be.an("Array");
    })
    it('Si existe el rubro y el horario, devuelve un arreglo',function(){
        expect(listado.obtenerRestaurantes("Pizza", null, "18:00")).to.be.an("Array");
    })
    it('Si existe el rubro y el lugar, devuelve un arreglo',function(){
        expect(listado.obtenerRestaurantes("Pizza", "Roma", null)).to.be.an("Array");
    })
    it('Si no existe el rubro, devuelve un array vacio', function(){
        expect(listado.obtenerRestaurantes("Asado", "Roma", "18:00").length).to.equal(0);
    })
    it('Si paso todos los parametros nulos, devuelve todos los Restaurantes',function(){
        expect(listado.obtenerRestaurantes(null, null, null).length).to.equal(24);
    })
    it('Si paso todos los parametros vacios, no devuelve nada',function(){
        expect(listado.obtenerRestaurantes("","", "").length).to.equal(0);
    })
})

describe('Test de funcionalidad de Reserva', function(){
    let reserva1= new Reserva (new Date(2018,7,24,11,00),8,350,"DES1");
    let reserva2= new Reserva (new Date(2018,7,27,14,100),2,150,"DES200")
    it('Que el restaurante calcule correctamente su precio base', function(){
        expect(reserva1.precioBase()).to.equal(2800);
    })
    it ('Que el restaurante calcule correctamente su precio final',function(){
        expect(reserva2.precioFinal()).to.equal(100)
    })
})