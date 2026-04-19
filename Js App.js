fetch('cocktails.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cocktails");

    data.forEach(cocktail => {
      const card = document.createElement("div");

      card.innerHTML = `
        <img src="${cocktail.image}" width="200"/>
        <h3>${cocktail.name}</h3>
        <p>${cocktail.description}</p>
      `;

      container.appendChild(card);
    });
  });
