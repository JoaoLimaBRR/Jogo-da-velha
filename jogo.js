var vez = 1;
var vencedor = "";
var id ="";

function jogada (id)
{
    var textoInterno = document.getElementById(id).innerHTML;
    if(textoInterno == "")
    {
        if(vez%2==0)
        {
        document.getElementById(id).innerHTML = "<img src='xis.jpg'>;"
        }
        else
        {
            document.getElementById(id).innerHTML ="<img src='circulo.jpg'>;"    
        }
        vez++;
        verificarFimDeJogo();
    }   
}
function casasIguais(a,b,c)
{

}



function verificarFimDeJogo(){
    if( casa1 == "X" && casa2 == "X" &&  casa3 == "X" ){
        alert("acabou");
    }
}
