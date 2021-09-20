import React, { useState } from 'react';
import './AddCard.css';
import AddCardModal from './AddCardModal';

const AddCard = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    // const clickHandler = () => {
    //     let title = "Update!";
    //     console.log(title);
    // }
    const saveCardDataHandler = (enteredAddFormData) => {
        const cardData = {
            ...enteredAddFormData,
            id: Math.random().toString()
        };
        props.onAddCard(cardData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
            <div className="flex center addcard-newcard">
                {!isEditing && (
                    <button className="button addcard__button" onClick={startEditingHandler}>Add New Card</button>
                )}
                {isEditing && (
                    <AddCardModal 
                        onSaveCardData={saveCardDataHandler}
                        onCancel={stopEditingHandler}
                    />
                )}
            </div>
        );
    }
    
    export default AddCard;