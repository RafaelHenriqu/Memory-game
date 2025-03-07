let Selected= []
let Hide_Cards_Function 
let db = true
let Infos = {
    Lifes: 4
}



function Update_Info(Life){
    let Lifes = ""

    if (Life > Infos.Lifes){
        document.getElementById("Life").innerHTML = Life
    }else{
        for (i=0;i<Life;i++){
            Lifes = Lifes + "💖"
        }
        document.getElementById("Life").innerHTML = Lifes
    }

    

}

function Hide_cards(){
    // Revelando as cartas
    clearInterval(Hide_Cards_Function)
    const Cards = document.getElementById("Cards").getElementsByTagName("div")
    for (let i = 0; i < Cards.length;i++){
        let Div = Cards[i]
        Div.style.backgroundImage = ``
        db = false
    }
}





function Start(){
    if (localStorage.Lifes <=0){
        alert("Cabou!, Desculpe-me mas você perdeu!")
        document.querySelector('body').remove()


       
    }

    if (localStorage.Lifes == null){
        alert("Você apenas tem uma chance, 4 Vidas... se todas acabar o jogo acaba de vez.")
        
        localStorage.Lifes = Infos.Lifes
    }

    let Image = [
        "Cat_in_bed",
        "Cat_in_the_flowers",
        "Cat_in_the_rain",
        "Cat_in_the_water",
        "Cat_watching_balls",
        "Cats_day",
        "Cats_night",
        "Cat_looking_at_water",
        "white_cat",
        "World_of_Cats",
        // // Repeat
        "Cat_in_bed",
        "Cat_in_the_flowers",
        "Cat_in_the_rain",
        "Cat_in_the_water",
        "Cat_watching_balls",
        "Cats_day",
        "Cats_night",
        "Cat_looking_at_water",
        "white_cat",
        "World_of_Cats"
    
    ]

    let points = 0
    let Require = Image.length
    Update_Info(localStorage.Lifes)

    
    while (Image.length != 0){

        let number = Math.floor(Math.random() * Image.length)
        let Img = Image[number]
 
        // Create Div //
 
        let div = document.createElement("div") 
        div.className = "Card"
        div.id = Img
        div.style.backgroundImage = `url(./Image/${div.id}.jpg)`
        
        div.onclick = function(e){
            if (db == true){
                return;
            }

            div.style.backgroundImage = `url(./Image/${div.id}.jpg)`    
            div.style.filter = "opacity(1) "
            Selected.push(div.id)
            points++
            if (Selected.length > 1){
                if (Selected[0] == Selected[1]){
                    if (points >= Require){
                        location.href = "https://github.com/RafaelHenriqu"
                    }
                    Selected = []
                }else{
                    localStorage.Lifes = localStorage.Lifes - 1
                    Update_Info(localStorage.Lifes)
                    Selected = []
                    window.location.reload()
                }
            }


            
        }


        document.getElementById("Cards").appendChild(div)




        // Remove Iten //

        let indice = Image.indexOf(Img)
        
        if (indice !==-1){
            Image.splice(indice,1)
        }
      
      
    }
 
    Hide_Cards_Function = setInterval(Hide_cards,5000)

}