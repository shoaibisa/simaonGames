

   var userClickedPattern=[];
   var gamePattern = [];
   var buttonColors = ["red", "blue", "green", "yellow"]; // colors
   var level = 0;
   var start = false;
   var h2 = document.getElementById('h2');
   var message = document.getElementById('message');


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
      if(level===10)
      {
           rewards();

      }else {
        $("#level-title").text("level ⚔️" + level);
        //craete a random number
         var rNumber = Math.floor(Math.random()*4);
      // chosen a random color of a game patterns
     var randomChoosenColor = buttonColors[rNumber];
      gamePattern.push(randomChoosenColor);  //pattern of the game
        //animating flash on button
       $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
       playSound(randomChoosenColor);
      }


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
        $("#btn1").show(300);
      $("body").removeClass("game-over");
    }, 200);

     $("#btn1").text("Restart");
       restatrt();
       }
     }


    function restatrt()
   {
     level=0;
     gamePattern=[];
     start=false;
   }

  function rewards() {
    $(".btn").hide();
    swal("Nice Play!", "You cross the level ⚔️"+level, "success");
    $("#level-title").text("🎊🤑 Hurray 🤑🎊");
    h2.innerHTML="You have crossed level ⚔️"+level+" click this to get your revards! ";


    $("#btn1").show(300);
    $("#btn1").text("Rewards🏆");
    $('#btn1').click(function() {
       window.location = 'reward.html';
     });
    $("#names").show(300);
  }

  $("#btn2").click( function () {
      swal("Take screeshot of this", "as well as post it on status and Challange to other to compete this!");
      $("#level-title").text("The Simon Game")
    var name = document.getElementById('named').value;
    h2.innerHTML=" has crossed level ⚔️1"+level+"  ";
      $("#h3").text(name);
      $(".form").hide(300);
      $("#win").attr("src","http://clipart-library.com/clipart/n388660.html");

  });
