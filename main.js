let kick=document.querySelector("#btn-kick")
const logs = [
    'Pikachu вспомнил что-то важное, но неожиданно Charmander, не помня себя от испуга, ударил в предплечье врага.',
    'Pikachu поперхнулся, и за это Charmander с испугу приложил прямой удар коленом в лоб врага.',
    'Pikachu забылся, но в это время наглый Charmander, приняв волевое решение, неслышно подойдя сзади, ударил.',
    'Pikachu пришел в себя, но неожиданно Charmander случайно нанес мощнейший удар.',
    'Pikachu поперхнулся, но в это время Charmander нехотя раздробил кулаком \<вырезанно цензурой\> противника.',
    'Pikachu удивился, а Charmander пошатнувшись влепил подлый удар.',
    'Pikachu высморкался, но неожиданно Charmander провел дробящий удар.',
    'Pikachu пошатнулся, и внезапно наглый Charmander беспричинно ударил в ногу противника',
    'Pikachu расстроился, как вдруг, неожиданно Charmander случайно влепил стопой в живот соперника.',
    'Pikachu пытался что-то сказать, но вдруг, неожиданно Charmander со скуки, разбил бровь сопернику.'
];
let logFight=[]
let loger=[]
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
    logsRender(Pikachu.damage)
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
        logFight=[]
        let logR=document.querySelector('#logs')
        logR.innerHTML=''
    }
}
function logsRender(damage){
    let logR=document.querySelector('#logs')
    logFight.push(`<p>${logs[Math.floor(Math.random() * logs.length)]}, нанеся ${damage} урона</p>`)
    logR.innerHTML=logFight.reverse().join('')
}
function getRandom(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}