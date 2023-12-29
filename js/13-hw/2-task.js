const weather = {
    temperature: prompt("введіть температуру"),
    huminity: 10,
    windSpeed: 2,
    checkTemperature() {
        if (outSideTemperature > 0) {
            console.log("false")
        } else {
            console.log("true")
        }
    },
}
const {temperature: outSideTemperature, huminity: outSideHuminity, windSpeed: outSideWindSpeed} = weather
weather.checkTemperature()
