import './Card.css';

function Card(props) {
    return (
            <div className="card-item">
                <h2 className="card-item__named h2">
                {props.title}
                </h2>
                <div className="card-item__description">
                {props.description}
                </div>
            </div>
    );
}

export default Card;