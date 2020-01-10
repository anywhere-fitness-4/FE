import { connect } from "react-redux";
import React, { useState } from "react";
import {
  fetchClasses,
  updateClass,
  postClass,
  deleteClass,
  toggleEdit
} from "../Fitness/classAction";

const ClassCard = props => {
  console.log(props);

  // export const toggleEdit = () => {
  //   // todo THIS ACTION MIGHT ACTUALLY NEED TO BE MOVED TOA  REGULAR FUNCTION AND CALLED IN THE COURSE CARD, STARTING THE EDITING STATE OF A COURSE
  //   // names the function toggleEdit, no parameter needs to be passed
  //   return dispatch => {
  //     // calls the dispatch function in a return statement
  //     dispatch({
  //       type: TOGGLE_EDIT,
  //       editing: !editing // dispatches the action which toggles the state of 'editing' and 'not editing' sets the state of the element using the toggleEdit function to whatever is the opposite of its current state.
  //     });
  //   };
  // };

  const handleEdit = id => {
    props.toggleEdit(props.id);
  };

  const handleDelete = id => {
    props.deleteClass(props.id);
  };
  // calls the function handleDelete, passes it the 'id' parameter
  // calls the deleteCourse function via props and passes that function the 'id' passed to the handleDelete function, which in turn requests a deletion from the server. This works, the only thing is that it requires a refresh to show the deletion.

  return (
    // Returns a card containing the data from the server, returns this card for each object containing this data, the list of cards will iterate through the list of data objects in the server
    <div>
      <div className="course">
        <div className="cardrow">
          <h1> {props.name}</h1>
          <div className="column">
            <h5>{props.start_time}</h5>
            <p>{props.duration}hr</p>
          </div>
        </div>

        <h2>{props.type}</h2>
        <p>{props.intensity}</p>

        <p>{props.class_date}</p>
        <h2>Where</h2>
        <p>{props.location}</p>
        <h2>Filled Spots</h2>
        <p>{props.number_of_attendees}</p>
        <h2>Spots Available</h2>
        <p>{props.max_attendees}</p>

        <button onClick={handleDelete}>Delete This Class</button>
        <button onClick={handleEdit}>Edit</button>
        {/* I suppose, as long as this button is contained in the container of the data object is calls from the server, it can refer to the 'id' of that object when passing the handleDelete function an 'id' parameter */}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // this function mapStateToProps makes sure the state of the Card matches the state of the App properties, includeing the array of data objects pulled from the server (courses), the error state, and the fetching state. I wonder why it wouldn't need the deleting state then? Perhaps because there's no message that needs to be sent to the UI during the state of deleting or during the state of updating. If we did want to include that message, it might be that we also map those state to the props in this component.
  return {
    classes: state.classes,
    error: state.error,
    fetchingClasses: state.fetchingClasses
  };
};

export default connect(mapStateToProps, {
  fetchClasses,
  updateClass,
  postClass,
  deleteClass,
  toggleEdit
})(ClassCard);
