// function greet(){
//     return 'Hello!'
// }

async function greet(){
    return 'Hello!'
}

greet().then(val =>{
    console.log(val)});

//then은 regular function 기본 펑션과 사용 불가능


//async function more cleaner 
async function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'X Y must be number';
    } else {
        return x + y;
    }
}


//old way promise
// async function add(x, y){
//     return new Promise((resolve, reject) => {
//         if(typeof x !== 'number' || typeof y !== 'number'){
//             reject('x y must be number');
//         } 
//         resolve(x+y);
//     });
// }


add(3, 5)
    .then((val) => console.log(val))
    .catch((err) => console.log(err));


// you can make this way too.
// const sum = add(3, 5)
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));