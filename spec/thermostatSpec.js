'use strict'

describe("Thermostat", function(){
    let thermostat
    beforeEach(function(){
        thermostat = new Thermostat();
    });
    it("always starts with the temp at 20 degrees", function(){
        // this.thermostat
        expect(thermostat.currentTemp()).toEqual(20);
    });
    it("allows the user to change temp up by 1 degree", function(){
        thermostat.up()
        expect(thermostat.currentTemp()).toEqual(21);
    });
    it("allows the user to change temp down by 1 degree", function(){
        thermostat.down()
        expect(thermostat.currentTemp()).toEqual(19);
    });
    it("has a minimum temp of 10 degrees", function(){
        for( var degree = 0; degree < 10; degree+= 1){
        thermostat.down();
        }
        expect(thermostat.currentTemp()).toEqual(10);
    });

    it("has a power saving mode, whilst true max 25 degrees", function(){
        for( var degree = 0; degree < 5; degree+=1){
            thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(25);
    });

    it("has a power saving mode, whilst false max 32 degrees", function(){
        thermostat.switchPowerSave();
        for( var degree = 20; degree < 32; degree+=1){
            thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(32);
    });

    it("resets the temperature to 20 when reset", function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.currentTemp()).toEqual(20);
    });

    it("returns low-usage if thermostat is <= 18", function(){
      for( var degree = 0; degree < 3; degree+= 1){
      thermostat.down();
       }
      expect(thermostat.currentUsage()).toEqual("low-usage");
    });

    it("returns med-usage if thermostat is between 18 and 25", function(){
      expect(thermostat.currentUsage()).toEqual("med-usage")
    });

    it("returns high-usage if thermostat is > 25", function(){
      thermostat.switchPowerSave();
      for( var degree = 20; degree < 30; degree+=1){
          thermostat.up();
      }
      expect(thermostat.currentUsage()).toEqual("high-usage")
    });

});
