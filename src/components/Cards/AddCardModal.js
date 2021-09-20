import React, { useState } from 'react';
import './AddCardModal.css';


const AddCardModal = (props) => {
    const [ enteredTitle, setEnteredTitle ] = useState('');
    const [ enteredDescription, setEnteredDescription ] = useState('');
    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: '',
    //     enteredDescription: ''
    // });
    
    const titleChangeHandler = (event) => {
        setEnteredTitle (event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value, 
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    const descriptionChangeHandler = (event) => {
        setEnteredDescription (event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDescription: event.target.value, 
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();

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
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="addcard__description flex">
                    <label>Description</label>
                    <textarea rows="10" cols="45" value={enteredDescription} name="text" onChange={descriptionChangeHandler}></textarea>
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