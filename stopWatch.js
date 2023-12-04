let totalSeconds=0;
let timer;
function start(){
    timer=setInterval(updateTimer,1000)
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    document.getElementById("sec").value="";
    document.getElementById("min").value="";
    totalSeconds=0;
}

function updateTimer(){
    totalSeconds++
    if(totalSeconds>59){
        let min=Math.floor(totalSeconds/60);
        
        document.getElementById("min").value=min;
         
        
       

    }
     if(totalSeconds>=0){
        
        let sec=totalSeconds;
        document.getElementById("sec").value=sec;
        if(sec>=60) {
            let sec=totalSeconds%60;
           
            document.getElementById("sec").value=sec; 
        }
    }
}

