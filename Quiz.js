class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    input.hide();
    button.hide();
    title.hide();

    background("lightBlue");
    textSize(20);
    text("**NOTE** - The ones who give correct answers would be shown in green and the ones who give incorrect would be shown in red", 450, 200);

    getContestantInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      allContestants = [plr];
    }

    //write code to add a note here
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("green")
      }
      else {
        fill("red");
      }
    }

   
    
  }

}
