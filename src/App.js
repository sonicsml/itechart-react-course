import AllCards from './components/AllCards';
import Header from './components/Header';
import './App.css';

function App() {
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
    <div>
    <Header sitename="itechart-react-course - React-components" />,
    <AllCards itemts={infocards}></AllCards>
    </div>
  );
}

export default App;