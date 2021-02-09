let kick=document.querySelector("#btn-kick")
let pokemon={
    defaultHP: 100,
    damageHP: 100,
    damage:0,
    changeDamage: function(){
        this.damage=getRandom(10,50)
    }
}
let Pikachu={},Charmander={}
Object.assign(Pikachu,pokemon)
Object.assign(Charmander,pokemon)
Pikachu.changeDamage()
Charmander.changeDamage()
let healthRender=()=>{
    let barPik=document.querySelector("#progressbar-character")
    let barEn=document.querySelector("#progressbar-enemy")
    let healthPik=document.querySelector('#health-character')
    let healthEn=document.querySelector('#health-enemy')
    barPik.style=`width: ${Pikachu.damageHP}%`
    barEn.style=`width: ${Charmander.damageHP}%`
    healthPik.innerHTML=`${Pikachu.damageHP} / ${Pikachu.defaultHP}`
    healthEn.innerHTML=`${Charmander.damageHP} / ${Charmander.defaultHP}`
}
kick.onclick=()=>{
    Pikachu.damageHP-=Charmander.damage
    Charmander.damageHP-=Pikachu.damage
    healthRender()
    if(Pikachu.damageHP<=0 || Charmander.damageHP<=0){
        if(Pikachu.damageHP<=0)
            alert("Чармандер выиграл")
        else if(Charmander.damageHP<=0)
            alert("Пикачу выиграл")
        else
            alert("Ничья")
        Pikachu.damageHP=100
        Charmander.damageHP=100
        Pikachu.damage=getRandom(10,50)
        Charmander.damage=getRandom(10,50)
        healthRender()
    }
}   
function getRandom(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}