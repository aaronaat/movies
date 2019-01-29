
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}
Ticket.prototype.tickets = function() {
  return this.movie + ", " + this.time + ", " + this.age;
}

$(document).ready(function(){

  $("#form").submit(function(event){
        event.preventDefault();

        var movie = ($('#movie :selected').text());
        var time = ($('#time :selected').text());
        var age = ($('#age :selected').text());

        var newTicket = new Ticket(movie, time, age).tickets();

        alert(newTicket)
    })
});
