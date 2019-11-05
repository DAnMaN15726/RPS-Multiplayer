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
    Connection: false,
    connectVal: 0
};

const player2 = 
{   
    
    Name: "",
    Choice: "",
    Win: 0,
    Loss: 0,
    Tie: 0,
    Connection: false,
    connectVal: 0
};

let Number = 0;






//responsible for deciding players 1 and 2;
let array = [];
let counter = 0;
let chosen = "";




const game = {
    start: function(){
        console.log("Start function started");
        

        // if (array.length === 0){
        //     array.push(player1);


        // }
        // else if (array.length === 1){
        //     array.push(player2);


        // }



    
    },
    stage: function(){
        if ( player1.Connection === false || player2.Connection === false){

            game.start();

        }
        else{
            console.log("Form hidden");

            $(".Form").hide(); 
        }

        











    }













    
}























game.start();



const playersDiv = database.ref('/playersDiv');
const chatRef = database.ref('/chat');

const connectedRef = database.ref('.info/connected');
const connectionsRef = database.ref("/connections");

const playerConnection1 = database.ref('/playersDiv/1');
const playerConnection2 = database.ref('/playersDiv/2');

// let connectVal = 0;


//this adds children for every user in
connectedRef.on("value", function(snapshot) {

    
    if (snapshot.val()) {
  
      const Connect = connectionsRef.push(true);
      console.log(connectionsRef);

      Connect.onDisconnect().remove();
    }


  });
  


 
//this prints out how many children there are
  connectionsRef.on("value", function(snap){

    $("#start").text(`${snap.numChildren()} Inside`);

    if(snap.numChildren() === 1){
        player1.connectVal = 1;

        playerConnection1.set({
            connect: player1.connectVal
        })
        console.log(`${playerConnection1.connect} Connections`);
        playerConnection1.onDisconnect().remove();
        
        number = 1;
    }
    else if(snap.numChildren() === 2){
        player2.connectVal = 2;

        playerConnection2.set({
            connect: player2.connectVal
        })
        console.log(`${playerConnection2.connect} Connections`);
        playerConnection2.onDisconnect().remove();

        number = 2;
    }
    
    


  });


// playersDiv.ref.on("value", function(snapshot){
//     let x = snapshot;
//     console.log(x);
    
// });

  











  
//counter = 0
  $(document).on("click", "#Submit", function(){
      event.preventDefault();
      
      if( player1.Connection === false){
        
        const playerFile1 = database.ref("/playersDiv/player1");
        const name = $("#name").val().trim();
        


        playerFile1.set({
            Name: name,
            Choice: null,
            Connection: true,



            


        });

        console.log(playerFile1.Connection.get());
        playerFile1.onDisconnect.remove();
      }
      else if( player2.Connection === false){
        const playerFile1 = database.ref("/playersDiv/player1");
        const name = $("#name").val().trim();
        


        playerFile1.set({
            Name: name,
            Choice: null,
            Connection: true,



            


        });
        console.log(playerFile2.Connection.get());
        playerFile2.onDisconnect.remove();


      }


      



      
  });



  

