$(document).ready(function(){
  $("form#movie").submit(function(){
    event.preventDefault();
    var character = $("input:radio[name=dumb]:checked").val();
    if(character === "lloyd"){
      $("#lloyd").show();
      $("#harry").hide();
      $("#mary").hide();
    }else if(character === "harry"){
      $("#harry").show();
      $("#mary").hide();
      $("#lloyd").hide();
    }else if(character === "mary"){
      $("#mary").show();
      $("#lloyd").hide();
      $("harry").hide();
    };
  });
});
