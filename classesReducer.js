import {
  FETCHING_COURSES,
  COURSE_FETCH_SUCCESS,
  COURSE_FETCH_ERROR,
  POST_NEW_COURSE_START,
  POST_NEW_COURSE_SUCCESS,
  POST_NEW_COURSE_FAILURE,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAILURE,
  TOGGLE_EDIT,
  DELETE_COURSE_START,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE
} from "../Fitness/classAction";

const initialState = {
  classes: [],
  isFetching: false,
  errors: ""
};

export const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COURSES:
      return {
        ...state,
        isFetching: true
      };

    // ========== FETCH ========= //

    case COURSE_FETCH_SUCCESS:
      return {
        ...state,
        classes: [...state.classes, ...action.payload],
        isFetching: false
      };

    case COURSE_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: "Error fetching Classes"
      };

    // ========== POST ========= //

    case POST_NEW_COURSE_START:
      return {
        ...state,
        isFetching: true,
        errors: null,
        classes: []
      };

    case POST_NEW_COURSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: null,
        classes: [...state.classes, ...action.payload]
      };
    case POST_NEW_COURSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
        classes: []
      };

    // ========== POST ========= //
    case TOGGLE_EDIT:
      return {
        ...state,
        isEditing: true,
        course: {} // shouldn't this be referring to the single course object being updated, or no? I think no, because all these state changes must first refer to the initial state, which is set up as 'courses: []'. It might actually be the case that the update of courses needs to be put in a separate reducer with a separate initial state? Not sure.
      };
    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        isEditing: false,
        course: { ...state.course, ...action.payload }
      };
    case UPDATE_COURSE_FAILURE:
      return {
        ...state,
        isEditing: false,
        errors: action.payload,
        course: {}
      };

    // ========== DELETE ========= //
    case DELETE_COURSE_START:
      return {
        ...state,
        isFetching: true,
        classes: []
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classes: [...state.classes, action.payload]
      };
    case DELETE_COURSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.payload
      };

    // ========== DEFAULT ========= //
    default:
      return state;
  }
};
