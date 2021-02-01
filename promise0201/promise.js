const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        if(url === '/smoe/1'){
            const data = "your fake data";
            resolve(data);
        } else {
            reject("reqest error!");
        }
    })
}

fakeRequest('/smoe/1')
    .then(result => console.log(result))
    .catch(error => console.log(error));


const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayColorChange('red', 1000)
    .then(()=>delayColorChange('yellow', 1000));
//1000 -> 1second.