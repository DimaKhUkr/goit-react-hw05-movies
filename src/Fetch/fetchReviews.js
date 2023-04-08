import { toast } from 'react-toastify';

const API_KEY = 'edf9b0cc9ad38910cb90dc25085b494b';

export async function fetchReviews(movieId) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  try {
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}/reviews?${searchParams}`
    );
    if (!response.ok) {
      throw new Error('Какая то беда 404');
    }

    const filmsR = await response.json();

    if (!filmsR.total_results > 0) {
      throw new Error('NO COMMENTS');
    }
    return filmsR;
  } catch (error) {
    toast.error(error.message, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }
}
