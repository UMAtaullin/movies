import React from 'react'
import { Movies } from '../Movies'
import { Preloader } from '../Preloader/Preloader'

class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=415a0c05&s=matrix')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }
  render() {
    const {movies} = this.state
    return (
      <main>
        {
          movies.length ? (
            <Movies movies={this.state.movies}/>
          ) : <Preloader/>
        }
      </main>
    )
  }
}

export {Main}