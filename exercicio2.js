let vida = 100;
let hit = 30;

let avent = (vida - hit);

console.log("Após sofrer um ataque de um goblin, você está com ",avent);

if (avent >= 50){
    console.log("Sua situação é estável.");
}else if (avent >= 1){
    console.log("Sua situação é crítica, busque cura ou proteção.");
}else{
    console.log("Sua aventura chega ao fim.");
}

