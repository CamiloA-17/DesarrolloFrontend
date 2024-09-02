import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul className='navbar-list'>
                <li className="navbar-item"><p>Inicio</p></li>
                <li className="navbar-item"><p>Acerca de</p></li>
                <li className="navbar-item"><p>Opciones</p></li>
            </ul>
        </nav>
    )
}
