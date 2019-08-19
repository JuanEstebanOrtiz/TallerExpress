const express =  require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index.pug')
});

router.get('/index',(req, res, next) =>{
    res.render('index.pug')
});


router.get('/',(req,res) =>{
    res.render('ejerciciouno.pug')
});

router.get('/ejerciciouno',(req, res, next) =>{
    res.render('ejerciciouno.pug')
});

router.post('/ejercicio', (req,res, next) => {

    var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;

    n1 = Math.floor(Math.random() * (1+100));
    n2 = Math.floor(Math.random() * (1+100));
    n3 = Math.floor(Math.random() * (1+100));
    n4 = Math.floor(Math.random() * (1+100));
    n5 = Math.floor(Math.random() * (1+100));
    n6 = Math.floor(Math.random() * (1+100));
    n7 = Math.floor(Math.random() * (1+100));
    n8 = Math.floor(Math.random() * (1+100));
    n9 = Math.floor(Math.random() * (1+100));
    n10 = Math.floor(Math.random() * (1+100));
    
    var numMayor = Math.max(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numMenor = Math.min(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);

    res.render('ejerciciouno.pug',{
        n1: n1,
        n2: n2,
        n3: n3,
        n4: n4,
        n5: n5,
        n6: n6,
        n7: n7,
        n8: n8,
        n9: n9,
        n10: n10,
        numMayor: numMayor,
        numMenor: numMenor
    });
});


router.get('/',(req,res) =>{
    res.render('ejerciciodos.pug')
});

router.get('/ejerciciodos',(req, res, next) =>{
    res.render('ejerciciodos.pug')
});

router.post('/ejedos', (req,res, next) => {

    var dia = req.body.dia;
    var resultado;  

    switch(dia){
        case '4':
        case '11':
        case '18':
        case '25':
            resultado = 'El dia de septiembre del 2018 fue un Lunes';
            break;
        case '5':
        case '12':
        case '19':
        case '26':
            resultado = 'El día de septiembre del 2018 fue un Martes';
            break;
        case '6':
        case '13':
        case '20':
        case '27':
            resultado = 'El día de septiembre del 2018 fue un Miércoles';
            break;
        case '7':
        case '14':
        case '21':
        case '28':
            resultado = 'El día de septiembre del 2018 fue un Jueves';
            break;
        case '1':
        case '8':
        case '15':
        case '22':
        case '29':
            resultado = 'El día de septiembre del 2018 fue un Viernes';
            break;
        case '2':
        case '9':
        case '16':
        case '23':
        case '30':        
            resultado = 'El día de septiembre del 2018 fue un Sabádo';
            break;
        case '3':
        case '10':
        case '17':
        case '24':
            resultado = 'El día de septiembre del 2018 fue un Domingo';
            break;
        default:
            resultado = 'fuera del rango';
            break;
    }
    res.render('ejerciciodos.pug',{
        resultado : resultado
    });
});


router.get('/',(req,res) =>{
    res.render('ejerciciotres.pug')
})

router.get('/ejerciciotres',(req, res, next) =>{
    res.render('ejerciciotres.pug')
});

router.post('/ejetres', (req,res, next) => {

    var Num1,Num2,Num3;
    var resultadouno;
    var resultadodos;
    var resultadotres;

    Num1 = Math.floor(Math.random() * (1+100));
    Num2 = Math.floor(Math.random() * (1+100));
    Num3 = Math.floor(Math.random() * (1+100));

    if(Num1 > 50){
        resultadouno = 'El primer Numero es mayor a 50';
    }else if(Num1 < 20){
        resultadouno = 'El primer Numero es menor a 20';
    }else if(Num1 < 0){
        resultadouno = 'El primer Numero es negativo';
    }

    if(Num2 > 50){
        resultadodos = 'El primer Numero es mayor a 50';
    }else if(Num2 < 20){
        resultadodos = 'El primer Numero es menor a 20';
    }else if(Num2 < 0){
        resultadodos = 'El primer Numero es negativo';
    }

    if(Num3 > 50){
        resultadotres = 'El primer Numero es mayor a 50';
    }else if(Num3 < 20){
        resultadotres = 'El primer Numero es menor a 20';
    }else if(Num3 < 0){
        resultadotres = 'El primer Numero es negativo';
    }
    
    res.render('ejerciciotres.pug',{
        Num1: Num1,
        Num2: Num2,
        Num3: Num3,
        resultadouno: resultadouno,
        resultadodos: resultadodos,
        resultadotres: resultadotres,
    });
});


router.get('/',(req,res) =>{
    res.render('ejerciciocuatro.pug')
})

router.get('/ejerciciocuatro',(req, res, next) =>{
    res.render('ejerciciocuatro.pug')
});

router.post('/ejecuatro', (req,res, next) => {

    var Numero;
    var Tipo;

    Numero = Math.floor(Math.random() * (1+100));
    
    Tipo = (Numero%2)?"Impar":"par";

    res.render('ejerciciocuatro.pug',{
        Numero: Numero,
        Tipo: Tipo     
    });
});


router.get('/',(req,res) =>{
    res.render('ejerciciocinco.pug')
})

router.get('/ejerciciocinco',(req, res, next) =>{
    res.render('ejerciciocinco.pug')
});

router.post('/ejecinco', (req,res, next) => {

    var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;
    var par = [];
    var impar = [];

    n1 = Math.floor(Math.random() * (1+100));
    n2 = Math.floor(Math.random() * (1+100));
    n3 = Math.floor(Math.random() * (1+100));
    n4 = Math.floor(Math.random() * (1+100));
    n5 = Math.floor(Math.random() * (1+100));
    n6 = Math.floor(Math.random() * (1+100));
    n7 = Math.floor(Math.random() * (1+100));
    n8 = Math.floor(Math.random() * (1+100));
    n9 = Math.floor(Math.random() * (1+100));
    n10 = Math.floor(Math.random() * (1+100));
    
    var numMayor = Math.max(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numMenor = Math.min(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numero = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];
   
    for(var i = 0; i <= numero.length; i++){
        if(numero[i]%2 == 0){
            par.push(numero[i]);
        }else{
            impar.push(numero[i]);
        }
    }

    res.render('ejerciciocinco.pug',{
        n1: n1,
        n2: n2,
        n3: n3,
        n4: n4,
        n5: n5,
        n6: n6,
        n7: n7,
        n8: n8,
        n9: n9,
        n10: n10,
        numMayor: numMayor,
        numMenor: numMenor,
        par: par,
        impar: impar,
    });
});

router.get('/',(req,res) =>{
    res.render('ejercicioseis.pug')
})

router.get('/ejercicioseis',(req, res, next) =>{
    res.render('ejercicioseis.pug')
});

router.post('/ejeseis', (req,res, next) => {

    var estudiantes = 25;
    array = [Math.round(Math.random()*(1+5))];
    let notas = 0;
    var suma = 0;
   
    for(var i = 0; i < estudiantes; i++){
        var Notas = Math.round(Math.random()*(1+5)); 
        array[i] = Notas;
        suma = suma + Notas;
        dividir = suma / estudiantes;
    }

    res.render('ejercicioseis.pug',{
        estudiantes: estudiantes,
        array: array,
        Notas: Notas,
        notas: notas,
        suma: suma,
        dividir: dividir
    });
});

router.get('/',(req,res) =>{
    res.render('ejerciciosiete.pug')
})

router.get('/ejerciciosiete',(req, res, next) =>{
    res.render('ejerciciosiete.pug')
});

router.post('/ejesiete', (req,res, next) => {

    array = [Math.round(Math.random()*5)];
    var total = 0;
   
    for(var i = 0; i < 8; i++){
        var numero = Math.floor(Math.random()*(1+5));
        array[i] = numero;
    }

    total = array.reduce(function(a, b){return a + b})

    res.render('ejerciciosiete.pug',{
        array: array,
        total: total,
        numero: numero
    });
});


router.get('/',(req,res) =>{
    res.render('ejercicioocho.pug')
})

router.get('/ejercicioocho',(req, res, next) =>{
    res.render('ejercicioocho.pug')
});

router.post('/ejeocho', (req,res, next) => {

    Longitud_vector = Math.round(Math.random()*(1+20));
    array = [Math.round(Math.random()*(1+20))];
    par = new Array();
    impar = new Array();
    Suma_pares = 0;
    Suma_impares = 0;
   
    for(var i = 0; i <= Longitud_vector; i++){
        var numero = Math.floor(Math.random()*(1+20));
        array[i] = numero;

        if(array[i] % 2 == 0){
            par.push(array[i]);
        }else{
            impar.push(array[i]);
        }
    }

    Suma_pares = par.reduce(function(a, b){return a + b})
    Suma_impares = impar.reduce(function(a, b){return a + b})

    res.render('ejercicioocho.pug',{
        Longitud_vector: Longitud_vector,
        array: array,
        par: par,
        impar: impar,
        Suma_pares: Suma_pares,
        Suma_impares: Suma_impares,
        numero: numero
    });
});

module.exports = router;