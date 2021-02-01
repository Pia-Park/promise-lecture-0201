//axious cdn -> promise based HTTP client 
//swapi.dev

// async function getPlanet(){
//     // axios(url, {})
//     const res = axios.get('https://swapi.dev/api/planets');
//     console.log(res);
// }

async function getPlanet(){
    const res = await axios.get('https://swapi.dev/api/planets')
    // console.log(res.data);
    return res;
}

getPlanet().then(res => console.log(res));

//object 에서 특정 부분만 추출하고 싶을 때 {}를 키에 사용 하면 됨! 
getPlanet().then(({headers}) => {
    console.log('headers:', headers);
});