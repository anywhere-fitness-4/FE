import axios from "axios";
import axiosWithAuth from "../../Auth/AxiosWithAuth";

export const FETCHING_COURSES = "FETCHING_COURSES";
export const COURSE_FETCH_SUCCESS = "COURSE_FETCH_SUCCESS";
export const COURSE_FETCH_ERROR = "COURSE_FETCH_ERROR";

export const TOGGLE_EDIT = "TOGGLE_EDIT";

export const POST_NEW_COURSE_START = "POST_NEW_COURSE_START";
export const POST_NEW_COURSE_SUCCESS = "POST_NEW_COURSE_SUCCESS";
export const POST_NEW_COURSE_FAILURE = "POST_NEW_COURSE_FAILURE";

export const UPDATE_COURSE_START = "UPDATE_COURSE_START";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const UPDATE_COURSE_FAILURE = "UPDATE_COURSE_FAILURE";

export const DELETE_COURSE_START = "DELETE_COURSE_START";
export const DELETE_COURSE_SUCCESS = "DELETE_COURSE_SUCCESS";
export const DELETE_COURSE_FAILURE = "DELETE_COURSE_FAILURE";

export const fetchClasses = () => {
  // establishes 'promise' as the name of the axios call to the server requesting the course data at that address.
  return dispatch => {
    // calls the dispatch function in a return statement
    dispatch({ type: FETCHING_COURSES }); // dispatches the FETCHING_COURSES action - "initiates the state of fetching courses"
    axiosWithAuth()
      .get(`https://anywhere-fitness04.herokuapp.com/api/classes`) // then makes the axios call to the server

      .then(response => {
        // with the axios call, takes the response
        console.log(response.data); // logs the response
        dispatch({ type: COURSE_FETCH_SUCCESS, payload: response.data }); // calls a second dispatch action - "completes the fetch, and makes the data fetched the value of the payload in the action object"
      })
      .catch(err => {
        // catches the error if it occurs
        console.log(err.response); // logs the error
        dispatch({ type: COURSE_FETCH_ERROR }); // dispatches a third action, which can post a note to the screen if the app is in this 'FETCH_ERROR' state
      });
  };
};

export const toggleEdit = () => {
  return dispatch => {
    // calls the dispatch function in a return statement
    dispatch({
      type: TOGGLE_EDIT
    });
  };
};

export const postClass = course => dispatch => {
  // names the function postCourse, passes the function a 'course' parameter and the 'dispatch' functionality
  dispatch({ type: POST_NEW_COURSE_START }); // dispatches "POST_NEW_COURSE_START" action - "initiates the addition of a course, sets the state of the app to 'now adding'"
  // performs an axios call
  axiosWithAuth()
    .post("https://anywhere-fitness04.herokuapp.com/api/classes/", course) // request to post the 'course' passed to the function to the server address. Post, (where you're sending, what you're sending)
    .then(response => {
      // response should be a success message from the server if successful
      console.log(response.data); // logs the success message
      dispatch({ type: POST_NEW_COURSE_SUCCESS }); // dispatches the action "POST_SUCCESS" which ends the state of 'now adding' and begins the state of 'added'.
    })
    .catch(err => {
      // catches the error if one occurs
      console.log(err); // logs the error message
      dispatch({ type: POST_NEW_COURSE_FAILURE }); // dispatches an action which changes the state to "there's an error" and this state can be used to post an error message to the UI
    });
};

export const updateClass = id => dispatch => {
  // names the function updateCourse, passes it an "id" parameter and the 'dispatch' functionality. The id contains the whole updated object of the id.
  dispatch({ type: UPDATE_COURSE_START }); // dispatches the initiation of the state of 'now updating'
  axiosWithAuth() // makse a call to the server
    .put(`https://anywhere-fitness04.herokuapp.com/api/classes/${id}`, id) // requests to put a change to the server address matching the 'id' passed in. Put, (where are you changing it, what are you changing). At this address, the entire object matching the 'id' will be replaced by the new 'id' object
    .then(response => {
      // the server update should respond with a success message containing the updated data.
      console.log(response.data); // logs the success message
      dispatch({ type: UPDATE_COURSE_SUCCESS, payload: response.data }); // dispatches the action "UPDATE_SUCCESS" which changes the state from 'now updating' to 'updated'. Sets the value of the payload in the action's object to the updated data.
    })
    .catch(err => {
      // catches the error if it occurs
      console.log(err); // logs the error
      dispatch({ type: UPDATE_COURSE_FAILURE }); // dispatches the action to change the state of the app to 'there's an error' which can be used to display an error message in the UI
    });
};

export const deleteClass = id => dispatch => {
  // names the function deleteCourse, passes it an 'id' parameter, as well as the 'dispatch' functionality.
  console.log(id); // logs the 'id' object
  dispatch({ type: DELETE_COURSE_START }); // dispatches the action which sets the state of the app to 'now deleting'
  axiosWithAuth() // makes a call to the server
    .delete(`https://anywhere-fitness04.herokuapp.com/api/classes/${id}`) // requests a deletion of the 'id' from the server at the server address which matches the 'id'. Delete, (which  item do you want to delete)
    .then(response => {
      // the response of the request should contain a success message with the data deleted
      console.log(response.data); // logs the response data
      dispatch({ type: DELETE_COURSE_SUCCESS, payload: response.data }); // dispatches the action which sets the state of the app to 'delete complete', previously 'now deleting'. Sets the payload key of the dispatch object to the value of the response data.
    })
    .catch(err => {
      // catches the error if it occurs
      console.log(err); // logs the error message
      dispatch({ type: DELETE_COURSE_FAILURE }); // dispatches the action which set the state of the app to 'there's an error'. This state can be used to display an error message.
    });
};
