var nombre = "Heider";
var valorEnDolar = 155.5;
var cotizacionEnPesos = 3.8;
var valorEnPesos = valorEnDolar * cotizacionEnPesos;
valorEnPesos = valorEnPesos.toFixed(2);
var cotizacionEnEuros = 0.92;
var valorEnEuros = valorEnDolar * cotizacionEnEuros;
valorEnEuros = valorEnEuros.toFixed(2);
var cotizacionEnBitcoin = 0.000014;
var valorEnBitcoin = valorEnDolar * cotizacionEnBitcoin;
valorEnBitcoin = valorEnBitcoin.toFixed(6);
alert(
  nombre +
    ", tus conversiones son:\n" +
    "$  " +
    valorEnPesos +
    " COP\n" +
    "€  " +
    valorEnEuros +
    " EUR\n" +
    "₿  " +
    valorEnBitcoin +
    " BTC "
);

var nombre = "Heider";
var temperaturaFahrenheit = 90;
var temperaturaCelsius = ((temperaturaFahrenheit - 32) * 5) / 9;
temperaturaCelsius = temperaturaCelsius.toFixed(2);
var temperaturaKelvin = ((temperaturaFahrenheit + 459.67) * 5) / 9;
temperaturaKelvin = temperaturaKelvin.toFixed(2);
alert(
  nombre +
    ", tus conversiones de temperatura son:\n" +
    temperaturaFahrenheit +
    "°F = " +
    temperaturaCelsius +
    "°C\n" +
    temperaturaFahrenheit +
    "°F = " +
    temperaturaKelvin +
    "K"
);
