// async function getPlanet(){
//     const res = await axios.get('https://swapi.dev/api/planets');
//     console.log(res);
// };

// getPlanet().then().catch(err => {
//     console.log('In Catch!');
//     console.log(err);
// });

async function getPlanet(){
    try{
        const res = await axios.get('https://swapi.dev/api/plaets');
        console.log(res);
    } catch(error){
        console.log('In Catch!');
        console.log(err);
    }
};

getPlanet();
