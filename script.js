
/*function G_number()
{  
    var min = 1;
    var max = 20;
    var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(randomInteger);
}
a = Number(G_number());
*/
//document.querySelector('#number').textContent=a;
let score=20;
let highScore=0;
let SecretNumber=Math.trunc(Math.random()*20)+1;


document.querySelector('.check').addEventListener
('click', function(){
    const x =Number(document.querySelector('.input').value);
    console.log(x, typeof x);
    if ( ! x )
   {
    document.querySelector('.msg').textContent = 'No Number';       
    }
    else if (x === SecretNumber) {    
        document.querySelector('.number').textContent=SecretNumber; 
        document.querySelector('.msg').textContent = 'correct Number';
        document.querySelector('.score').textContent=score;
        if(score>highScore)
        {
            highScore=score
            document.querySelector('.High_score').textContent = highScore;

        }

    }
    else if (x>SecretNumber) {
        if (score>1) {
            score--;
            document.querySelector('.msg').textContent = '📈📈Too High';
            document.querySelector('.score').textContent=score;
            
        }
        else{
            document.querySelector('.msg').textContent = 'You have lost the game';
            document.querySelector('.score').textContent=0;
        }
       
    }   
    else if (x<SecretNumber) {
        if (score>1) {
            score--;

            document.querySelector('.msg').textContent = '🤦‍♂️OopsToo Low ';
            document.querySelector('.score').textContent=score;
            
        }
        else{
            document.querySelector('.msg').textContent = 'You have lost the game';
            document.querySelector('.score').textContent=0;
        }


       

    }          
    }
);

document.querySelector('.again').addEventListener('click',
function()
{
   score=20;
    
  SecretNumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('.msg').textContent='Start Guesing';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.input').value='';

    
}

)
