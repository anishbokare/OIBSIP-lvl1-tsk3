function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
        alert('Please enter a value in Fahrenheit');
        return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius').value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        alert('Please enter a value in Celsius');
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}
