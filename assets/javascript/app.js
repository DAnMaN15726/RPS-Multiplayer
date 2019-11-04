var firebaseConfig = {
    apiKey: "AIzaSyA9gC7AG8w4CpJIqF8p1GpinxBiCQ_PHW4",
    authDomain: "rps-mult-5f4c6.firebaseapp.com",
    databaseURL: "https://rps-mult-5f4c6.firebaseio.com",
    projectId: "rps-mult-5f4c6",
    storageBucket: "rps-mult-5f4c6.appspot.com",
    messagingSenderId: "624937949345",
    appId: "1:624937949345:web:b469938685ffbe21d5b8e0",
    measurementId: "G-Z05PC3GZHP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();



const player1 = 
{   
    
    Name: "",
    Choice: "",
    Win: 0,
    Loss: 0,
    Tie: 0,
    Connection: false
};

const player2 = 
{   
    
    Name: "",
    Choice: "",
    Win: 0,
    Loss: 0,
    Tie: 0,
    Connection: false
};

let Number = 0;






//responsible for deciding players 1 and 2;
let array = [];
let counter = 0;





const game = {
    start: function(){
        console.log("Start function started");
        $(".container").text("Standing by for 2 connections");

        // if (array.length === 0){
        //     array.push(player1);


        // }
        // else if (array.length === 1){
        //     array.push(player2);


        // }






        {
        let button = $("<button>" + "Join" + "</button>");
        button.attr("id", "Join");
        button.attr("value", "Join");
        button.attr("class", "button");
        $(".container").append(button);
        }   
        

    
    },
    
}

game.start();



const playersDiv = database.ref('/playersDiv');
const chatRef = database.ref('/chat');

const connectedRef = database.ref('.info/connected');


  
//counter = 0
  $(document).on("click", "#Join", function(){
      
      console.log("Join Button Activated");

      if ( player1.Connection === false || player2.Connection === false){
        console.log(`Player 1 is now ${player1.Connection}`);
        console.log(`Player 2 is now ${player2.Connection}`);

        number = (player1.Connection) ? 2:1 ;

        const playerFile = database.ref("/playersDiv/" + number);
        console.log(playerFile);

        //This sets the value in Firebase
        playerFile.set({
            name: `Player ${number}`
        });
        


        //This changes Connection Values to True accordingly
        if(number === 1){
            player1.Connection = true;
        }
        else {
            player2.Connection = true;
        }
        










      }







      



  });
  