import React,{useState} from 'react'
import './Navigator.css'


const Navigator = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);  
  }

  return (
    <div className='navigator'>
      <h2> <span>K</span>.Luñoza</h2>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><a href="">About</a></li>
            <li><a href="">Expertise</a></li> 
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <i class="bx bx-menu-alt-right menu-icon" onClick={toggleMenu}undefined ></i>
    </div>
  )
}

export default Navigator
