import {useState } from "react";
import getMovies  from "./api/MovieSource";
import CardList from "./components/CardList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";



function App() {

  const [state, setState] = useState({
    results: {}
  });

  const onSearch = async (text: string) => {
    const resultsdata = await getMovies(text)
    // console.log("results => ", resultsdata)
    

    setState((prevState) => {
      return { ...prevState, results: resultsdata }
    })
  };

  // console.log("results => ", state.results)



  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch}/>
      <CardList results={state.results} />
    </div>
  )
}

export default App
