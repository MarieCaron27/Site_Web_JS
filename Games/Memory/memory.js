const divResult = document.getElementById("result");
const divScore = document.getElementById("score");
const divTimer = document.getElementById("timer");

var oldSelection = [];
var nbClicks = 0;
var ready = false;
var img_ok = 0;
var the_score = 0;
var time_start = 0;
var timerInterval;

var tableAtStart = 
[
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

var tableGame = createRandomTable();

// Appel à startGame pour initialiser le jeu lorsque la page est chargée
startGame();

setTimeout(() => 
{
    startTimer();
    showTableGame();
    ready = true;
}, 60 * 1000);

function startGame() 
{
    resetGame();
    showTableGame();
}

function resetGame() 
{
    clearInterval(timerInterval);
    nbClicks = 0;
    ready = false;
    img_ok = 0;
    the_score = 0;
    time_start = 0;
    divScore.innerHTML = "<strong>" + the_score + "</strong>/8";
    divTimer.innerHTML = "60 secondes";
}

function startTimer() 
{
    time_start = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() 
{
    let current_time = new Date().getTime();
    let elapsed_time = Math.floor((current_time - time_start) / 1000);
    let remaining_time = 60 - elapsed_time;

    if (remaining_time <= 0 || img_ok === 16) 
    {
        clearInterval(timerInterval);

        if (img_ok === 16 || remaining_time === 0) 
        {
            divTimer.innerHTML = "Jeu terminé!";
        } 
        else 
        {
            divTimer.innerHTML = "Le temps imparti est dépassé, vous avez perdu !";
        }
        ready = false;
    } 
    else 
    {
        divTimer.innerHTML = remaining_time + " secondes";
    }
}

function showTableGame() 
{
    let text = "";

    for (let i = 0; i < tableAtStart.length; i++) 
    {
        text += '<div>';

        for (let j = 0; j < tableAtStart[i].length; j++) 
        {
            if (tableAtStart[i][j] === 0) 
            {
                text += "<button class='btn btn-primary' onClick='verify(\"" + i + "-" + j + "\")'>Afficher</button>";
            } 
            else 
            {
                text += "<img src='" + getNumberImage(tableAtStart[i][j]) + "' class='animals'>";
            }
        }

        text += '</div>';
    }

    divResult.innerHTML = text;
}

function verify(button) 
{    
    nbClicks++;

    let row = button.substr(0, 1); //Gets the first part of the image selected
    let column = button.substr(2, 1);

    tableAtStart[row][column] = tableGame[row][column];

    showTableGame();

    if (nbClicks > 1) 
    {
        ready = false;

        setTimeout(() => 
        {
            if (tableAtStart[row][column] !== tableGame[oldSelection[0]][oldSelection[1]]) 
            {
                tableAtStart[row][column] = 0;
                tableAtStart[oldSelection[0]][oldSelection[1]] = 0;
            } 
            else 
            {
                img_ok += 2;

                the_score++;
                divScore.innerHTML = "<strong>" + the_score + "</strong>/8";
                
                if (img_ok === 16) 
                {
                    clearInterval(timerInterval);
                    divTimer.innerHTML = "Jeu terminé!";
                }
            }
            
            showTableGame();
            ready = true;
            nbClicks = 0;
            oldSelection = [row, column];

        }, 1000);
    } 
    else 
    {
        oldSelection = [row, column];
    }
}

// Fonction createRandomTable() reste la même

function getNumberImage(value)
{
    let myImage = "images/";

    switch(value)
    {
        case 1:
            myImage += "berger_allemand.jpg";
            break;
        
        case 2:
            myImage += "berger_australien.jpg";
            break;

        case 3:
            myImage += "berger_suisse.jpg";
            break;

        case 4:
            myImage += "bouvier_bernois.jpg";
            break;

        case 5:
            myImage += "dalmatien.jpg";
            break;

        case 6:
            myImage += "golden_retriever.jpg";
            break;

        case 7:
            myImage += "husky.jpg";
            break;

        case 8:
            myImage += "saint_bernard.jpg";
            break;

        default:
            console.log("Image non prise en compte !");
            break;
    }

    return(myImage);
}

function createRandomTable()
{
    let randomTable=[];
    let nbImagePosition = [0,0,0,0,0,0,0,0]; //Gets how much time a number is in the table

    for(let i=0;i<4;i++)
    {
        let rows = []; //Create the rows of our table
    
        for(let j=0;j<4;j++)
        {
            let end = false;
            
            while(!end)
            {
                let randomImage = Math.floor(Math.random() * 8); //Numbers 0-7

                if(nbImagePosition[randomImage] < 2)
                {
                    rows.push(randomImage+1); //Adds the random numbers to our rows
                    nbImagePosition[randomImage]++; 
                    end = true;
                }    
            }
        }

        randomTable.push(rows); //Adds the rows to create our final table
    }

    return(randomTable);
}