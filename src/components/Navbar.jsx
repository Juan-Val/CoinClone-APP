import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='titulo'>Coinbase</h1>
      <ul className='navbar__options'>
        <li>Prices</li>
        <li>Learn</li>
        <li>Individuals</li>
        <li>Businesses</li>
        <li>Developers</li>
        <li>Company</li>
      </ul>
      <div className='container_buttons'>
        <button className='signIn button'>Sign in</button>
        <button className='getStarted button'>Get started</button>
      </div>
    </nav>
  )
}
