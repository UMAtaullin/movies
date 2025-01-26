import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
  }
  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
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
                onClick={() => this.props.searchMovies(this.state.search)}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export {Search}
