var expect = chai.expect;

describe('Test de la función reservarHorario(horario)', function(){

    describe('Cuando se reserva un horario de un restaurant', function(){
        it('Se elimina el horario del arreglo',function(){
            
            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var cantidadAnterior = resto.horarios.length
            resto.reservarHorario("21:00");
            expect(resto.horarios.length).to.eql(cantidadAnterior - 1);

        })
        it('El arreglo cambio y contiene exactamente los elementos correspondientes',function(){
            
            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            resto.reservarHorario("22:30");
            expect(resto.horarios).to.eql(['21:00', '15:00']);

        })
    });

    describe('Cuando se reserva un Horario que el restaurante no posee', function(){

        it('La cantidad de elementos del arreglo sigue igual', function(){

            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var cantidadAnterior = resto.horarios.length
            resto.reservarHorario("16:00");
            expect(resto.horarios.length).to.eql(cantidadAnterior);

        })
        it('El arreglo se mantiene exactamente con los mismos elementos', function(){

            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var horarioAnterior = resto.horarios;
            resto.reservarHorario("16:00");
            expect(resto.horarios).to.eql(horarioAnterior);

        })
    });
    describe('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro', function(){

        it('La cantidad de elementos del arreglo sigue igual', function(){

            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var cantidadAnterior = resto.horarios.length
            resto.reservarHorario("");
            expect(resto.horarios.length).to.eql(cantidadAnterior);

        })
        it('El arreglo se mantiene exactamente con los mismos elementos', function(){

            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var horarioAnterior = resto.horarios;
            resto.reservarHorario("");
            expect(resto.horarios).to.eql(horarioAnterior);

        })
    });
});

describe('Test de la función obtenerPuntuación()', function(){

    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function(){
    
        var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        expect(resto.obtenerPuntuacion()).to.equal(6.8);
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function(){
    
        var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", []);
        expect(resto.obtenerPuntuacion()).to.equal(0);
    })

})

describe('Test de la función calificar()', function(){
    describe('Cuando se agrega una nueva calificacion', function(){
        it('La calificacion es agregada correctamente', function(){
            
            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var cantidadCalificaciones = resto.calificaciones.length
            resto.calificar(9);
            expect(resto.calificaciones.length).to.eql(cantidadCalificaciones + 1);

        })
        it('Se agrega correctamente la calificacion pasada por parametro', function(){
            
            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            resto.calificar(9);
            var ultimaCalificacion = resto.calificaciones.pop();
            expect(ultimaCalificacion).to.equal(9);

        })
    })
    describe('Cuando se agrega una calificacion pero no se le pasa parametro', function(){
        it('La cantidad de elementos del arreglo sigue igual', function(){

            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var cantidadCalificaciones = resto.calificaciones.length;
            resto.calificar();
            expect(cantidadCalificaciones).to.equal(5);

        })
        it('El arreglo no se modifica de ninguna manera', function(){

            var resto = new Restaurant(24, "resto", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
            var arregloCalificaciones = resto.calificaciones;
            resto.calificar();
            expect(resto.calificaciones).to.eql(arregloCalificaciones);
        })
    })
})

describe('Test de la función buscarRestaurante(id)', function(){
    it('Dado un id, busca el restaurante con determinada id', function(){

        var listaRestaurantes = [
            new Restaurant(1, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(2, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(3, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
            new Restaurant(4, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),
            new Restaurant(5, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7])
        ];
        var restauranteBuscado = new Restaurant(3, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]);
        var lista = new Listado(listaRestaurantes);
        expect(lista.buscarRestaurante(3)).to.eql(restauranteBuscado)  
    })
    it('No se le pasan parametros de busqueda', function(){

        var listaRestaurantes = [
            new Restaurant(1, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(2, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(3, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
            new Restaurant(4, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),
            new Restaurant(5, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7])
        ];
        var lista = new Listado(listaRestaurantes);
        expect(lista.buscarRestaurante()).to.eql("No se ha encontrado ningún restaurant")

    })
})

describe('Test de la función obtenerRestaurantes()', function(){
    it('Se le pasan por parametros los filtros y devuelve el restaurantes correspondientes', function(){

        var listaRestaurantes = [
            new Restaurant(1, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(2, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(3, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
            new Restaurant(4, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),
            new Restaurant(5, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7])
        ];
        var lista = new Listado(listaRestaurantes);
        expect(lista.obtenerRestaurantes("Desayuno", "París", "14:30")).to.eql([
            new Restaurant(1, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10])
        ])

    })
    it('No se pasan parametros, el array se devuelve vacio', function(){

        var listaRestaurantes = [
            new Restaurant(1, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(2, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(3, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
            new Restaurant(4, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),
            new Restaurant(5, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7])
        ];
        var lista = new Listado(listaRestaurantes);
        expect(lista.obtenerRestaurantes()).to.eql([])

    })
})

describe('Objeto Reserva', function(){
    describe('Precio Base de Reserva', function(){
        it('El precio base de una reserva se calcula correctamente', function(){
            var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
            expect(reserva2.precioBase()).to.equal(300)
        })
    })
    describe('Adicionales', function(){
        describe('Por horario, se agrega un 5% de adicional', function(){
            it('A horas 13',function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 13, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorHora()).to.equal(5)
            })
            it('A horas 14',function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 14, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorHora()).to.equal(5)
            })
            it('A horas 20',function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 20, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorHora()).to.equal(5)
            })
            it('A horas 21',function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 21, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorHora()).to.equal(5)
            })
            it('Fuera de horario de cobro, no se agrega adicional por horario',function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 16, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorHora()).to.equal(0)
            })
        })
        describe('Adicional por fin de semana', function(){
            it('Si la reserva es dia viernes', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 16, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorDia()).to.equal(10)
            })
            it('Si la reserva es dia sabado', function(){
                var reserva = new Reserva (new Date(2018, 7, 25, 16, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorDia()).to.equal(10)
            })
            it('Si la reserva es dia domingo', function(){
                var reserva = new Reserva (new Date(2018, 7, 26, 16, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorDia()).to.equal(10)
            })
            it('Si la reserva es dia dia habil', function(){
                var reserva = new Reserva (new Date(2018, 7, 27, 16, 00), 8, 350, "DES1");
                expect(reserva.adicionalPorDia()).to.equal(0)
            })
        })
        describe('Adicional total',function(){
            it('Se suman correctamente los adicionales', function(){
                var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
                expect(reserva2.adicionalTotal()).to.equal(0)
            })
        })
    })
    describe('Descuentos', function(){
        describe('Por cantidad de personas', function(){
            it('Entre 4 y 6 personas, 5% de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 5, 350);
                expect(reserva.descuentosPorPersona()).to.equal(5)
            })
            it('Entre 7 y 8 personas, 10% de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 7, 350);
                expect(reserva.descuentosPorPersona()).to.equal(10)
            })
            it('Grupos de mas de 8 personas, 15% de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 9, 350);
                expect(reserva.descuentosPorPersona()).to.equal(15)
            })
        })
        describe('Descuentos por codigo', function(){
            it('Codigo DES15, obtiene 15% de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 9, 350, "DES15");
                expect(reserva.descuentosPorCodigo()).to.equal(15)
            })
            it('Codigo DES200, obtiene $200 de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 9, 350, "DES200");
                expect(reserva.descuentosPorCodigo()).to.equal(200)
            })
            it('Codigo DES1, obtiene el valor del precio de una persona de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 9, 350, "DES1");
                expect(reserva.descuentosPorCodigo()).to.equal(350)
            })
            it('No posee codigo de descuento', function(){
                var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 9, 350);
                expect(reserva.descuentosPorCodigo()).to.equal(0)
            })
        })
        describe('Descuentos Totales', function(){
            it('Se suman correctamente los descuentos', function(){
                var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150);
                expect(reserva2.descuentoTotal()).to.equal(0)
            })
        })
    })
    describe('Precio Total', function(){
        it('El precio total se calcula correctamente', function(){
            var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150)
            expect(reserva2.precioTotal()).to.equal(300)
        })
    })
})

