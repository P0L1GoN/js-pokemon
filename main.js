let kick=document.querySelector("btn-kick")
let pokemon={
    defaultHP: 100,
    damageHP: 100
}
let Pikachu={},Charmander={}
Object.assign(Pikachu,pokemon,{damage:20})
Object.assign(Charmander,pokemon,{damage:15})
kick.onClick=()=>{
    let barPik=querySelector("progressbar-character")
    let barEn=querySelector("progressbar-enemy")
    Pikachu.damageHP-=Charmander.damage
    Charmander.damageHP-=Pikachu.damage
    barPik.style.width=`${Pikachu.damageHP}`
    barEn.style.width=`${Charmander.damageHP}`
}