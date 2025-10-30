const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
   
pass1El=document.getElementById("pass1")
pass2El=document.getElementById("pass2")
function randomChar()
{
    let c=Math.floor(Math.random()*(characters.length))
   
    return characters[c]
}
function generatePass()
{
    pass1El.textContent=""
    pass2El.textContent=""
    console.log("hey")
    for(let i=0;i<15;i++)
    {
        
        pass1El.textContent+=randomChar()
        pass2El.textContent+=randomChar()

    }
    
}