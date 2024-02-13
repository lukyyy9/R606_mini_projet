// ############## TEST RDF LOAD

var uri = 'https://example.org/'
var body = `<?xml version="1.0"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:ex="http://example.org/stuff/1.0/">

  <rdf:Description rdf:about="http://example.org/item01"> 
    <ex:prop rdf:parseType="Literal" xmlns:a="http://example.org/a#">
      <a:Box required="true">
        <a:widget size="10" />
        <a:grommit id="23" />
      </a:Box>
    </ex:prop>
  </rdf:Description>

</rdf:RDF>`
var mimeType = 'application/rdf+xml'
var store = $rdf.graph()


try {
    $rdf.parse(body, store, uri, mimeType)

console.log(store);
} catch (err) {
    console.log(err)
}

var triples = store.statementsMatching(undefined, undefined, undefined)
for (var i=0; i<triples.length;i++) {
    friend = triples[i]
    console.log(friend.subject.uri) // a person having friends
}

// ############# TEST SPARQL
function getInformation(id){

  var baseURL="http://fr.dbpedia.org/sparql";

  querySPARQL=`PREFIX dbo: <http://dbpedia.org/ontology/>
          SELECT DISTINCT ?s WHERE {
            ?s a dbo:Museum.
            ?s dbo:country <http://fr.dbpedia.org/resource/France>
           }`
  $.ajax({

  success: function(response) {
    console.log(response)
  },
  error: function(xhr) {
    console.log("no")
  }
});
}


var data_init = {
    "ID1":{"url":"https://picsum.photos/300?image=648","content":"blabla1"},
    "ID2":{"url":"https://picsum.photos/300?image=478","content":"blabla2"},
    "ID3":{"url":"https://picsum.photos/300?image=1023","content":"blabla3"},
    "ID4":{"url":"https://picsum.photos/300?image=265","content":"blabla4"},
    "ID5":{"url":"https://picsum.photos/300?image=967","content":"blabla5"},
    "ID6":{"url":"https://picsum.photos/300?image=930","content":"blabla6"},
  };
$(function() {

Object.keys(data_init).forEach(function(key) {
    $( ".imageGallery" ).append( '<img class="image" data-id="'+key+'" src="'+data_init[key]["url"]+'">' );

});

// $("#info_btn").on("click",function (argument) {
//   getInformation(id)
// })
$(".image").on("click", function(){

  console.log("hey");
  key_current=$(this).attr('data-id');

   // $('#modalHolder').modal('show');
   $('#myModal').modal('toggle');
   $('#modalBody').html( data_init[key_current]["content"]);
   // modal.style.display = "block";

})
$(".span").on("click", function(){
   $('#myModal').modal('hide');
 })

console.log("La page est complètement chargée");
});


