

var getDinos = $.get(`http://dinoipsum.herokuapp.com/api/?format=html`),
  fillContainer = function(html) {
    $('.results').html(html);
    console.log("html: "+ html);
  },
  error = function() {
      console.log('No dinosaurs');
    };

getDinos.then(fillContainer, error);









// $(document).ready(function() {
//   $("#dinobtn").click(function() {
//     let word = $("#words").val("");
//     let paragraph = $("#paragraphs").val("");
//     $("#words").val("");
//     $("#paragraphs").val("");
//     $.ajax({
//       url: `http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=3`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.results').text(`${paragraph}`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request.")
//       }
//     });
//   });
// });
