const currencyEl_one = document.getElementById('currency-one');
const amountEl_one  = document.getElementById('amount-one');
const currencyEl_two  = document.getElementById('currency-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap  = document.getElementById('swap');
function calculate(){
const currency_one = currencyEl_one.value;
const currency_two = currencyEl_one.value;
 fetch("https://open.exchangerate-api.com/v6/latest")
.then(res => res.json())
.then(data => {
  const rate  = data.rates[currency_two] / data.rates[currency_one];
  rate.El.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
  amountEl_two.value  = (amountEl_one.value*(rate)).toFixed(2);




})

}
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
 const temp = currencyEl_one.value;
 currency_one.value = currencyEl_two.value;
currencyEl_two.value  = temp;
calculate();





});
calculate();
