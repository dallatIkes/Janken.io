const ComputerChoiceDisplay = document.getElementById("computer_choice");
const UserChoiceDisplay = document.getElementById("user_choice");
const ResultDisplay = document.getElementById("res");

function generateComputerChoice(){
    const index = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors"];
    ComputerChoiceDisplay.innerHTML = choices[index];
}

function findWinner(){
    let res;
    const player = UserChoiceDisplay.innerHTML;
    const ia = ComputerChoiceDisplay.innerHTML;
    if(ia == player){
        res = "Draw !";
    }
    else if((player=="Rock"&&ia=="Paper")||(player=="Paper"&&ia=="Scissors")||(player=="Scissors"&&ia=="Rock")){
        res = "You lost !";
    }
    else{
        res = "You won !";
    }
    ResultDisplay.innerHTML = res;
}

const Options = document.querySelectorAll("button");
Options.forEach(btnPressed => btnPressed.addEventListener("click", () => {
    ComputerChoiceDisplay.innerHTML = "";
    ResultDisplay.innerHTML = "";
    UserChoiceDisplay.innerHTML = btnPressed.id;
    setTimeout(() => {
        ComputerChoiceDisplay.innerHTML = "."
        setTimeout(() => {
            ComputerChoiceDisplay.innerHTML = "..";
            setTimeout(() => {
                ComputerChoiceDisplay.innerHTML = "...";
                setTimeout(() => {
                    generateComputerChoice();
                    setTimeout(() => {
                        ResultDisplay.innerHTML = "."
                        setTimeout(() => {
                            ResultDisplay.innerHTML = "..";
                            setTimeout(() => {
                                ResultDisplay.innerHTML = "...";
                                setTimeout(() => {
                                    findWinner();
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}));