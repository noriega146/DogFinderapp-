// scripts/app.js
import { fetchBreeds, fetchBreedImages } from "./api.js";
import {
  displayBreeds,
  displayBreedImages,
  displayLoading,
  displayError,
} from "./ui.js";

document.getElementById("searchButton").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  displayLoading(true);
  try {
    const breeds = await fetchBreeds();
    const filteredBreeds = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(query),
    );
    displayBreeds(filteredBreeds);
  } catch (error) {
    displayError(error);
  } finally {
    displayLoading(false);
  }
});

document.addEventListener("breedSelected", async (event) => {
  const breedId = event.detail;
  displayLoading(true);
  try {
    const images = await fetchBreedImages(breedId);
    displayBreedImages(images);
  } catch (error) {
    displayError(error);
  } finally {
    displayLoading(false);
  }
});
