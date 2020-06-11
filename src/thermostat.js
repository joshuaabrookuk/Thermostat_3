'use strict'

class Thermostat {
    constructor() {
      this.temperature = 20;
      this.MINTEMP = 10;
      this.MEDENERGYUSE = 18
      this.MAX_LIMIT_PSN_ON = 25;
      this.MAX_LIMIT_PSN_OFF = 32;
      this.powerSaveMode = true;

    };

    currentTemp(){
        return this.temperature

    };

    minTemp(){
       return  this.MINTEMP === this.temperature
    };

    switchPowerSave(){
      this.powerSaveMode = !this.powerSaveMode
    };

    isMaxTemp() {
      if (this.powerSaveMode === false) {
         return this.temperature === this.MAX_LIMIT_PSN_OFF;
       }
         return this.temperature === this.MAX_LIMIT_PSN_ON;
    };

    up(){
        if (this.isMaxTemp()) {
            return;
        }
      this.temperature ++;
    };

    down(){
        if (this.minTemp()) {
        return;
        };
        this.temperature --;
    };

    reset(){
      this.temperature = 20;
    };

    currentUsage(){
      if (this.temperature < this.MEDENERGYUSE) {
      return "low-usage";
    }
      if (this.temperature >= this.MEDENERGYUSE && this.temperature <= this.MAX_LIMIT_PSN_ON) {
      return "med-usage";
    }
    return "high-usage"
  };
};
