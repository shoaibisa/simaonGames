

   var userClickedPattern=[];
   var gamePattern = [];
   var buttonColors = ["red", "blue", "green", "yellow"]; // colors
   var level = 0;
   var start = false;



   //game has begin here
   ///level



    $(document).keypress(function () {
      if(!start)
      {

        setTimeout(function () {
          $("button").hide("btn1");
          $("p").hide("p");
           }, 200);


        newSequence();
       start=true;
     }
   });

   $(".btn1").click(function () {
     if(!start)
     {

       setTimeout(function () {
      $("button").hide("btn1");
    $("p").hide("p");
  }, 200);

       newSequence();
      start=true;
    }
   })

   function newSequence() {
      userClickedPattern=[];
      level++;
      $("#level-title").text("level " + level);
      //craete a random number
       var rNumber = Math.floor(Math.random()*4);
    // chosen a random color of a game patterns
   var randomChoosenColor = buttonColors[rNumber];
    gamePattern.push(randomChoosenColor);  //pattern of the game
      //animating flash on button
     $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChoosenColor);
    }


// when a button clicked

      $(".btn").click( function () {
          var userChosenColor  = $(this).attr("id");
          userClickedPattern.push(userChosenColor);
          playSound(userChosenColor);
          animatePress(userChosenColor);
         startGame(userClickedPattern.length-1);
     });

   function animatePress(currentColor) {
     $("#"+currentColor).addClass("pressed");

        setTimeout(function () {
           $("#"+currentColor).removeClass("pressed");
        },100);
   }

   //making sound
   function playSound(name) {
     var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
   }



    //  game check
      function startGame(lev) {
       if(gamePattern[lev]===userClickedPattern[lev])
       {
         if(userClickedPattern.length===gamePattern.length)
         {
         setTimeout(function () {
          newSequence();
        }, 1000);
      }
      }
       else {
           playSound("wrong");
           $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

         setTimeout(function () {
           $("button").show("bt1");
      $("body").removeClass("game-over");
    }, 200);

     $(".btn1").text("Restart");
       restatrt();
       }
     }


    function restatrt()
   {
     level=0;
     gamePattern=[];
     start=false;
   }
