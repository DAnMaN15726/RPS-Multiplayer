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

database = firebase.database();


const player1 = 
{   
    Name: "",
    Choice: "",
    Win: 0,
    Loss: 0,
    Tie: 0,
    Connection: false

}

const player2 = 
{   
    Name: "",
    Choice: "",
    Win: 0,
    Loss: 0,
    Tie: 0,
    Connection: false
}


//responsible for deciding players 1 and 2;
let array = [];
// let counter = 0;





const game = {
    start: function(){
        console.log("Start function started");
        $(".container").text("Standing by for 2 connections");

        if (array.length === 0){
            array.push(player1);
        }
        else if (array.length === 1){
            array.push(player2);
        }


        {
        let button = $("<button>" + "Join" + "</button>");
        button.attr("id", "Join");
        button.attr("value", "Join");
        button.attr("class", "button");
        $(".container").append(button);
        }   
        

        return counter++;
    },
    
}

game.start();
console.log(counter);