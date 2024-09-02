import '../styles/Header.css';

export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li className="navbar-item"><p>Inicio</p></li>
                    <li className="navbar-item"><p>Acerca de</p></li>
                    <li className="navbar-item"><p>Opciones</p></li>
                </ul>
            </nav>
        </header>
    )
}
