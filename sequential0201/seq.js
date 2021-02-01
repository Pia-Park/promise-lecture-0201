//sequential request 

async function getPokemonSequential(){
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');


    console.log(poke1);
    console.log(poke2);
    console.log(poke3);

}

//parallel request

async function getPokemonParallel(){
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');


    console.log(promise1); //pending

    const poke1 = await promise1;
    const poke2 = await promise2;
    const poke3 = await promise3;


    // console.log(promise1); //fullfill
    console.log(poke1);
    console.log(poke2);
    console.log(poke3);


}


// getPokemonSequential();
getPokemonParallel();


//----------------------------------//
//a better demo

function changeBodyColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })

}

//In parallel 마지막 색만 보여줌 
async function lightShowP(){
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('yellow', 1000);
    const p4 = changeBodyColor('green', 1000);

    await p1;
    await p2;
    await p3;
    await p4;

}

lightShowP();


//in Sequence 돌아감 

async function lightShowS(){
    await changeBodyColor('teal', 1000);
    await changeBodyColor('pink', 1000);
    await changeBodyColor('yellow', 1000);
    await changeBodyColor('green', 1000);

}

lightShowS();
