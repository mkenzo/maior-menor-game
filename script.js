var temp = document.getElementById("temp");
var number_try = document.getElementById("trys");
var info = document.getElementById("info");
var last_number = document.getElementById("last_number");
var last;
var trys;
var number;
var random_number;
var victory;
var canPlay;
var firstTemp;

init();

function init(){
    info.innerHTML = '--';
    last_number.innerHTML = '--';
    last = null;
    temp.innerHTML = '--';
    canPlay = true;
    random_number = getRandomNumber();
    number_try = document.getElementById("trys");
    number_try.innerHTML = 7;
    trys = 7;
    victory = false;
    firstTemp = true;
    typeof(number_try);
};

function getRandomNumber(){
    var random = Math.floor(Math.random() * 1000) + 1;
    return random;
}

function verify(){
    number = document.getElementById("n").value;
    if(number <  1000 && number > 0){
        return true;
    }
    else{
        return false;
    }
};

function compare(){
    if(!victory && canPlay){
        if(verify()){
            if(firstTemp){
                if (number > random_number){
                    info.innerHTML = 'O número sorteado é maior';
                    last = number;
                    last_number.innerHTML = last;
                }else if(number < random_number){
                    info.innerHTML = 'O número sorteado é menor';
                    last = number;
                    last_number.innerHTML = last;
                }else {
                    victory = true;
                }
                
                firstTemp = false;
            }
            else{
                if(last != number){
                    var difCurrent = Math.abs(random_number - number);
                    var difLast = Math.abs(random_number - last);
                    if(difLast > difCurrent){
                        temp.innerHTML = 'Esquentou!';
                    }else if(difLast < difCurrent){
                        temp.innerHTML = 'Esfriou!';
                    }
                }

                if (number > random_number){
                    info.innerHTML = 'O número sorteado é maior';
                    last = number;
                    last_number.innerHTML = last;
                }else if(number < random_number){
                    info.innerHTML = 'O número sorteado é menor';
                    last = number;
                    last_number.innerHTML = last;
                }else {
                    window.alert('VOCÊ GANHOU!!!')
                    window.confirm('Jogar de novo?')
                    reset();
                    victory = true;
                }
    
                trys--;
                number_try.innerHTML = trys;
    
                if(trys == 0){
                    canPlay = false;
                }
                if(canPlay == false){
                    window.alert('Suas tentativas acabaram!');
                    window.confirm('Jogar de novo?')
                    reset();
                }
            }
        }
    }
};

function reset(){
    init();
}