import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {

  return (
    <div className="App">
      <Nav />
      <Banner id="Home" fectUrl={requests.fetchTrending} />
      <Row id="trending" title="Netflix Original" fectUrl={requests.fetchTrending} Islargerow />
      <Row id="toprated" title="Top Rated Movies" fectUrl={requests.fetchTopRated} />
      <Row id="popular" title="Popular Now" fectUrl={requests.fetchPopular} />
      <Row id="tvshow" title="TV Shows" fectUrl={requests.fetchTVShows} />
      <Row id="comedy" title="Comedy Movies" fectUrl={requests.fetchComedy} />
      <Row id="action" title="Action Movies" fectUrl={requests.fetchAction} />
      <Row id="documentaries" title="Documentaries" fectUrl={requests.fetchDocumentaries} />
      <Row id="horror" title="Horror Movies" fectUrl={requests.fetchHorror} />
    </div>
  );
}

export default App;
