function Header() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='https//google.com' className='brand-logo'>
          React Movies
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https//google.com'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export {Header}