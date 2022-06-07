var temp = document.getElementById("temp");
var number_try = document.getElementById("trys");
var info = document.getElementById("info");
var last_number = document.getElementById("last_number");
var number;
var random_number;
var victory;
var canPlay;
var firstTemp;

init();

function init(){
    info.innerHTML = '--';
    last_number.innerHTML = '--';
    temp.innerHTML = '--';
    canPlay = true;
    random_number = getRandomNumber();
    number_try = document.getElementById("trys");
    number_try.innerHTML = 7;
    victory = false;
    firstTemp = true;
};

function getRandomNumber(){
    var random = Math.floor(Math.random() * 1000) + 1;
    return random;
}

function verify(){
    number = document.getElementById("n").value;
    if(number <  1000 && number > 0){
        console.log('verify true');
        return true;
    }
    else{
        return false;
    }
};

function compare(){
    let aux;
    console.log('entra no compare');
    if(!victory && canPlay){
        console.log('victory false');
        if(verify()){
            console.log('entra no verify');
            
            if(firstTemp){
                if (number > random_number){
                    info.innerHTML = 'O número sorteado é maior';
                    last_number.innerHTML = number;
                    last_number = number;
                }else if(number < random_number){
                    info.innerHTML = 'O número sorteado é menor';
                    last_number.innerHTML = number;
                    last_number = number;
                }else {
                    victory = true;
                }
                console.log(last_number);
                console.log(number);
                firstTemp = false;
            }
            else{
                if(last_number != number){
                    console.log('last number e number');
                    console.log(last_number);
                    console.log(number);
                    console.log(typeof(number));
                    var difCurrent = random_number - number;
                    var difLast = random_number - last_number;
                    console.log(difCurrent);
                    console.log(difLast);
                    if(difLast > difCurrent){
                        temp.innerHTML = 'Esquentou!';
                    }else if(difLast < difCurrent){
                        temp.innerHTML = 'Esfriou!';
                    }
                }
                
                console.log(number);
                console.log(random_number);

                if (number > random_number){
                    console.log('verdadeiro!');
                    info.innerHTML = 'O número sorteado é maior';
                    last_number.innerHTML = number;
                    last_number = number;
                }else if(number < random_number){
                    info.innerHTML = 'O número sorteado é menor';
                    last_number.innerHTML = number;
                    last_number = number;
                }else {
                    victory = true;
                }
    
                aux = number_try - 1;
                number_try.innerHTML = aux;
    
                if(number_try == 0){
                    canPlay = false;
                }
                if(canPlay == false){
                        
                }
            }
        }
    }
};