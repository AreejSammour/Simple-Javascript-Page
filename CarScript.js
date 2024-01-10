import cars from "./Data/Cars.js";

const container = document.getElementById("productgallery");

cars.forEach(car => {
  console.log(car.type);
  const productCard = document.createElement("div");
  productCard.classList.add("productcard"); // Set the class to match existing product cards

  productCard.innerHTML = `
    <img src="${car.imageUrl}" alt="${car.type}">
    <div class="information">
      <div class="name">${car.type}</div>
      <div class="description">${car.year}</div>
      <a class="ctabutton" href="#">${car.price}</a>
    </div>
  `;

  // Append the product card to the container
  container.appendChild(productCard);
});