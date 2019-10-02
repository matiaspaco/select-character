var users = [

			{
				name: 'Maria',
				gender:'M',
				hobby:'mascotas',
				avatar: 'avatar1.png'
			},
			{
				name: 'Julia',
				gender:'M',
				hobby:'mascotas',
				avatar: 'avatar2.png'
			},
			{
				name: 'Raul',
				gender:'H',
				hobby:'deportes',
				avatar: 'avatar3.png'
			},


			{
				name: 'Axel',
				gender:'H',
				hobby:'programar',
				avatar: 'avatar4.png'
			},

			{
				name: 'Noelia',
				gender:'M',
				hobby:'lectura',
				avatar: 'avatar5.png'
			},


			{
				name: 'Diego',
				gender:'H',
				hobby:'musica',
				avatar: 'avatar6.png'
			},
			{
				name: 'gimena',
				gender:'M',
				hobby:'danza',
				avatar: 'avatar7.png'
			},

];


window.addEventListener('load', function(){


	function search(){

		//console.log('click');
		//console.log(results);
		
		var hobbyField = document.getElementById('PasaTiempos');
		var hobby = hobbyField.value;
		//console.log(hobby);


		var sexoSelect = document.getElementById('SexoID');
		var SexoElegido = sexoSelect.options[sexoSelect.selectedIndex].value;
		console.log(SexoElegido);

		var resultHTML = '';
		var NumeroUsuarios = users.length;

		for (var i = 0; i < NumeroUsuarios; i++) 
		{

			if (SexoElegido == 'T' || SexoElegido == users[i].gender) {

				if (hobby == ''|| hobby == users[i].hobby) {

					resultHTML += '<div class="person-row">\
									   <img src="images/' + users[i].avatar +'"/>\
									   <div class="person-info">\
									   <div>'+ 'Nombre: ' +  users[i].name +'</div>\
									   <div>'+ 'Pasa Tiempos: ' + users[i].hobby +' </div></div>\
									   <button>Seleccionar personaje</button></div>';

				}
				

			}
			

		}
		/*results.innerHTML = 'HOLA <br/>mundo Mat<div style="background-color: #008080;" >como estas </div>';*/

		results.innerHTML = resultHTML;

	};

	console.log('esto indica que se cargo la pagina correctamente');

	var results = document.getElementById('results');
	var SearchBtn = document.getElementById('searchBtn');

	SearchBtn.addEventListener('click', search);
	search();



});