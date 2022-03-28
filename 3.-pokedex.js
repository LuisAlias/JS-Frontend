const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
        
    //Página pokemon
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://www.wolfpress.co/wp-content/uploads/2019/02/CRC-Error.jpg")
            pokeNombre("N/A")
            pokeNumero("N/A")
            pokeTipo("N/A")
            pokeAltura("N/A")
            pokePeso("N/A")
        }
        else {
            return res.json();
        }
    }).then((data) => {
            console.log(data);
            //Obtiene imagen de pokemon
            let pokeImg = data.sprites.front_default;
            //Obtiene Nombre de pokemon
            let pokeNom = data.name;
            //Obtiene Numero de pokemon
            let pokeNum = data.id;
            //Obtiene Tipo de pokemon
            let pokeTip = data.types[0].type.url;
            //Obtiene Altura de pokemon
            let pokeAlt = data.height;
            //Obtiene Peso de pokemon
            let pokePes = data.weight;
            
            let pokeLar = data.moves.length-1;
            let cantidad=0;

            for (cantidad;cantidad<=pokeLar;cantidad++)
            {
                console.log(cantidad);
                //pokeMovimiento(cantidad);
            }

            //const pokeMovimiento = (Tipo) => {
            //    const pokeInput7 = document.getElementById("pokeMov");
            //    pokeInput7.value = Tipo;
            //}
            //let pokeMov = data.moves[`${cantidad}`].move.name;
            
            //const pokeLar = `${pokeTip}`;
            
            //pokeLargo(pokeLar);
            //console.log(pokeLar);
            console.log(cantidad);


            pokeImage(pokeImg);
            pokeNombre(pokeNom);
            pokeNumero(pokeNum);
            pokeTipo(pokeTip);
            pokeAltura(pokeAlt);
            pokePeso(pokePes);
            //pokeMovimiento(pokeMov);

            
            console.log(pokeImg);
            console.log(pokeNom);
            console.log(pokeNum);
            console.log(pokeTip);
            console.log(pokeAlt);
            console.log(pokePes);
            //console.log(pokeMov);
            
            //Convesion a Metros y Kg
            let calculoAltura = (pokeAlt/10);
            console.log(calculoAltura+" Metros");
            pokeAltura(calculoAltura+" Metros");

            let calculoPeso = (pokePes/10);
            console.log(calculoPeso+" Kilogramos");
            pokePeso(calculoPeso+" Kilogramos");
            
            //pagina Tipo - Obtiene https://pokeapi.co/api/v2/type/{id}
            const url3 = `${pokeTip}`;
            fetch(url3).then((res3) => {
                if (res3.status != "200") {
                    console.log(res3);
                    pokeTipo("")
                }
                else {
                    return res3.json();
                }
            })
            .then((data3) => {
                console.log(data3);
                let pokeTip = data3.names[5].name;
                pokeTipo(pokeTip);
                console.log(pokeTip);
            });
        });

    //Página especies
    const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokeInput}`;
    fetch(url2).then((res2) => {
        if (res2.status == "404") {
            console.log(res2);
            pokeEspecie("N/A")
        }
        else {
            return res2.json();
        }
    })
    .then((data2) => {
        console.log(data2);
        let pokeSpeci = data2.genera[5].genus;
        pokeEspecie(pokeSpeci);
        console.log(pokeSpeci);
    });

    /*const url3 = `https://pokeapi.co/api/v2/type/13/`;
    fetch(url3).then((res3) => {
        if (res3.status != "200") {
            console.log(res3);
            pokeTipo("N/A")
        }
        else {
            return res3.json();
        }
    })
    .then((data3) => {
        console.log(data3);
        let pokeTip = data3.names[5].name;
        pokeTipo(pokeTip);
        console.log(pokeTip);
    });*/
}





//Pokémon Imagen y número
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombre = (Tipo) => {
    const pokeInput = document.getElementById("pokeNom");
    pokeInput.value = Tipo;
}

const pokeNumero = (Tipo) => {
    const pokeInput2 = document.getElementById("pokeNum");
    pokeInput2.value = Tipo;
}

const pokeAltura = (Tipo) => {
    const pokeInput3 = document.getElementById("pokeAlt");
    pokeInput3.value = Tipo;
}

const pokePeso = (Tipo) => {
    const pokeInput4 = document.getElementById("pokePes");
    pokeInput4.value = Tipo;
}

//const pokeMovimiento = (Tipo) => {
//    const pokeInput7 = document.getElementById("pokeMov");
//    pokeInput7.value = Tipo;
//}

//Especies
const pokeEspecie = (Tipo) => {
    const pokeInput5 = document.getElementById("pokeSpeci");
    pokeInput5.value = Tipo;
}

//Tipos
const pokeTipo = (Tipo) => {
    const pokeInput6 = document.getElementById("pokeTip");
    pokeInput6.value = Tipo;
}


//const pokebases = (Tipo) => {
//        const pokePhoto2 = document.getElementById("pokebase");
//        pokePhoto2.value = Tipo;
//}
