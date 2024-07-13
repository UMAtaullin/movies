import cls from './Header.module.css'

function Header() {
  return (
    <nav className={cls.nav}>
      <div>
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