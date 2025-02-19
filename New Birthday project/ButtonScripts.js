

function Birthday(){
    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")
    let vid = document.getElementById("video")
    let x = document.getElementById("myDIV")
    if(x.style.opacity==="0"){
        x.style.opacity ="0.5";
        img1.style.opacity ="1";
        img2.style.opacity ="1";
        vid.play();
    }
    else{
        x.style.opacity="0";
        img1.style.opacity ="0";
        img2.style.opacity ="0";
        vid.pause();
    }
    
}
