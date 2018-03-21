import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

//API CALL THAT POPULATES PAGE, WORKING
// $(document).ready(function(){
//
//     var getDinos = $.get(`http://dinoipsum.herokuapp.com/api/?format=html`),
//       fillContainer = function(html) {
//         $('.results').html(html);
//       },
//       error = function() {
//           console.log('No dinosaurs');
//         };
//
//     getDinos.then(fillContainer, error);
//
// })

$(document).ready(function() {
  $("form.dinoIpsum").submit(function(event) {
    event.preventDefault();

    var paragraphs = $("input#numParagraphs").val();
    var numbers = $("input#numWords").val();

      var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + numbers).then(function(response) {
      $(".results").html(response);
      console.log(response);
      getDinos.then(response);
    });

    // $("form.dinoIpsum")[0].reset();

  });
});
