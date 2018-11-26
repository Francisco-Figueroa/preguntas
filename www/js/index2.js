function obtener_preguntas(){
	var todo = new Array();
	var todo_str = localStorage.getItem('preguntas');
	if (todo_str !== null){
		todo = JSON.parse(todo_str);
	}
	return todo
}

function carga_preguntas(){
var array= ["¿Quién descubrió los andes?", "¿Cuánto es 2 + 2?", "¿El huevo o la gallina?"];
var preguntas = obtener_preguntas();
for(i = 0; i <= array.lenght; i++){
	array.push(preguntas[i]);
}
localStorage.setItem("preguntas",JSON.stringify(array));
mostrar_todo();
}

function mostrar_todo(){
var lugar_div = document.getElementById("lugar");

var preguntas = obtener_preguntas();
var html = '';

for(i = 0; i <= preguntas.lenght; i++){
	html += ''+'<div class="container">'+
	'<div class="1">'+
	'<center><h3>'+preguntas[i]+'</h3></center>'+
	'<p>Opcion1</p><input type="radio" name="1" value="1">'+
	'<p>Opcion2</p><input type="radio" name="1" value="0">'+
	'<p>Opcion3</p><input type="radio" name="1" value="0">'+
	'</div></div>';
	}
	lugar_div.innerHTML = html;
}
carga_preguntas();
mostrar_todo();