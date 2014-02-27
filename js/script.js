//Grid View

$('#grid-view').on('click', function(){
                   
  // Remove 'large-3'                 
   
 $('.columns').removeClass('large-6');

  // Add class 'large-3'

  $('.columns').addClass('large-3');
  
// hide paragraphs
  $('p').hide();

});


//List View


$('#list-view').on('click', function(){
                   
  // Remove 'large-3'                 
   
 $('.columns').removeClass('large-3');

  // Add class 'large-3'

  $('.columns').addClass('large-6');
  
// show paragraphs
  $('p').show();

});
