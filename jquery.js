$(document).ready( function() {
  const thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemp());

  $('#up').click( function() {
    thermostat.up();
    $('#temperature').text(thermostat.currentTemp());
  })
});