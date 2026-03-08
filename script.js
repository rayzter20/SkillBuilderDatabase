let character_list = document.getElementById("character-list")

let Gojo = {Name : "Honored One", Skills : ["Lapse Blue", "Reversal Red", "Rapid Punches", "Twofold Kick"]}
let Yuji = {Name : "Vessel", Skills : ["Cursed Strikes", "Crushing Blow", "Divergent Fist", "Manji Kick"]}
let Hakari = {Name : "Restless Gambler", Skills : ["Reserve Balls", "Shutter Doors", "Rough Energy", "Fever Breaker"]}
let Megumi = {Name : "Ten Shadows", Skills : ["Rabbit Escape", "Nue", "Toad", "Divine Dog: Totality"]}
let Mahito = {Name : "Perfection", Skills : ["Stockpile", "Soul Fire", "Focus Strike", "Self-Transfiguration"]}
let Choso = {Name : "Blood Manipulator", Skills : ["Piercing Blood", "Flowing Red Scale", "Supernova", "Blood Edge"]}
let Todo = {Name : "Switcher", Skills : ["Swift Kick", "Brute Force", "Pebble Throw", "Elbow Drop"]}
let Higuruma = {Name : "Defense Attorney", Skills : ["Extended Swings", "Justice Served", "Judgement's Reach", "Twirling Strikes"]}
let Yuta = {Name : "Cursed Partners", Skills : ["Severing Path", "Resolute Slash", "Veilstep", "Revolve"]}
let Naoya = {Name : "Head of the Hei", Skills : ["Projection Breaker", "Bleedout", "Decisive Strike", "Cursory Impact"]}

let db = [Gojo, Yuji, Hakari, Megumi, Mahito, Choso, Todo, Higuruma, Yuta, Naoya]

for (let j = 0; j < db.length; j++) {
    char_info = ""

    for (let i = 0; i < db[j].Skills.length; i++) {
        char_info += `<li class="skill-item">${db[j].Skills[i]}</li>`
    }

    character_list.innerHTML += `
    <div class="item-pick">
        <details>
            <summary>${db[j].Name}</summary>
                <ul>
                    ${char_info}
                </ul>
        </details>
    </div>
    `
}
let LapseBlue = {name: "Lapse Blue", description: "The user pulls the target into them using attraction and kicks them away.", startup: 0.34, endlag: 0.7, damage: 12.5, properties: "Blockable, Interruptible, Bypasses Ragdoll"}
let db_skills = [LapseBlue]

let description = document.getElementById("description")
let startup = document.getElementById("startup-value")
let endlag = document.getElementById("endlag-value")
let damage = document.getElementById("damage-value")
let properties = document.getElementById("properties")

let all_skills = document.querySelectorAll(".skill-item")
for (let i = 0; i < all_skills.length; i++) {
    all_skills[i].addEventListener("click", function(){
        let skill_name = all_skills[i].innerHTML.trim()
        for (let j = 0; j < db_skills.length; j++) {
            if (db_skills[j].name == skill_name) {
                description.innerHTML = db_skills[j].description
                startup.innerHTML = `<b>Startup:</b> ${db_skills[j].startup} seconds`
                endlag.innerHTML = `<b>Endlag:</b> ${db_skills[j].endlag} seconds`
                damage.innerHTML = `<b>Damage:</b> ${db_skills[j].damage} damage`
                properties.innerHTML = `<b>Properties:</b> ${db_skills[j].properties}` 
            }   
        }
    }) 
}