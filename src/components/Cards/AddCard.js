import React, { useState } from "react";
import "./AddCard.css";
import AddCardModal from "./AddCardModal";
import Fab from "@mui/material/Fab";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';



const AddCard = (props) => {
    const [isEditing, setIsEditing] = useState(false);
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
                    <Fab 
                        color="primary" 
                        aria-label="add"
                        onClick={startEditingHandler}
                    >
                        <AddIcon />
                    </Fab>
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