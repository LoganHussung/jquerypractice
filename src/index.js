$(function(){
  console.log('The bowl is ready');

    $.ajax({
      url: "Images/soups.json"
    }).done(function(respond) {
      console.log("Soups ready", respond);
      for (soup in respond) {
           console.log();
           var newSoup = $("<li></li>");
           newSoup.text(soup + ': ' + respond[soup].Location.join(', '))
           $('.Flavors').append(newSoup);
         }
    });

})

$(function() {
    $('#example').DataTable();
} );
