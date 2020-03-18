$(function(){
  $(".menu a").click(function(){
    var menudata = $(this).attr("divdata");
    console.log(menudata);
    $(".show > div").each(function(){
      var showmap = $(this).attr("divdata");
      console.log(showmap);
      if(menudata == showmap){
        $(this).show();
      }else{
        $(this).hide();
      }
    });
  });
});