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
    let c = confirm(`Do you want to change your choice? Your current choice is '${a}'`)
    if (c) {
        a = prompt(`Enter your choice : "S" or "W" or "G" `)
    }
    if (a == "S") {
        a = "Snake"
    }
    if (a == "G") {
        a = "Gun"
    }
    if (a == "W") {
        a = "Water"
    }
    let comp = random_item(arr)
    console.log(comp)
    while (comp == "Snake") {
        if (a == "Water") {
            console.log("You have lost!")
            loss.push("lost")
            document.write("You have lost!")
            document.write(lb)
        }

        if (a == "Gun") {
            console.log("You have won!")
            won.push("won")
            document.write("You have won!")
            document.write(lb)
        }

        if (a == "Snake") {
            console.log("It's a draw")
            draw.push("draw")
            document.write("It's a draw")
            document.write(lb)
        }
        break
    }
    while (comp == "Water") {
        if (a == "Snake") {
            console.log("You have won!")
            won.push("won")
            document.write("You have won!")
            document.write(lb)
        }

        if (a == "Gun") {
            console.log("You have lost!")
            loss.push("lost")
            document.write("You have lost!")
            document.write(lb)
        }

        if (a == "Water") {
            console.log("It's a draw")
            draw.push("draw")
            document.write("It's a draw")
            document.write(lb)
        }
        break
    }
    while (comp == "Gun") {
        if (a == "Snake") {
            console.log("You have lost!")
            loss.push("lost")
            document.write("You have lost!")
            document.write(lb)
        }

        if (a == "Water") {
            console.log("You have won!")
            won.push("won")
            document.write("You have won!")
            document.write(lb)
        }

        if (a == "Gun") {
            console.log("It's a draw")
            draw.push("draw")
            document.write("It's a draw")
            document.write(lb)
        }
        break
    }
    alert(`Your Choice : "${a}".........Computer's Choice : "${comp}"`)
}
let w = (won.length)
let l = (loss.length)
let d = (draw.length)
document.write(lb)
document.write(lb)
document.write(lb)
document.write(lb)
console.log("User's Score :",w)
document.write("User's Score :",w)
document.write(lb)
console.log("Computer's Score :",l)
document.write("Computer's Score :",l)
document.write(lb)
document.write(lb)
document.write("Overall Result :")
document.write(lb)
if(w>l){
    console.log("You have won the game")
    document.write("You have won the game")
}
if(w<l){
    console.log("You have lost the game")
    document.write("You have lost the game")
}
// window.onload = function() {
//    document.getElementById("myLink").innerHTML=;
// } 