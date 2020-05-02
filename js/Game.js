class Game {
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState')
        gameStateref.on("value",function(data){
            gameState  = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount()
            form = new Form()
            form.display()
            
        }

    }
    play(){
        form.hide()
        textSize(30);
        text("Game Start",120,100)
        Player.getPlayerInfo()
        console.log("allPlayers1")
        if(allPlayers!= undefined){
            console.log("allPlayers2")
            var displayPosition = 130;
      for(var plr in allPlayers){
        console.log("allPlayers3")
          if(plr === "player"+player.index){
              fill("red");
          }else{
              fill("black")
          }
          displayPosition += 20;
          textSize(15);
          console.log("allPlayers4")
          text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
          
      }
        }
       if(keyIsDown("UP_ARROW")){
           player.distance = player.distance+50;
           player.update()
       }
     }
    }
