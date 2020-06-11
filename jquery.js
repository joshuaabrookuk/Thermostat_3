$(document).ready( function() {
  const thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemp());
  $('#powersaver').css("background-color", checkPowerSave());

  $('#up').click( function() {
    thermostat.up();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#down').click( function() {
    thermostat.down();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#reset').click( function() {
    thermostat.reset();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#powersaver').click( function() {
    thermostat.switchPowerSave();
    $('#powersaver').css("background-color", checkPowerSave());
    $('#temperature').text(thermostat.currentTemp());
  })

  function checkPowerSave() {
    if (thermostat.powerSaveMode) {
      return 'green'
    } else {
      return 'red'
    }
  }


});



//
// if (thermostat.powerSaveMode) {
//   console.log('green')
// } else {
//   console.log('red')
// }
