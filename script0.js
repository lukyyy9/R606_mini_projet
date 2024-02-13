var data_init = {
    "ID1" :{
      "url":"https://cdn.discordapp.com/attachments/1067513488068575272/1206899557057953862/signal_optimiser.png?ex=65ddafcd&is=65cb3acd&hm=9008eb01c5c931af53d9539cca11efe441c6ed87bd07079b8d7057da9421ea56&",
      "content":"Epimorphic_Skeleton",
      "wiki":"https://cyberpunk.fandom.com/wiki/Epimorphic_Skeleton",
      "price":"27926€$",
    },
    "ID2" :{
      "url":"https://cdn.discordapp.com/attachments/1067513488068575272/1206899558748266506/sandevistan.png?ex=65ddafcd&is=65cb3acd&hm=8e28de849e346569e78cd00d65e2d7d9ce6bf9f644ed1de909ce28dfc927ec70&",
      "content":"QianT_Warp_Dancer_Sandevistan", 
      "wiki":"https://cyberpunk.fandom.com/wiki/QianT_%22Warp_Dancer%22_Sandevistan",
      "price":"35000€$",
    },
    "ID3" :{
      "url":"https://cdn.discordapp.com/attachments/1067513488068575272/1206899558475632680/rippler.png?ex=65ddafcd&is=65cb3acd&hm=90a11d7f0d22c9f60e95462db0d319ec2a8e49450bf2b41f13f1669d0b7b4d45&",
      "content":"Tetratronic_Rippler_Cyberdeck", 
      "wiki":"https://cyberpunk.fandom.com/wiki/Tetratronic_Rippler",
      "price":"35000€$",
    },
    "ID4" :{
      "url":"https://cdn.discordapp.com/attachments/1067513488068575272/1206899558232231946/monocable.png?ex=65ddafcd&is=65cb3acd&hm=9bbd97138f51b9b59ec6672cd42bde48722d7649a180d17e980a8c80f5a9681d&",
      "content":"Arasaka_Monowire", 
      "wiki":"https://cyberpunk.fandom.com/wiki/Monowire",
      "price":"20000€$",
    },
    "ID5" :{
      "url":"https://cdn.discordapp.com/attachments/1067513488068575272/1206899557984764004/lames.png?ex=65ddafcd&is=65cb3acd&hm=77d533fae06b341394a6407cc8055f9f5bf9e3dbfd0c8161b0eb9b7bc961e73a&",
      "content":"Arasaka_Mantis_blades", 
      "wiki":"https://cyberpunk.fandom.com/wiki/Mantis_Blades",
      "price":"20000€$",
    },
    "ID6" :{
      "url":"https://cdn.discordapp.com/attachments/1067513488068575272/1206899557745561620/gorilla.png?ex=65ddafcd&is=65cb3acd&hm=6d101045b0e4768c55820d0ad4afb64a5923e70a97f6a6276d19c83b5aa46cd1&",
      "content":"Arasaka_Gorilla_arms", 
      "wiki":"https://cyberpunk.fandom.com/wiki/Gorilla_Arms",
      "price":"20000€$",
    },
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


