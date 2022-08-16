var player = "X";
var numJog = 0;
var gameover = false;



function checkjogo(id){

    var opt = verificaSrc(id);
    var pc = document.getElementById('cpu').checked;

    if (gameover){
        return false;
    }

    if (opt == "transp.png"){

        document.getElementById(id).src = "imagens/" + player + ".png";

        if (wincheck()){

            gameover = true;
            alert("Fim de jogo " + player + " venceu!")
            setTimeout(function(){ location.reload(); }, 10000);
            return false;
        }
    
        numJog++;   
        
        if (numJog >= 9){
        
            gameover = true;
            alert("Fim de jogo!! Deu velha!!");
            setTimeout(function(){ location.reload(); }, 10000);
            return false;
        }
        if (player == "X"){
    
            player = "O";
    
    
    
        } else {
    
            player = "X";
    
        }



        
    }
    
    if (pc && player == "O"){

        checkjogo(jogoDoPc());

    }

    function jogoDoPc(){

        if (verificaSrc('c5') == "transp.png"){
    
            return 'c5';
    
        }
    
        return 'c' + Math.floor((Math.random() * 9) + 1); 
    
    }
    

}



function verificaSrc(id){


    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);

}

function wincheck(){


    if (((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") || 
        ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") || 
        ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") ||
        ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") ||
        ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png") ||
        ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png") ||
        ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png")){

        return true;

    }

    

    return false;

}

