import React, { useState } from "react";
import "./AddCardModal.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import Modal from "@mui/material/Modal";



const AddCardModal = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDescValid, setIsDescValid] = useState(false);
  // const [isTitleTouched, setIsTitleTouched] = useState(false);
  // const [isDescTouched, setIsDescTouched] = useState(false);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
    }
    // setIsTitleTouched(true);
    setEnteredTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsDescValid(true);
    } else {
      setIsDescValid(false);
    }
    // setIsDescTouched(true);
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
       <Typography id="modal-modal-title" variant="h5" component="h2">
        Add New Card
      </Typography>
      <form onSubmit={submitHandler}>
        <div className="addcard__title flex">
          <TextField
            label="Title"
            variant="outlined" 
            placeholder="Title" 
            onChange={titleChangeHandler}
            value={enteredTitle}
            defaultValue="Normal"
          />        
        </div>
        <div className="addcard__description flex">
          <TextField
            label="Description"
            variant="outlined" 
            placeholder="Description" 
            value={enteredDescription}
            onChange={descriptionChangeHandler}
            defaultValue="Normal"
            multiline
            rows={5}
            rowsmax={30}
          />
        </div>
        <div className="button-container flex">
          <Button
            variant="contained" 
            color="success"
            type="submit"
            className="button addcard__button addcard__button-add"
            disabled={!isTitleValid || !isDescValid}
          >
            Add
          </Button>
          <Button 
            variant="outlined" 
            color="error"
            type="button"
            onClick={props.onCancel}
            className="button addcard__button addcard__button-cancel"
          >
            Сancel
          </Button>
        </div>
				</form>
    </div>
  );
};

export default AddCardModal;
