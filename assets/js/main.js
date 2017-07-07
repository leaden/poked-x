
$(document).ready(function() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'GET',
        dataType: 'JSON',
        data: {"limit": '811'},
    })
    .done(function(result) {
        console.log("success");
        console.log(result);
        for (var i = 1; i < 719; i++) {
            var poke = $("<img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
            $('div.pokemon').append(poke);
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    })
});


/*llamando a todos los pokemon*/
/*	function consumiendoApi(url){
		$.ajax({
   	url: 'http://pokeapi.co/api/v2/pokemon/?limit=811',
   	type: 'GET',
   	dataType: 'JASON',
   	data: {limit: '811'},
   })
   .done(function() {
   	console.log("success");
   	for(x in success.data){
   		$('#pokemon').append('<li><img src="'+success.data[x].png.thumbnail.url+'"></li');
   	}
   })
   .fail(function(){
   	console.log("error");
   })
   .always(function() {
   	console.log("complete");
   });
   };

*/



