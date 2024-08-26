import '../styles/Card.css';

interface CardProps {
    title: string;
    description: string;
    image: string;    
}


export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image}/>
    </div>
  )
}
