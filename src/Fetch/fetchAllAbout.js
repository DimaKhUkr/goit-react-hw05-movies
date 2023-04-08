import { toast } from 'react-toastify';

const API_KEY = 'edf9b0cc9ad38910cb90dc25085b494b';

export async function fetchAllAbout(movieId) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  try {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}?${searchParams}`
    );
    if (!response.ok) {
      throw new Error('Какая то беда 404');
    }

    const filmsAllInfo = await response.json();
    return filmsAllInfo;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }
}
