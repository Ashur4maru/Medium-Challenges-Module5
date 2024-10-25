function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function grens(num){
    if(num < randomgetal){
        console.log('Hoger')
    }else{
        console.log('Lager')
    }
}

let randomgetal = random(1, 10);

hoger(5);