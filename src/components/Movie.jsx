function Movie({
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster,}) {
  return (
    <div className='card movie' id={id}>
      <div className='card-image waves-effect waves-block waves-light'>
        <img
          className='activator'
          src={poster}
          alt='#'
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>
          {year} <span>{type}</span>
        </p>
      </div>
    </div>
  )
}

export {Movie}