import React from 'react'
import { Movies } from '../Movies'
import { Preloader } from '../Preloader/Preloader'
import { Search } from '../Search/Search'

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=415a0c05&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }
  searchMovies = (movies, type = 'all') => {
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=415a0c05&s=${movies}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }
  render() {
    const { movies, loading } = this.state
    return (
      <main>
        <Search searchMovies={this.searchMovies} />
        {loading ? (
          <Preloader />
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    )
  }
}

export { Main }
