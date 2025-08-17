function calc(){
  document.querySelector('.js-calculate').innerHTML=cal;
}
let cal=JSON.parse(localStorage.getItem('cal'));
  
calc();
function calculation(key){
  if(key==='=')
    cal=eval(cal);
  else if(key==='clear')
    cal='0';
  else
    cal+=key;
  localStorage.setItem('cal',JSON.stringify(cal));
  console.log(cal);
  calc();
}
