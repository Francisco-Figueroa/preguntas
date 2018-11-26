function calcular() {
	var opc1 = document.getElementById("uno").value;
	/*for(var i=0;i<document.getElementById("uno").length;i++)
        {
            if(document.getElementById("uno")[i].checked)
                var opc1_final=document.getElementById("uno").value;
        }*/

	var opc2 = document.getElementById("dos").value;
	/*for(var i=0;i<opc2.length;i++)
        {
            if(opc2[i].checked)
               var opc2_final=opc2[i].value;
        }*/

	var opc3 = 	document.getElementById("tres").value;
	var opc4 = document.getElementById("cuatro").value;
	var opc5 = document.getElementById("cinco").value;

	var resul = parseInt(opc1)+parseInt(opc2)+parseInt(opc3)+parseInt(opc4)+parseInt(opc5);

	var html = '';

	html += '<br><br><div class="container">'+
	'<h1>Tu resutado de aciertos es de: '+resul+' respuestas correctas, muy bien'+
	'</div>';

	var resul_div = document.getElementById("resul");

	resul_div.innerHTML = html;


}