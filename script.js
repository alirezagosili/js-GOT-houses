const getRandomHouse = async () => {
    const response = await fetch('https://www.anapioficeandfire.com/api/houses');
    const houses = await response.json();
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];

    document.getElementById('house-name').innerText = randomHouse.name;
    document.getElementById('house-region').innerText = `Region: ${randomHouse.region}`;
    document.getElementById('house-words').innerText = `Words: ${randomHouse.words || 'No words'}`;
// skeleton screen
    document.getElementById('skeleton-lord').style.display = 'block';
    document.getElementById('real-lord').style.display = 'none';
    
    if (randomHouse.currentLord) {
        const lordResponse = await fetch(randomHouse.currentLord);
        const lord = await lordResponse.json();
        document.getElementById('skeleton-lord').style.display = 'none';
        document.getElementById('real-lord').style.display = 'block';
        document.getElementById('real-lord').innerText = `Current Lord: ${lord.name}`;
    } else {
        document.getElementById('skeleton-lord').style.display = 'none';
        document.getElementById('real-lord').style.display = 'block';
        document.getElementById('real-lord').innerText = 'Current Lord: Unknown';
    }
}
