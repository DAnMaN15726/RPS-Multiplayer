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

let number = 0;
let cboolean = false;
let cboolean1 = false;
let coboolean2 = false;

let play1;
let play2;






//responsible for deciding players 1 and 2;
let array = [];
let counter = 0;
let chosen = "";
let connectionC = 0




const game = {
    start: function(x){
        console.log("Start function started");
        




    
    },
    stage: function(){
        console.log("stage set");
        $("#container2").show();

        
        

        


    }













    
}

















const chatRef = database.ref('/chat');

const connectedRef = database.ref('.info/connected');
const connectionsRef = database.ref("/connections");

const playerConnection1 = database.ref('/playersDiv/1');
const playerConnection2 = database.ref('/playersDiv/2');



const playerFile = database.ref("/playersDiv");






// let connectVal = 0;
$("#container2").hide();


//this adds children for every user in
connectedRef.on("value", function(snapshot) {
    

    
    if (snapshot.val()) {
  
      const Connect = connectionsRef.push(true);
      
      Connect.onDisconnect().remove();


    }


  });
  


 
//this prints out how many children there are
  connectionsRef.on("value", function(snap){
    

    $("#start").text(`${snap.numChildren()} Inside`);

    if(snap.numChildren() === 1){
        player1.connectVal = 1;
        let cboolean1 = true;
        

        
        playerConnection1.onDisconnect().remove();
        
        
    }
    else if(snap.numChildren() === 2){
        player2.connectVal = 2;
        let cboolean2 = true;
        

        
        playerConnection2.onDisconnect().remove();

        
    }
    
  });




  $(document).on("click", "#Submit", function(event) {
    event.preventDefault();
    
    console.log("Submit Button Clicked");

    


    let name = $("#name").val();
    console.log(name);


    
    if(player1.Connection === false || player2.Connection === false){
        number = (player1.Connection) ? 2:1 ;

        const playerSelect = database.ref(`/playersDiv/${number}`)

        playerSelect.set({

            Name: name,
            Connection: true,
            connectVal: number


        })




        if( number === 1){
            player1.Connection = true;
        }
        else if (number === 2){
            player2.Connection = true;
        }



        playerSelect.onDisconnect().remove();




     

    }
        
    $("#start2").hide();
    
    

});


playerFile.on("value", function(snapshot) {

    
    connectionC = snapshot.numChildren();
    console.log(connectionC);

    player1.Connection = snapshot.child(1).exists();
    console.log(player1.Connection);
    
    player2.Connection = snapshot.child(2).exists();
    console.log(player2.Connection);


    if( connectionC === 2) {

        game.stage();
        
    }

    

});


playerFile.on("child_added", function(snapshot){
    
    let data = snapshot.val();
    console.log(data.Name);





});