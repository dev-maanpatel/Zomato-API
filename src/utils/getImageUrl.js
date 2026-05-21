const API_BASE_URL =
  "https://zomato-clone-api-5e4m.onrender.com";

export default function getImageUrl(
  imagePath
) {
  if (!imagePath) {
    return "/food.png";
  }

  if (
    imagePath.startsWith(
      "blob:"
    )
  ) {
    return imagePath;
  }

  if (
    imagePath.startsWith(
      "http"
    )
  ) {
    return imagePath;
  }

  return `${API_BASE_URL}${imagePath}`;
}