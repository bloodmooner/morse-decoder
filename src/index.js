const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decode = expr => {
    let part = '';
    let stringArr = [];
    let stringMorse = '';
    let morseArr = [];
    let encodedStr = '';


    for(let j = 0; j < expr.length; j = j + 10) {
        part = expr.slice(j, j + 10);
        stringArr.push(part);
    }
        
    for(let i = 0; i < stringArr.length; i++) {

        let elemArr = [];

        for(let j = 0; j < stringArr[i].length; j = j + 2) {
            
            stringMorse = stringArr[i].slice(j, j + 2);

            if(stringMorse == '11') elemArr.push('-');
            if(stringMorse == '10') elemArr.push('.');
            if(stringMorse == '**' && elemArr.indexOf('**') == -1) elemArr.push('**');
     
        }
        
        if(elemArr.length != 0) {
            morseArr.push(elemArr.join(''));
        }
    }

    for(let i = 0; i < morseArr.length; i++) {
        
        if(morseArr[i] == '**') {
            encodedStr += ' ';
        } else {
            encodedStr += MORSE_TABLE[morseArr[i]];
        }  
    }
    
    return encodedStr;
}


module.exports = {
    decode
}


