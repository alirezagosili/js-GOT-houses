const getRandomHouse = async() => {
    const response = await fetch('https://www.anapioficeandfire.com/api/houses');
    const houses = await response.json();
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    
    document.getElementById('house-name').innerText = randomHouse.name;
    document.getElementById('house-region').innerText = `Region: ${randomHouse.region}`;
    document.getElementById('house-words').innerText = `Words: ${randomHouse.words || 'No words'}`;
    
    if (randomHouse.currentLord) {
        const lordResponse = await fetch(randomHouse.currentLord);
        const lord = await lordResponse.json();
        document.getElementById('house-lord').innerText = `Current Lord: ${lord.name}`;
    } else {
        document.getElementById('house-lord').innerText = 'Current Lord: Unknown';
    }
}
