import React from 'react';
// import EditCard from './EditCard';
import './Card.css';

const Card = (props)  => {
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //   setTitle('Updated!');
    //   console.log(title);
    // }
    return (
        <div className="card-item">
            <h2 className="card-item__named h2">
                {props.title}
            </h2>
            <div className="card-item__description">
                {props.description}
            </div>
            {/* <EditCard /> */}
            {/* <button className="card-item__button button" type="submit" onClick={clickHandler}>Edit</button> */}
        </div>
    );
}

export default Card;