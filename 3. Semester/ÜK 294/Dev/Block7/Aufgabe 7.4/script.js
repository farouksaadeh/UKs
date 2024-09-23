document.getElementById('zipcodeForm').addEventListener('submit', function(event) {

    const zipcode = document.getElementById('zipcode').value;
    const apiUrl = `https://corsproxy.io/?https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${zipcode}00`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.temperature;
            const forecast = data.forecast; 

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>Wetter für PLZ ${zipcode}</h2>
                <p>Aktuelle Temperatur: ${temperature} °C</p>
                ${forecast ? `<p>Wettervorhersage: ${forecast}</p>` : ''}
            `;
        })
        .catch(error => {
            console.error('Es gab ein Problem mit der Fetch-Anfrage:', error);
        });
});
