const buttonOne = document.querySelector(".btn1")


let count = 0;


function clear(){
  moveText = document.querySelector(".Prg")
  moveText.innerHTML = "";
}

const effectiveFunction = async () => {
  await delay(5000);
  moveText.innerHTML = "It Was super Effective";
}

function useMoves(){
  
  document.querySelector('#theImage').src = "Spoot pokemon battle/Games of your phone spoots.jpg";
  document.querySelector('#gift').src = "https://media.tenor.com/NPs4P994JMoAAAAi/fun-christmas.gif";
  if( count ==0 ){
    clear()
    moveText.innerHTML = "Spoot Used: 'YOU GOT GAMES ON YOUR PHONE' :o";
    
    count = 1;
  }
  else if ( count == 1){ 
    moveText.innerHTML = " it was super effective :o ";
    document.querySelector('#theImage').src = "https://media1.tenor.com/m/lg74K0p1qrgAAAAC/shocked-cat.gif";
    document.querySelector('#gift').src = "https://media1.tenor.com/m/UZtcPpyQrn4AAAAC/gifskawai.gif";
    let bar = document.querySelector('.actualBar2')
    bar.style.backgroundColor = 'grey';
    


  }
  

 
  
  
  
  
  console.log("it works");

}


