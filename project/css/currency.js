const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
var apiKey= "8g2LigzuFbpclxTHFSC0G9nYFxHZHL0V";
var apiUrl = `https://api.apilayer.com/exchangerates_data/latest?apikey=${apiKey}`
let html = '';
async function currency(){
    const res = await fetch(apiUrl);
    const data = await res.json();
    const arrKeys = Object.keys(data.rates);
    const rates = data.rates;
    console.log(rates)
    arrKeys.map(item => {
        return html += `<option value=${item}>${item}</option>`
    });      
    for (let i = 0; i < select.length; i++){
        select[i].innerHTML = html;
    }

    function convert(i,j){
        input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
    }

    input[0].addEventListener('keyup', ()=> convert(1,0));

    input[1].addEventListener('keyup', ()=> convert(0,1));

    select[0].addEventListener('change', ()=> convert(1,0));

    select[1].addEventListener('change', ()=> convert(0,1));
};
currency();