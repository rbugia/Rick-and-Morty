const charactersContainer = document.getElementById('characters-container');


fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const card = document.createElement('div');
      card.className = 'card';
  card.className = 'card';

   card.innerHTML = `
    <h2>${character.name}</h2>
    <p class="character-details"><span class="attribute">Status: ${character.status}</span></p>
    <p class="character-detail"><span class="attribute">Species: ${character.species}</span></p>
    <img src="${character.image}" alt="${character.name}" class="character-image"/>
  `;

  // Append the card to charactersContainer
  charactersContainer.appendChild(card);
    });
});
