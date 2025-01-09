function convertTemperature() {
    const conversionType = document.getElementById('conversionType').value;
    const temperatureInput = document.getElementById('temperatureInput').value;
    let result;

    if (temperatureInput === '') {
        document.getElementById('result').innerText = 'Please enter a value';
        return;
    }

    if (conversionType === 'CtoF') {
        result = (temperatureInput * 9/5) + 32;
        document.getElementById('result').innerText = `${temperatureInput}°C is equal to ${result.toFixed(2)}°F`;
    } else if (conversionType === 'FtoC') {
        result = (temperatureInput - 32) * 5/9;
        document.getElementById('result').innerText = `${temperatureInput}°F is equal to ${result.toFixed(2)}°C`;
    }
}