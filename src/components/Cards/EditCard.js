import React, {useState} from 'react';

const EditCard = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <button className="card-item__button button" type="submit" onClick={clickHandler}>Edit</button>
    );
}

export default EditCard;