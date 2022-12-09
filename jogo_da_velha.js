//preencher tabuleiro
let vez = "x";
let pontosP1 = 0;
let pontosP2 = 0;
let empate = 0;

function troca(){
    if(vez=="o"){
        document.getElementById("vez").innerHTML = "Vez: O";
    }else{
        document.getElementById("vez").innerHTML = "Vez: X";
    }
    return vez;
}

function clicado(botao) {

	if (botao.innerText != "")
		return; // botão já clicado
		
	if (vez == "x") {
		botao.innerText = "x";
		vez = "o";
        troca();
	} else {
		botao.innerText = "o";
		vez = "x";
        troca();
	} 
	ultima = botao;
	
	if (	valor(0,0) != "" && valor(0,0) == valor(0,1) && valor(0,1) == valor(0,2) ||
			valor(1,0) != "" && valor(1,0) == valor(1,1) && valor(1,1) == valor(1,2) ||
			valor(2,0) != "" && valor(2,0) == valor(2,1) && valor(2,1) == valor(2,2) ||
		
			valor(0,0) != "" && valor(0,0) == valor(1,0) && valor(1,0) == valor(2,0) ||
			valor(0,1) != "" && valor(0,1) == valor(1,1) && valor(1,1) == valor(2,1) ||
			valor(0,2) != "" && valor(0,2) == valor(1,2) && valor(1,2) == valor(2,2) ||
		
			valor(0,0) != "" && valor(0,0) == valor(1,1) && valor(1,1) == valor(2,2) ||
			valor(0,2) != "" && valor(0,2) == valor(1,1) && valor(1,1) == valor(2,0)) {
		if (vez == "x"){
			marcarO();
            gg();
        }else{
			marcarX();
            gg();
        }
	} else {
		var empatou = true;
		for (var x = 0; x <= 2; x++)
			for (var y = 0; y <= 2; y++)
				if (valor(x,y) == "")
					empatou = false;
		if (empatou)
			marcarE();
	}	
}

function valor(x, y) {
	var botao = document.getElementById("bt_" + x + "_" + y);
	return botao.innerText;
}

function marcarX () {
	pontosP1+=1;
    document.getElementById("V1").innerHTML = "Vitórias: "+pontosP1+"/3";
    restart();
}

function marcarO () {
	pontosP2+=1;
    document.getElementById("V2").innerHTML = "Vitórias: "+pontosP2+"/3";
    restart();
}

function marcarE () {
	empate += 1;
	document.getElementById("Ve").innerHTML = "Empates: "+empate;
    restart();
}

function restart() {
	vez = "x"
	document.getElementById("bt_0_0").innerText = "";
	document.getElementById("bt_0_1").innerText = "";
	document.getElementById("bt_0_2").innerText = "";
	document.getElementById("bt_1_0").innerText = "";
	document.getElementById("bt_1_1").innerText = "";
	document.getElementById("bt_1_2").innerText = "";
	document.getElementById("bt_2_0").innerText = "";
	document.getElementById("bt_2_1").innerText = "";
	document.getElementById("bt_2_2").innerText = "";
}

//Score system
function gg(){
    if(pontosP1==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(./cenario1.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
		document.getElementById("body").style.display='flex';
		document.getElementById("body").style.justifyContent='center';
        document.getElementById("vez").innerHTML = "Player 1 wins";
        document.getElementById("vez").style.visibility='visible';
		document.getElementById("vez").style.position='none';
		document.getElementById("vez").style.left='none';
        document.getElementById("P1").style.visibility='visible';
        document.getElementById("P1").style.left='40vw';
    }
    else if(pontosP2==3){
        document.getElementById("body").style.visibility='hidden';
        document.getElementById("body").style.backgroundImage="url(./cenario1.jpg)";
        document.getElementById("body").style.backgroundRepeat='no-repeat';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundPosition='center';
		document.getElementById("body").style.display='flex';
		document.getElementById("body").style.justifyContent='center';
        document.getElementById("vez").innerHTML = "Player 2 wins";
        document.getElementById("vez").style.visibility='visible';
		document.getElementById("vez").style.position='none';
		document.getElementById("vez").style.left='none';
        document.getElementById("P2").style.visibility='visible';
        document.getElementById("P2").style.left='40vw';
    };
}