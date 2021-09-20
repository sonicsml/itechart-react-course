import './AllCards.css';
import Card from './Card';

function AllCards(props) {

  return (
        <div className="flex container-cards">
            <Card 
                title={props.infocards[0].title}
                description={infocards[0].description}
            ></Card>
            <Card 
                title={props.infocards[1].title}
                description={infocards[1].description}
            ></Card>
            <Card 
                title={props.infocards[2].title}
                description={infocards[2].description}
            ></Card>
        </div>
  );
}

export default AllCards;