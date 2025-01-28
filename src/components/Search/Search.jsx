import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }
  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }
  handleRadioChange = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {this.props.searchMovies(this.state.search, this.state.type)})
  }
  render() {
    return (
      <div className='search-row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s6'>
              <textarea
                placeholder='Search movies...'
                type='search'
                id='icon_prefix2'
                className='materialize-textarea'
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
              <button
                className='btn search-btn'
                onClick={() =>
                  this.props.searchMovies(this.state.search, this.state.type)
                }
              >
                Search
              </button>
              <div className='radio-button'>
                <label>
                  <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='all'
                    onChange={this.handleRadioChange}
                    checked={this.state.type === 'all'}
                  />
                  <span>all</span>
                </label>
                <label>
                  <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='movie'
                    onChange={this.handleRadioChange}
                    checked={this.state.type === 'movie'}
                  />
                  <span>movie</span>
                </label>
                <label>
                  <input
                    className='with-gap'
                    name='type'
                    type='radio'
                    data-type='series'
                    onChange={this.handleRadioChange}
                    checked={this.state.type === 'series'}
                  />
                  <span>series</span>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export {Search}
