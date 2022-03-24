import style from './Header.module.scss'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive = () => {
        setIsActive(isActive ? false : true)
    }

    return (
        <header className={style.header}>
            <div className={style.content}>
                <div className={style.anchor}><a>AlexandrSvitelskyi</a></div>
                <div className={style.logo}>
                    <Link to="/">
                        <img src={logo} alt="palm" />
                    </Link>
                </div>
                <nav className={style.navigation}>
                    <ul className={`${style.items} ${isActive ? style.active : ''}`}>
                        <li>
                            <Link to="/production" className={style.item}>Video production</Link>
                        </li>
                        <li>
                            <Link to="/" className={style.item}>Editing</Link>
                        </li>
                        <li>
                            <Link to="/" className={style.item}>Contact</Link>
                        </li>
                    </ul>
                    <div onClick={() => toggleIsActive()} className={`${style.button} ${isActive ? style.active : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}