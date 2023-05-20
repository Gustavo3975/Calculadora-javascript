function outcome(){

    let num1 = Number(document.getElementById('num-1').value)
    let num2 = Number(document.getElementById('num-2').value)
    let total = 0


    if (document.getElementById('caixa1').checked)
        total = num1 + num2 
    else if  (document.getElementById('caixa2').checked)
        total = num1 - num2
    else if  (document.getElementById('caixa3').checked)
        total = num1 * num2
    else
        total = num1 / num2

        document.getElementById('result').innerHTML = 'Resultado: ' + String(total)




}