import './AllCards.css';
import Card from './CardItem';

const AllCards = (props) => {
  return (
    <div>
        <div className="flex container-cards">
          {props.items.map((card) => (
            <Card 
              key={card.id}
              title={card.title} 
              description={card.description}
            >
            </Card>
          ))}
        
        </div>
    </div>
  );
}

export default AllCards;