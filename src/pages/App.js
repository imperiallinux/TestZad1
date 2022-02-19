import {useState} from 'react';

import '../style/app.css';

import Card from '../components/Card';
import InputCard from '../components/InputCard';


function App() {
  const [list, setList] = useState([]);

  const removeCard = (e, item) => {
    e.preventDefault();

    //Uklanjamo item iz niza preko funkcije filter
    setList(list.filter((i) => i !== item));
  };

  const handleSubmit = (values) => {
    setList((prev) => [...prev, values]);
  };

  return (
    <div className="App">
      <InputCard handleSubmit={handleSubmit} />
      {list?.map((item) => (
        <Card
          key={item.firstName + item.lastName + item.city}
          {...item}
          onClick={(e) => removeCard(e, item)}
        />
      ))}
    </div>
  );
  
}

export default App;
