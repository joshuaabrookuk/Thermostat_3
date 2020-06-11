$(document).ready( function() {
  const thermostat = new Thermostat();
  displayAndUpdate()
  $('#powersaver').css("background-color", checkPowerSave());

  $('#up').click( function() {
    thermostat.up();
    displayAndUpdate()
  })

  $('#down').click( function() {
    thermostat.down();
    displayAndUpdate()
  })

  $('#reset').click( function() {
    thermostat.reset();
    displayAndUpdate()
  })

  $('#powersaver').click( function() {
    thermostat.switchPowerSave();
    $('#powersaver').css("background-color", checkPowerSave());
    displayAndUpdate()
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

  function displayAndUpdate() {
    $('#temperature').text(thermostat.currentTemp());
    $('#currentUsage').css('background-color', checkEnergyMode());
  }
});



//
// if (thermostat.powerSaveMode) {
//   console.log('green')
// } else {
//   console.log('red')
// }
