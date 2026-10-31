import "./Header.css"
import logo from './icons/logo.png'
import search from './icons/search.png'
import user from './icons/user.png'

function Header() {
    return(
        <header>
        <div className='logo'>
          <img src={logo} />
        </div>
        <div className='navigation'>
          <a>Home</a>
          <a>Service</a>
          <a>Agents</a>
          <a>Contact</a>
        </div>
        <div className='header_btns'>
          <div className='search_icon'>
            <img src={search} />
          </div>
          <div className='user_icon'>
            <img src={user} />
          </div>
          <div><button>Sign up</button></div>
        </div>
      </header>
    )
}

export default Header