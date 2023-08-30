const API_KEY = "ed74662a6a5f469f3bc591501039b3ac";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTVShows: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

  fetchComedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAction: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHorror: `discover/movie?api_key=${API_KEY}&with_genres=27`
};

export default requests;
