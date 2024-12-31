let console_desition = function()
{

    let desitionNumber = Math.floor(Math.random() * 3) + 1;
    let finalDesition = "";
    switch (desitionNumber) {
        case 1:
            finalDesition = "paper";
        break;
        case 2:
            finalDesition = "rock";
        break;
        case 3:
            finalDesition = "scissors";
        break;
        
        default:

            break;
    }

    return finalDesition;

}

function humanChoice()
{
    let pass = true;
    let result = "";
    do
    {
        let getHumanChoice = prompt("Choose between paper, rock, or scissors");
        let filteredChoice = getHumanChoice.toLowerCase().trim();
        switch (filteredChoice) {
            case "rock":
                pass = true;
                result = filteredChoice;
                break;
                case "paper":
                    pass = true;
                    result = filteredChoice;
                    break;
                    case "scissors":
                        pass = true;
                        result = filteredChoice;
                        break;
                    
            default:
                pass = false;
                break;
        }
    }while(pass === false)

    return result;
}

function whoWins(console,human, winner)
{
    return `Console: ${console}
     You: ${human}
     Who wins: ${winner}`;
}

const getConsoleChoise = console_desition();
const getHumanChoise = humanChoice();

function playRound(consoleChoise, human_choise)
{

    let consoleCounter = 0;
    let humanCounter = 0;
   
   if(getConsoleChoise === getHumanChoise)
    {
        return "draw";
    }
    else if(human_choise === "paper")
        {
            if(consoleChoise === "rock")
                {
                   return whoWins(consoleChoise,human_choise, "you");
                }else
                {
                   return whoWins(consoleChoise,human_choise, "console");
                }
        }
        else if(human_choise === "scissors")
            {
                if(consoleChoise === "paper")
                    {
                       return whoWins(consoleChoise,human_choise, "you");
                    }else
                    {
                       return whoWins(consoleChoise,human_choise, "console");
                    }
            }else if(human_choise === "rock")
                {
                    if(consoleChoise === "scissors")
                        {
                           return whoWins(consoleChoise,human_choise, "you");
                        }else
                        {
                           return whoWins(consoleChoise,human_choise, "console");
                        }
                }



    /*else if(consoleChoise === "paper" && human_choise === "rock")
    {
        consoleCounter++; 

        return `
        console: ${consoleChoise}.
        you: ${human_choise}.

            paper beats rock
        score: ${consoleCounter} - ${humanCounter} 
        `
    }else if(consoleChoise === "scissors" && human_choise === "paper")
    {
        consoleCounter++; 
        
        return `
        console: ${consoleChoise}.
        you: ${human_choise}.

            scissors beats paper
        score: ${consoleCounter} - ${humanCounter} 
        `
    }
    else if(consoleChoise === "rock" && human_choise === "scissors")
    {
        consoleCounter++; 
        
        return `
        console: ${consoleChoise}.
        you: ${human_choise}.

            rock beats scissors
        score: ${consoleCounter} - ${humanCounter} 
        `
    }
    else if(consoleChoise === "scissors" && human_choise === "rock")
    {
        humanCounter++; 
        
        return `
        console: ${consoleChoise}.
        you: ${human_choise}.

            rock beats scissors
        score: ${consoleCounter} - ${humanCounter} 
        `
    }else if(consoleChoise === "rock" && human_choise === "paper")
    {
        humanCounter++; 
        
        return `
        console: ${consoleChoise}.
        you: ${human_choise}.

            paper beats rock
        score: ${consoleCounter} - ${humanCounter} 
        `
    }else if(consoleChoise === "paper" && human_choise === "scissors")
    {
        humanCounter++; 
        
        return `
        console: ${consoleChoise}.
        you: ${human_choise}.

            scissors beats paper
        score: ${consoleCounter} - ${humanCounter} 
        `
    }*/
   
        
}



console.log(playRound(getConsoleChoise, getHumanChoise));