const startGame = document.getElementById("start");
const d = ["","","","","","","","",""];
let player1= null;
let player2= null;
let name1 = null;
let name2 = null;
let counter = 0;
const tick1 = document.getElementById("d1");
const tick2 = document.getElementById("d2");
const tick3 = document.getElementById("d3");
const tick4 = document.getElementById("d4");
const tick5 = document.getElementById("d5");
const tick6 = document.getElementById("d6");
const tick7 = document.getElementById("d7");
const tick8 = document.getElementById("d8");
const tick9 = document.getElementById("d9");

startGame.addEventListener("click",startFunction);
function startFunction(){
    counter = 0;
    tick1.textContent = "";
    tick2.textContent = "";
    tick3.textContent = "";
    tick4.textContent = "";
    tick5.textContent = "";
    tick6.textContent = "";
    tick7.textContent = "";
    tick8.textContent = "";
    tick9.textContent = "";
    const bm = document.getElementById("beforeMain");
    const mn = document.getElementById("main");
    player1 = document.getElementById("p1");
    player2 = document.getElementById("p2");
    bm.style.display = "none";
    mn.style.display = "block";
    name1 = player1.value;
    name2 = player2.value;
    alert("Player 1 is : "+name1);
    alert("Player 2 is : "+name2);
    tictactoe();
}
function tictactoe(){
    const tick1 = document.getElementById("d1");
    tick1.addEventListener('click',()=>{
    if(counter % 2 == 0){
            tick1.textContent = "O";
            counter++;
            
    }
    else{
        tick1.textContent = "X";
        counter++;
    }
        d[0]= tick1.textContent;
        if(counter >= 4){
            checkfunction();
        }
        
    });

    const tick2 = document.getElementById("d2");
    tick2.addEventListener('click',()=>{
    if(counter >= 4){
        checkfunction();
    }
    if(counter % 2 == 0){
            tick2.textContent = "O";
            counter++;
        }
        else{
            tick2.textContent = "X";
            counter++;
        }
        d[1]=tick2.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });


    const tick3 = document.getElementById("d3");
    tick3.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick3.textContent = "O";
            counter++;
        }
        else{
            tick3.textContent = "X";
            counter++;
        }
        d[2]=tick3.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });
    const tick4 = document.getElementById("d4");
    tick4.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick4.textContent = "O";
            counter++;
        }
        else{
            tick4.textContent = "X";
            counter++;
        }
        d[3]=tick4.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });
    const tick5 = document.getElementById("d5");
    tick5.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick5.textContent = "O";
            counter++;
        }
        else{
            tick5.textContent = "X";
            counter++;
        }
        d[4]=tick5.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });
    const tick6 = document.getElementById("d6");
    tick6.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick6.textContent = "O";
            counter++;
        }
        else{
            tick6.textContent = "X";
            counter++;
        }
        d[5]=tick6.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });
    const tick7 = document.getElementById("d7");
    tick7.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick7.textContent = "O";
            counter++;
        }
        else{
            tick7.textContent = "X";
            counter++;
        }
        d[6]= tick7.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });
    
    const tick8 = document.getElementById("d8");
    tick8.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick8.textContent = "O";
            counter++;
        }
        else{
            tick8.textContent = "X";
            counter++;
        }
        d[7]= tick8.textContent;
        if(counter >= 4){
            checkfunction();
        }
    });
    const tick9 = document.getElementById("d9");
    tick9.addEventListener('click',()=>{
        if(counter >= 4){
            checkfunction();
        }
            if(counter % 2 == 0){
            tick9.textContent = "O";
            counter++;
        }
        else{
            tick9.textContent = "X";
            counter++;
        }
        d[8]=tick9.textContent;
        if(counter >= 4){
        checkfunction();
    }
});

    
}
// checkfunction 
function checkfunction() {
    if ((d[0] === d[1] && d[1] === d[2] && d[0] != "") || (d[0] == d[3] && d[0] == d[6] && d[0] != "") || (d[0] == d[4] && d[0] == d[8] && d[0] != "") || (d[1] == d[4] && d[1] == d[7] && d[1] != "") || (d[2] == d[5] && d[5] == d[8] && d[5] != "") || (d[3] == d[4] && d[3] == d[5] && d[3] != "") || (d[6] == d[7] && d[7] == d[8] && d[7] != "") || (d[2] == d[4] && d[2] == d[6] && d[2] != "")) {
        alert("Game Over");

        // Determine the winner
        if (counter % 2 == 1) {
            alert("Winner is player 1 : " + name1);
        } else {
            alert("Winner is player 2 : " + name2);
        }

        // Show the alert for 5 seconds and then exit the screen
        setTimeout(function () {
            window.close();
        }, 1000);
    }

    if (counter > 8) {
        alert("Game Over : No Winner");

        // Show the alert for 5 seconds and then exit the screen
        setTimeout(function () {
            window.close();
        }, 1000);
    }
}
