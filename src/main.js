import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

$(document).ready(function(){
  // $(".dino-form").submit(function(event){
  //   event.preventDefault();

    // const word = $("input#words").val("");
    // const paragraph = $("input#paragraphs").val("");

    var getDinos = $.get(`http://dinoipsum.herokuapp.com/api/?format=html`),
      fillContainer = function(html) {
        $('.results').html(html);
        console.log("html: "+ html);
      },
      error = function() {
          console.log('No dinosaurs');
        };

    getDinos.then(fillContainer, error);

    // $('.results').text(paragraph);
  // })
})
