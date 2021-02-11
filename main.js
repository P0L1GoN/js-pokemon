import {pokemons} from './pokemons.js'
const logs = [
    'player1 вспомнил что-то важное, но неожиданно player2, не помня себя от испуга, ударил в предплечье врага.',
    'player1 поперхнулся, и за это player2 с испугу приложил прямой удар коленом в лоб врага.',
    'player1 забылся, но в это время наглый player2, приняв волевое решение, неслышно подойдя сзади, ударил.',
    'player1 пришел в себя, но неожиданно player2 случайно нанес мощнейший удар.',
    'player1 поперхнулся, но в это время player2 нехотя раздробил кулаком \<вырезанно цензурой\> противника.',
    'player1 удивился, а player2 пошатнувшись влепил подлый удар.',
    'player1 высморкался, но неожиданно player2 провел дробящий удар.',
    'player1 пошатнулся, и внезапно наглый player2 беспричинно ударил в ногу противника',
    'player1 расстроился, как вдруг, неожиданно player2 случайно влепил стопой в живот соперника.',
    'player1 пытался что-то сказать, но вдруг, неожиданно player2 со скуки, разбил бровь сопернику.'
];
let logFight=[]
let player1={
    ...pokemons[getRandom(0,pokemons.length-1)]
}
player1.damageHP=player1.hp
let player2={
    ...pokemons[getRandom(0,pokemons.length-1)]
}
player2.damageHP=player2.hp
pokemonRender()
function healthRender(){
    if(player1.damageHP<=0 ||player2.damageHP<=0){
        if(player1.damageHP<=0)
            alert('Player2 Выиграл')
        else
            alert('Player1 Выиграл')
        let buttons=document.querySelector('#buttons1')
        let buttons2=document.querySelector('#buttons2')
        let logser=document.querySelector('#logList')
        logser.innerHTML=''
        logFight=[]
        buttons.innerHTML=''
        buttons2.innerHTML=''
        setRandomPokemon()
        pokemonRender()
    }
    let barPik=document.querySelector("#progressbar-character")
    let barEn=document.querySelector("#progressbar-enemy")
    let healthPik=document.querySelector('#health-character')
    let healthEn=document.querySelector('#health-enemy')
    barPik.style=`width: ${(player1.damageHP / player1.hp) * 100}%`
    barEn.style=`width: ${(player2.damageHP / player1.hp) * 100}%`
    healthPik.innerHTML=`${player1.damageHP} / ${player1.hp}`
    healthEn.innerHTML=`${player2.damageHP} / ${player2.hp}`
}
function pokemonRender(){
    let player1Img=document.querySelector('#img1')
    let player2Img=document.querySelector('#img2')
    let player1Name=document.querySelector('#name-character')
    let player2Name=document.querySelector('#name-enemy')
    let buttons1=document.querySelector('#buttons1')
    let buttons2=document.querySelector('#buttons2')
    player1Img.src=player1.img
    player2Img.src=player2.img
    player1Name.innerHTML=player1.name
    player2Name.innerHTML=player2.name
    player1.attacks.map(el => {
        let button=document.createElement('button')
        button.classList.add('button')
        button.innerHTML=el.name
        button.onclick=()=>{
            let dmg=getRandom(el.minDamage,el.maxDamage)
            player2.damageHP-=dmg
            healthRender()
            logsRender(dmg)
        }
        buttons1.append(button)
    });
    player2.attacks.map(el => {
        let button=document.createElement('button')
        button.classList.add('button')
        button.innerHTML=el.name
        button.onclick=()=> {
            let dmg=getRandom(el.minDamage, el.maxDamage)
            player1.damageHP -= dmg
            healthRender()
            logsRender(dmg)
        }
        buttons2.append(button)
    });
    healthRender()
}
function setRandomPokemon(){
    player1={}
    player2={}
    player1={
        ...pokemons[getRandom(0,pokemons.length-1)]
    }
    player1.damageHP=player1.hp
    player2={
        ...pokemons[getRandom(0,pokemons.length-1)]
    }
    player2.damageHP=player2.hp
}
function logsRender(damage){
    let logR=document.querySelector('#logList')
    logFight.push(`<p>${logs[getRandom(0,logs.length)]}, нанеся ${damage} урона</p>`)
    logR.innerHTML=logFight.reverse().join('')
}
function getRandom(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}