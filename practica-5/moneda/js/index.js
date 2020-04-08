
function conversor() {
    var valor = document.querySelector("#inputA").value;
    var selectA = document.getElementById("selectA").value;
    var selectB = document.getElementById("selectB").value;
    console.log(valor);
    console.log(selectB);
    console.log(selectA);
    var resultado;

    if ( selectA == selectB)
    resultado = valor;

    else if (selectA == "EUR"){
        if(selectB == "USD")
        resultado = 1.1 * valor;
        if(selectB == "BTC")
        resultado = 0.00017 * valor;
    }
    else if (selectA == "USD"){
        if(selectB == "EUR")
        resultado = 0.91 * valor;
        if(selectB == "BTC")
        resultado = 0.00016 * valor;
    }
    else if (selectA == "BTC"){
        if(selectB == "USD")
        resultado = 6447.70 * valor;
        if(selectB == "EUR")
        resultado = 5858.99 * valor;
    }
    document.getElementById("result").innerHTML = resultado;
    console.log(resultado);
};

function calculo(){
    var empresa = {
        "usuarios":[
          {
            "nombre": "Eduardo",
            "DNI": "63428534A",
            "fechaNacimiento":
              {
                "year": 1970,
                "mes": 2,
                "dia": 4
              }
            ,
            "fechaInicio":
              {
                "year": 2007,
                "mes": 5,
                "dia": 8
              }
            ,
            "plusT": 50,
            "plusA": 200,
            "sueldo_": 1300
          },{
            "nombre": "Sergio",
            "DNI": "54117944T",
            "fechaNacimiento": 
              {
                "year": 1999,
                "mes": 5,
                "dia": 25
              }
            ,
            "fechaInicio": 
              {
                "year": 2016,
                "mes": 2,
                "dia": 1
              }
            ,
            "plusT": 70,
            "plusA": 150,
            "sueldo_": 1500
          } 
        ]}
   
    var selectC = document.getElementById("selectC").value;
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() +1 ; //EL mes lo devuelve de 0 - 11 por tanto habra que sumerle 1
    var year = fecha.getFullYear();

    var nacimiento_dia = empresa.usuarios[selectC].fechaNacimiento.dia;
    var nacimiento_mes = empresa.usuarios[selectC].fechaNacimiento.mes;
    var nacimiento_year = empresa.usuarios[selectC].fechaNacimiento.year;
    console.log(nacimiento_year);
    var years_trabajados =  year - empresa.usuarios[selectC].fechaInicio.year;
    var sueldo_base = empresa.usuarios[selectC].sueldo_;
    var plusA_user = empresa.usuarios[selectC].plusA * years_trabajados;
    var plusT_user = empresa.usuarios[selectC].plusT;
    console.log(sueldo_base);
    var sueldo = sueldo_base +  plusA_user + plusT_user;

    var edad = year - nacimiento_year;
    if(mes < nacimiento_mes){
      edad = edad - 1;
    }
    else if(mes == nacimiento_mes){
      if(dia < nacimiento_dia){
        edad = edad - 1;
      }
    }
    console.log(sueldo);
    document.getElementById("edad").innerHTML = edad;
    document.getElementById("sueldo").innerHTML = sueldo;
    
}
