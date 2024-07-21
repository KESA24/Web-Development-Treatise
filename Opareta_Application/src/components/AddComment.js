import { useState } from "react";

import Button from "./Button";


function AddComment() {
    const [comment, setComment] = useState(null);
    const [showComment, setShowComment] = useState(false);

    function getComment(comment) {
        setComment(comment.target.value)
        setShowComment(false);
        console.warn(comment.target.value)
        
    }

    return (
        <div className= "form-control" style={{"width": "500px", "marginLeft": "31%"}}>
            {
                showComment ? <h1>{comment}</h1> : null
            }
            <label> Add Comment</label>
            <input type="text" onChange={getComment}/>
            <Button 
            color={"green"} 
            text={"Submit"} 
            onClick={()=> setShowComment(true)} />
        </div>
    )
}

export default AddComment;
