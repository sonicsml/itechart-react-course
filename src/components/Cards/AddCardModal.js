import React, { useState } from "react";
import "./AddCardModal.css";

const AddCardModal = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDescription, setEnteredDescription] = useState("");
	const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDescValid, setIsDescValid] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isDescTouched, setIsDescTouched] = useState(false); 

	const titleChangeHandler = (event) => {   
		if (event.target.value.trim().length > 0) {
			setIsTitleValid (true);
		} else {
			setIsTitleValid (false);
		}
		setIsTitleTouched(true);
    setEnteredTitle(event.target.value);
	};

	const descriptionChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsDescValid(true);
    } else {
      setIsDescValid(false);
    }
    setIsDescTouched(true);
    setEnteredDescription(event.target.value);
  };
	
	const submitHandler = (event) => {
		event.preventDefault();
		
		const addFormDate = {
			title: enteredTitle,
			description: enteredDescription,
		};
		props.onSaveCardData(addFormDate);
		setEnteredTitle("");
    setEnteredDescription("");
  };

  return (
    <div className="modal addcard__modal flex">
      <div className="modal__title">Add new card</div>
      <form onSubmit={submitHandler}>
        <div className="addcard__title flex">
          <label>Title</label>
          <input
            style={{
              borderColor: !isTitleValid && isTitleTouched ? "red" : "black",
              background: !isTitleValid && isTitleTouched ? "salmon" : "white",
            }}
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="addcard__description flex">
          <label>Description</label>
          <textarea
            style={{
              borderColor: !isDescValid && isDescTouched ? "red" : "black",
              background: !isDescValid && isDescTouched ? "salmon" : "white",
            }}
            rows="10"
            cols="45"
            value={enteredDescription}
            name="text"
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="button-container flex">
          <button
            type="submit"
            className="button addcard__button addcard__button-add"
            disabled={!isTitleValid || !isDescValid}
          >
            Add
          </button>
          <button
            type="button"
            onClick={props.onCancel}
            className="button addcard__button addcard__button-cancel"
          >
            Сancel
          </button>
        </div>
			</form>
    </div>
  );
};

export default AddCardModal;
