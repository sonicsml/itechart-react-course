import React, { useState } from 'react';
import './AddCardModal.css';


const AddCardModal = (props) => {
    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredDescription, setEnteredDescription ] = useState('');
    const [ isValid, setIsValid ] = useState ('');
    
    const titleChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredTitle (event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredDescription (event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if ((enteredDescription.trim().length === 0) || (enteredTitle.trim().length === 0) ) {
            setIsValid(false);
            return;
        }
        const addFormDate = {
            title: enteredTitle,
            description: enteredDescription,
        };
        props.onSaveCardData(addFormDate);

        setEnteredTitle('');
        setEnteredDescription('');
    };

    return (
        <div className="modal addcard__modal flex">
            <div className="modal__title">Add new card</div>
            <form onSubmit={submitHandler}>
                <div className="addcard__title flex">
                    <label>Title</label>
                    <input style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'white'}} 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/>
                </div>
                <div className="addcard__description flex">
                    <label>Description</label>
                    <textarea style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'white'}}
                        rows="10" 
                        cols="45" 
                        value={enteredDescription} 
                        name="text" 
                        onChange={descriptionChangeHandler}>
                    </textarea>
                </div>
                <div className="button-container flex">
                    <button type="submit" className="button addcard__button addcard__button-add">Add</button>
                    <button type="button" onClick={props.onCancel} className="button addcard__button addcard__button-cancel">Сancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddCardModal;