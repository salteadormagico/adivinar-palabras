document.addEventListener('DOMContentLoaded', function () {
    const jugador = document.getElementById('jugador1');
    const estado = document.getElementById('estado');
    const confirmar = document.getElementById('confirmar');
    const confirmaradv = document.getElementById('confirmaradv');
    const msAdivinar = document.getElementById('ms-adivinar');
    const letras = document.getElementById('letras');
    const puntuacion = document.getElementById('puntuacion');
    let oculta = []
    //Array de palabras
    const palabras = ['coche', 'puerta', 'jardin', 'casa', 'monitor', 'ordenador', 'teclado', 'raton', 'botella', 'altavoz', 'mando', 'sofa', 'sillon', 'silla', 'mesa', 'lapiz', 'goma', 'television', 'libro'];
    //palabra aleatoria
    let palabra_real = palabras[(Math.random()* 19).toFixed(0)];
    letras.innerHTML = setNumLetras(palabra_real); 
    let j =  setNumLetras(palabra_real);
    for (i = 0; i < j.length; i++) {
        oculta.push(j[i]);
    }
    console.log(oculta);
    console.log(oculta);
    let palabra = jugador.value;
    let intentos = 5;
    let game_over = false;
    let punt1 = 0;
    if (game_over === false) {
        estado.innerHTML = '';
    } else if (game_over === true) {
        estado.innerHTML = 'game over';
    } else {
        console.error('ha ocurrido un error');
    }
    
    let id = 0;
    let turno = 0;

    confirmaradv.addEventListener('click', function () {
        document.getElementById('adivinar-palabra').style.display = 'none';
        document.getElementById('ms-adivinar1').style.display = 'block';
        
    })
    /*
    msAdivinar.addEventListener('click', function () {
        document.getElementById('adivinar-palabra').style.display = 'block';
        msAdivinar.style.display = 'none';
    });*/

    console.log(palabra_real);

    jugador.addEventListener('input', function () {
        estado.innerHTML = '';
    });
    confirmar.addEventListener('click', function () {
        intento(palabra_real, jugador.value);
        console.log(jugador.value);
        /*
        if (jugador.value === palabra_real) {
            estado.innerHTML = 'has ganado';
            punt1++;
            palabra_real = palabras[(Math.random()* 19).toFixed(0)];
            letras.innerHTML = setNumLetras(palabra_real);
        } else {
            if (intentos != 0) {
            intentos--;
            estado.innerHTML = `has fallado, intentos restantes: ${intentos}`;
        }  else {
                game_over = true;
                estado.innerHTML = estado.value + ' ,has perdido';
                letras.innerHTML = palabra_real;
                punt1 = 0;
                }
            }
        if (intentos === 0) {
            game_over = true;
        }
        puntuacion.innerHTML = `puntuación: ${punt1}`;
        oculta = setNumLetras(palabra_real);
        console.log(oculta);*/
    });
    function intento (palabra, letra) {
        if (palabra.indexOf(letra) != -1) {
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === letra) {
                    oculta[i] = letra;
                    console.log(oculta);
                }
                letras.innerHTML = oculta.join('');
                console.log(oculta.join(''));
                console.log('intento');
            }
        }
    }
    function comprPalabra (palabraReal, palabra) {
        if (palabra === palabraReal) {
            estado.innerHTML = 'has ganado';
            return;
        } else {
            intentos--;
            estado.innerHTML = `has fallado, intentos restantes: ${intentos}`;
        }
    }
    function setLetras (letra, palabra) {
        cuenta = 0;
        for (let i = 0; i < palabra.length; i++) {
            
        }
    }
    function setNumLetras(palabra) {
        let view = palabra[0];
        //estado.innerHTML = palabra[0];
        for (let i = 0; i < palabra.length - 2; i++) {
            view += '_';
        }
        view += palabra[palabra.length - 1];
        return view;
    }
    function generarABC (a, z) {
        document.getElementById("abcdario").innerHTML = "";
        var id = 0;
        var letras = [];
        var i = a.charCodeAt(0), j = z.charCodeAt(0);
        var letra = "";
        for( ; i<=j; i++) {
            id++;
            letra = String.fromCharCode(i).toUpperCase();
            letras.push(letra);
            document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' class='letra' id='"+letra+"'>" + letra + "</button>";
            if(i==110) {
            document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }
    function prueba(palabra) {
        console.log(palabra);
    }
    document.getElementById('abcdario').innerHTML += "<button onclick='prueba()'"
  }
  console.log(letras);
  document.getElementById('A').addEventListener('click', intento(palabra_real, 'A'));
  for (let i = 0; i < letras.length+1; i++) {
      console.log(document.getElementById(letras[i]));
      document.getElementById(letras[i]).addEventListener('click', function(e) {
          let btn = e.target;
          let btnId = btn.getAttribute('value');
          console.log(`${palabra_real}, ${btnId}`);
          intento(palabra_real, btnId);
          console.log(oculta);
          console.log(e.target);
      });
    //document.getElementById(letras[i]).addEventListener('click', intento(palabra_real, letras[i]));
    //String.fromCharCode(i).toUpperCase());
}
}
generarABC('a', 'z');
});