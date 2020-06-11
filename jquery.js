$(document).ready( function() {
  const thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemp());
  $('#powersaver').css("background-color", checkPowerSave());
  $('#currentUsage').css('background-color', checkEnergyMode());

  $('#up').click( function() {
    thermostat.up();
    $('#temperature').text(thermostat.currentTemp());
    $('#currentUsage').css('background-color', checkEnergyMode());
  })

  $('#down').click( function() {
    thermostat.down();
    $('#temperature').text(thermostat.currentTemp());
    $('#currentUsage').css('background-color', checkEnergyMode());
  })

  $('#reset').click( function() {
    thermostat.reset();
    $('#temperature').text(thermostat.currentTemp());
    $('#currentUsage').css('background-color', checkEnergyMode());
  })

  $('#powersaver').click( function() {
    thermostat.switchPowerSave();
    $('#powersaver').css("background-color", checkPowerSave());
    $('#temperature').text(thermostat.currentTemp());
    $('#currentUsage').css('background-color', checkEnergyMode());
  })

  function checkPowerSave() {
    if (thermostat.powerSaveMode) {
      return 'green'
    } else {
      return 'red'
    }
  }

  function checkEnergyMode() {
    if (thermostat.currentUsage() === "low-usage") {
      return 'green'
    } else if (thermostat.currentUsage() === "med-usage") {
      return 'orange'
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
