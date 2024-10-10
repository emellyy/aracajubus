const apiKey = 'aa9926944e65acc05e56bd16c5bc6b2f'; // Substitua pela sua chave da API do OpenWeather

async function buscarClima() {
    // Definindo as coordenadas de Londres
    const lat = 51.5074;
    const lon = -0.1278;

    // Excluindo dados minutely e daily como exemplo
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            const dados = await response.json();
            
            const resultado = `
                <h2>Clima Atual</h2>
                <p>Temperatura: ${dados.current.temp}°C</p>
                <p>Clima: ${dados.current.weather[0].description}</p>
                <p>Umidade: ${dados.current.humidity}%</p>
                <p>Pressão: ${dados.current.pressure} hPa</p>
                <p>Vento: ${dados.current.wind_speed} m/s</p>
                <p>Visibilidade: ${dados.current.visibility} m</p>
            `;
            document.getElementById('resultado').innerHTML = resultado;
        } else {
            document.getElementById('resultado').innerHTML = 'Coordenadas não encontradas!';
        }
    } catch (error) {
        document.getElementById('resultado').innerHTML = 'Erro ao buscar o clima.';
    }
}

// Chamada da função para buscar o clima de Londres
buscarClima();
