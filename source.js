var characterDivChin = document.getElementById('characterDivChin');
var progressBarChin = document.getElementById('progressBarChin');
var characterDivEng = document.getElementById('characterDivEng');
var progressBarEng = document.getElementById('progressBarEng');
var i = 0x4e00;
var j = 0x0041;
var intervalId;
var eng = false;
var chin = false;
var countEng = 0;
var countChin = 0;
var stringEng = String.fromCodePoint(j);
var stringChin = String.fromCodePoint(i);
characterDivChin.innerHTML = stringChin;
characterDivEng.innerHTML = stringEng;

function draw() {
    progressBarChin.value = countChin;
    progressBarEng.value = countEng;
    for(var j = 0; j < 4; j++)
    {
        if (i < 0x2FA1D && chin) {
            i++;
            countChin++;
            switch (i) {
                case 0x9FFF + 1:
                    i = 0x3400;
                    break;
                case 0x4DBF + 1:
                    i = 0x20000;
                    break;
                case 0x2A6DF + 1:
                    i = 0x2A700;
                    break;
                case 0x2B73F + 1:
                    i = 0x2B740;
                    break;
                case 0x2B81F + 1:
                    i = 0x2B820;
                    break;
                case 0x2CEAF + 1:
                    i = 0x2CEB0;
                    break;
                case 0x2EBEF + 1:
                    i = 0x30000;
                    break;
                case 0x3134F + 1:
                    i = 0x31350;
                    break;
                case 0x323AF + 1:
                    i = 0x2EBF0;
                    break;
                case 0x2EE5F + 1:
                    i = 0x2E80;
                    break;
                case 0x2EFF + 1:
                    i = 0x2F00;
                    break;
                case 0x2FDF + 1:
                    i = 0x3000;
                    break;
                case 0x303F + 1:
                    i = 0xF900;
                    break;
                case 0xFAFF + 1:
                    i = 0x2F800;
                    break;
            }
            else{
                break;
            }
            if (stringChin.length > 500) {
                //stringChin = stringChin.substring(stringChin.length-500,stringChin.length)
                stringChin = "";
            }
            stringChin += String.fromCodePoint(i);
            characterDivChin.innerHTML = stringChin;
        }
    }
    for(var j = 0; j < 4; j++){
        if (j < 0xFF5A && eng) {
            j++;
            countEng++;
            switch (j) {
                case 0x007B:
                    j = 0x00C0;
                    break;
                case 0x02B9:
                    j = 0x1D00;
                    break;
                case 0x1DBF:
                    j = 0x1E00;
                    break;
                case 0x1F00:
                    j = 0x2160;
                    break;
                case 0x2189:
                    j = 0x2C60;
                    break;
                case 0x2C7F:
                    j = 0xA722;
                    break;
                case 0xA7FF:
                    j = 0xAB30;
                    break;
                case 0xAB6A:
                    j = 0xFF21;
                    break;
            }
            else{
                break;
            }
            if (stringEng.length > 500) {
                //stringEng = stringEng.substring(stringEng.length-500,stringEng.length)
                //stringEng = "";
            }
            stringEng += String.fromCodePoint(j);
            characterDivEng.innerHTML = stringEng;
        }
    }
}

function startEng() {
    eng = true;
    j = 0x0041;
    countEng = 0;
    stringEng = String.fromCodePoint(j);
}

function startChin() {
    chin = true;
    i = 0x4e00;
    countChin = 0;
    stringChin = String.fromCodePoint(i);
}
intervalId = setInterval(draw, 1);
