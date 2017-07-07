$(document).ready(function($){

/*llamanndo a todos los pokemon*/
	function consumiendoApi(url){
		$.ajax({
   	url: 'http://pokeapi.co/api/v2/pokemon/?limit=811',
   	type: 'GET',
   	dataType: 'JASON',
   	data: {limit: '811'},
   })
   .done(function() {
   	console.log("success");
   	for(x in success.data){
   		$('#pokemon').append('<li><img src="'+success.data[x].image.thubnail.url+'"></li');
   	}
   })
   .fail(function(){
   	console.log("error");
   })
   .always(function() {
   	console.log("complete");
   });
   };

/*ajax para mostrar el modal*/
    function llamandoModal(modal){
     $('.modal-trigger').leanModal();

    }

});
