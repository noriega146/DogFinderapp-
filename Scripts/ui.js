// scripts/ui.js
export function displayBreeds(breeds) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  breeds.forEach((breed) => {
    const breedElement = document.createElement("div");
    breedElement.classList.add("breed");
    breedElement.textContent = breed.name;
    breedElement.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("breedSelected", { detail: breed.id }),
      );
    });
    resultsDiv.appendChild(breedElement);
  });
}

export function displayBreedImages(images) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = "Dog image";
    resultsDiv.appendChild(imgElement);
  });
}

export function displayLoading(show) {
  const loadingDiv = document.getElementById("loading");
  loadingDiv.style.display = show ? "block" : "none";
}

export function displayError(error) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<div class="error">${error.message}</div>`;
}
