import './AllCards.css';
import Card from './Card';

function AllCards() {
  const infocards = [
      {
          id: 1,
          title: 'Card 1',
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
      },
      {
        id: 2,
        title: 'Card 2',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 3,
        title: 'Card 1',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
  ]

  return (
        <div className="flex container-cards">
            <Card 
                title={infocards[0].title}
                description={infocards[0].description}
            ></Card>
            <Card 
                title={infocards[1].title}
                description={infocards[1].description}
            ></Card>
            <Card 
                title={infocards[2].title}
                description={infocards[2].description}
            ></Card>
        </div>
  );
}

export default AllCards;