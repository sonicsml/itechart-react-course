import React from 'react';
// import EditCard from './EditCard';
import './CardItem.css';
import Card from '@mui/material/Card';


const CardItem = (props)  => {
	// const [title, setTitle] = useState(props.title);
	// const clickHandler = () => {
	//   setTitle('Updated!');
	//   console.log(title);
	// }
	return (
		<Card 
			variant="outlined" 
			className="card-item"
		>
			<h2 className="card-item__named h2">
					{props.title}
			</h2>
			<div className="card-item__description">
					{props.description}
			</div>
			{/* <EditCard /> */}
			{/* <button className="card-item__button button" type="submit" onClick={clickHandler}>Edit</button> */}
		</Card>
	);
}

export default CardItem;