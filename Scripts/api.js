// scripts/api.js

const API_KEY =
  "live_6oZOhMDHkB4bv9rLZ6zIUqYfFnuqGePWgvYcUpDSBDY8KGkvG2GeICG3EOOIBRBB";

export async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching breeds:", error);
    throw error;
  }
}

export async function fetchBreedImages(breedId) {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?breed_id=${breedId}&limit=5`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      },
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching breed images:", error);
    throw error;
  }
}
