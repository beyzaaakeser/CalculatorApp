
const keyEl = document.querySelector('.buttons tbody');
const islemEl = document.querySelector('.container .islem');
const resultEl = document.querySelector('.container .result');

keyEl.addEventListener('click', (e) => {
     const buttonValue =   e.target.innerText;

    if(resultEl.innerText === null || resultEl.innerText === "" ){
        if(buttonValue === '=') {

            if(islemEl.innerText.includes('%') && !islemEl.innerText.includes('+')
                && !islemEl.innerText.includes('-') && !islemEl.innerText.includes('*')
                && !islemEl.innerText.includes('/')
            ){
                let num = islemEl.innerText;
                let index = islemEl.innerText.indexOf('%');
                let num1 = num.substring(0, index)
                let num2 = num.substring(index+1)

                const res = num1 * num2 / 100;

                if(res.toString().includes('.')){
                    resultEl.innerText =res.toFixed(3);
                }else{
                    resultEl.innerText =res;
                }

            } else{
                const result = eval(islemEl.innerText);

                if(result.toString().includes('.')){
                    resultEl.innerText =result.toFixed(3);
                }else{
                    resultEl.innerText =result;
                }
            }

        }else{

            if(buttonValue === 'CE') {
                let str = islemEl.innerText;
                const newStr = str.slice(0, -1);
                islemEl.innerText = newStr;
            }else{
               islemEl.innerText += buttonValue;
            }
        }
    }else{
        if(buttonValue !== '=' && buttonValue !== 'CE') {
            if(isNaN(buttonValue)){
                islemEl.innerText = resultEl.innerText + buttonValue;
                resultEl.innerText = "";
            }
        }else{
                islemEl.innerText = resultEl.innerText
                resultEl.innerText = "";
        }
    }

    if(buttonValue === 'C') {
        resultEl.innerText = "";
        islemEl.innerText = "";
    }

});


