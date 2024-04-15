// random value generated
var y = Math.floor(Math.random() * 10+1);
var guess = 1;
// number guessed by user
var x = document.getElementById("guessField").value;
function submit()
{
var x = document.getElementById("guessField").value;
if(x == y)

alert("CONGRATULATIONS !!! "+playername+" YOU GUESSED IT RIGHT IN "
+ guess + " GUESS ");
guess= 1;

 if (x > y)
{
guess++;
alert("OOPS SORRY !! TRY A SMALLER NUMBER");
}
else
{
guess++;
alert("00PS SORRY !! TRY A GREATER NUMBER")
}
}
function playAgain(){
    y= Math.floor(Math.random() * 10 + 1);
}