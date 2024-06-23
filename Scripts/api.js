export async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
  } catch (error) {
    console.error('Error fetching breeds:', error);
        throw error;
  }
}

export async
