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
        $("#continue").hide();

        
        

        


    },
    compare: function(arr){
        $(".container2").hide();
        connectionC = 0




        for( let i = 0; i < arr.length; i++){
            console.log(arr[i]);



        }

        if( arr[0] === "Rock" && arr[1] === "Rock"){
            $(".navbar-brand").text("Tie");
            console.log("TIE");
            game.reset();
            
        }
        else if( arr[0] === "Rock" && arr[1] === "Paper"){
            $(".navbar-brand").text("Paper");
            console.log("Paper");
            game.reset();
        }
        else if( arr[0] === "Rock" && arr[1] === "Scissors"){
            $(".navbar-brand").text("Rock");
            console.log("Rock");
            game.reset();
        }


        else if( arr[0] === "Paper" && arr[1] === "Paper"){
            $(".navbar-brand").text("Tie");
            console.log("TIE");
            game.reset();
        }
        else if( arr[0] === "Paper" && arr[1] === "Scissors"){
            $(".navbar-brand").text("Scissors");
            console.log("Scissors");
            game.reset();
        }
        else if( arr[0] === "Paper" && arr[1] === "Rock"){
            $(".navbar-brand").text("Paper");
            console.log("Paper");
            game.reset();
        }


        else if( arr[0] === "Scissors" && arr[1] === "Scissors"){
            $(".navbar-brand").text("Tie");
            console.log("Tie");
            game.reset();
        }
        else if( arr[0] === "Scissors" && arr[1] === "Paper"){
            $(".navbar-brand").text("Scissors");
            console.log("Scissors");
            game.reset();
        }
        else if( arr[0] === "Scissors" && arr[1] === "Rock"){
            $(".navbar-brand").text("Rock");
            console.log("Rock");
            game.reset();
        }
        


        









    },
    reset: function(){
        console.log("RRRRESET!");
        array = [];
        counter = 0;

        connectionC = 0
        $("#container2").show();
        
        



    },
    standBy: function(x){

        if(x === 1){
            
        }


    }









    
}

















const chatRef = database.ref('/chat');

const connectedRef = database.ref('.info/connected');
const connectionsRef = database.ref("/connections");

const playerConnection1 = database.ref('/playersDiv/1');
const playerConnection2 = database.ref('/playersDiv/2');



const playerFile = database.ref("/playersDiv");
const playerAnswer = database.ref(`/playersDiv/${number}`);






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

    $("#container2").show();
    console.log("Submit Button Clicked");

    


    let name = $("#name").val();
    console.log(name);


    
    if(player1.Connection === false || player2.Connection === false){
        number = (player1.Connection) ? 2:1 ;

        const playerSelect = database.ref(`/playersDiv/${number}`)

        playerSelect.set({

            Name: name,
            Connection: true,
            connectVal: number,
            Answer: number


        })




        if( number === 1){
            player1.Connection = true;
        }
        else if (number === 2){
            player2.Connection = true;
        }



        playerSelect.onDisconnect().remove();




     

    }
    $("#continue").toggleClass("active");
    $("#start2").hide();
    
    

});



let playerX = 0;
let playerY = 0;

playerFile.on("value", function(snapshot) {

    
    connectionC = snapshot.numChildren();
    console.log(connectionC);

    player1.Connection = snapshot.child(1).exists();
    playerX = player1;
    console.log(player1.Connection);
    
    player2.Connection = snapshot.child(2).exists();
    playerY = player1;
    console.log(player2.Connection);


    if( connectionC === 2) {
        
        game.stage();
        
    }

    

});


playerFile.on("child_added", function(snapshot){
    console.log("CHILD ADDED RAN");
    let data = snapshot.val();
    console.log(data.Name);





});



$("#container2").on("click", ".btn", function(){
    $("#continue").show();
    
    console.log($(this).attr("value"));

    let answer = $(this).attr("value");

    const playerAnswer = database.ref(`/playersDiv/${number}`);

    console.log(number);

    playerAnswer.update({

        Answer: answer


    });
    
    playerAnswer.onDisconnect().remove();


});


let data1 = "null";
let data2 = "null";

// playerFile.on("value", function(snapshot){
//     console.log("ACTIVATED");
//     // const data1;
//     // const data2;
//     if (snapshot.numChildren() === 1){
//         data1 = snapshot.val();
//         console.log(data1.Answer);

//     }
//     else if ( snapshot.numChildren() === 2){
//         data2 = snapshot.val();
//         console.log(data2.Answer);
//         game.compare(data1, data2);

        

//     };

    



// });

playerFile.on("child_changed", function(snapshot){
    

    console.log("CHANGED RAN");
    data = snapshot.val();
    console.log(data);
    console.log(counter);

    array.push(data.Answer);
    console.log(array[counter]);
    counter++;


    if( counter === 2){
        game.compare(array);
    }


});



$("#container2").hide();

// HTML/ETC.

$("#continue").append("<h1>Stand By....</h1>");

