alert("Welcome to the Snake Water Gun game")
alert("S stand for Snake, W stand for Water, G stands for Gun")
let arr = ["Snake", "Water", "Gun"]
let loss = []
let won = []
let draw = []
let lb = "<br>"
let n = prompt("Enter the no. of rounds you want to have")
n = Number.parseInt(n)
let i = 0
function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}
while (i < n) {
    i++
    let a = prompt(`Enter your choice : "S" or "W" or "G" `)
    // let c = confirm(`Do you want to change your choice? Your current choice is '${a}'`)
    // if (c) {
    //     a = prompt(`Enter your choice : "S" or "W" or "G" `)
    // }
    if (a == "S" || a== "s") {
        a = "Snake"
    }
    else if (a == "G" || a=="g") {
        a = "Gun"
    }
    else if (a == "W" || a=="w") {
        a = "Water"
    }
    let comp = random_item(arr)
    alert(`Your Choice : "${a}".........Computer's Choice : "${comp}"`)
    while (comp == "Snake") {
        if (a == "Water") {
            loss.push("lost")
            document.write(lb)
            document.write(`Computer's choice : Snake.............Your choice : Water  `)
            document.write(lb)
            document.write("Water got drank by the snake...")
            document.write(lb)
            document.write("You have lost!")
            document.write(lb)
        }

        if (a == "Gun") {
            won.push("won")
            document.write(lb)
            document.write(`Computer's choice : Snake.............Your choice : Gun  `)
            document.write(lb)
            document.write("The Snake got shot by gun...")
            document.write(lb)
            document.write("You have won!")
            document.write(lb)
        }

        if (a == "Snake") {
            draw.push("draw")
            document.write(lb)
            document.write(`Computer's choice : Snake.............Your choice : Snake  `)
            document.write(lb)
            document.write("Both players picked snake...")
            document.write(lb)
            document.write("It's a draw")
            document.write(lb)
        }
        break
    }
    while (comp == "Water") {
        if (a == "Snake") {
            won.push("won")
            document.write(lb)
            document.write(`Computer's choice : Water.............Your choice : Snake  `)
            document.write(lb)
            document.write("Snake drank the water...")
            document.write(lb)
            document.write("You have won!")
            document.write(lb)
        }

        if (a == "Gun") {
            loss.push("lost")
            document.write(lb)
            document.write(`Computer's choice : Water.............Your choice : Gun  `)
            document.write(lb)
            document.write("The gun drowned in water...")
            document.write(lb)
            document.write("You have lost!")
            document.write(lb)
        }

        if (a == "Water") {
            draw.push("draw")
            document.write(lb)
            document.write(`Computer's choice : Water.............Your choice : Water  `)
            document.write(lb)
            document.write("Both players picked water...")
            document.write(lb)
            document.write("It's a draw")
            document.write(lb)
        }
        break
    }
    while (comp == "Gun") {
        if (a == "Snake") {
            loss.push("lost")
            document.write(lb)
            document.write(`Computer's choice : Gun.............Your choice : Snake  `)
            document.write(lb)
            document.write("Gun shot the snake...")
            document.write(lb)
            document.write("You have lost!")
            document.write(lb)
        }

        if (a == "Water") {
            won.push("won")
            document.write(lb)
            document.write(`Computer's choice : Gun.............Your choice : Water  `)
            document.write(lb)
            document.write("Water drowned the gun...")
            document.write(lb)
            document.write("You have won!")
            document.write(lb)
        }

        if (a == "Gun") {
            draw.push("draw")
            document.write(lb)
            document.write(`Computer's choice : Gun.............Your choice : Gun  `)
            document.write(lb)
            document.write("Both players picked gun...")
            document.write(lb)
            document.write("It's a draw")
            document.write(lb)
        }
        break
    }
}
let w = (won.length)
let l = (loss.length)
let d = (draw.length)
document.write(lb)
document.write(lb)
document.write(lb)
document.write(lb)
document.write("User's Score :",w)
document.write(lb)
document.write("Computer's Score :",l)
document.write(lb)
document.write(lb)
document.write("Overall Result :")
document.write(lb)
if(w>l){
    document.write("You have won the game 😀 ")
}
if(w<l){
    document.write("You have lost the game 😭")
}
if(w==l){
    document.write("The match is a draw 😁 ")
}
// window.onload = function() {
//    document.getElementById("myLink").innerHTML=;
// } 