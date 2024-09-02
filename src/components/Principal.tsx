import '../styles/Principal.css';
import Table from './Table';

export default function Principal() {
    return (
        <main className='main'>
            <aside className='aside'>
                <section className='aside-title'>
                    <h1>Noticias importantes</h1>
                </section>
                <section className='aside-content'>
                    <ul className='aside-list'>
                        <li>
                            <h2>¡Amazonas en peligro!</h2>
                            <p>Cuidado de los bosques</p>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeFG4jM6i70EyEY9RYkCGOikZ7GV2vc7vug&s' alt='Medio ambiente' />
                        </li>
                        <li>
                            <h2>Victoria de la selección</h2>
                            <p>Gran remontada en el partido de hoy</p>
                            <img src='https://estaticos.elcolombiano.com/binrepository/848x565/69c0/780d565/none/11101/TTCD/whatsapp-image-2024-07-06-at-5-25-29-pm_45522289_20240706184139.jpg' alt='Selección Colombia' />
                        </li>
                        <li>
                            <h2>Novedades en el iPhone 16</h2>
                            <p>Apple en su nuevo evento presenta novedades de su próximo dispositivo</p>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPgU4E51NwLFO6XBI8r1dFUo_cbfKwSMI1Q&s' alt='iPhone 16' />
                        </li>
                    </ul>
                </section>
            </aside>
            <section className='principal'>
                <section className='principal-title'>
                    <h1>Todas las noticias</h1>
                </section>
                <section className='principal-content'>
                    <Table />
                </section>
            </section>
        </main>
    )
}
