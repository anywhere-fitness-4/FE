import React, { useState } from "react";
import { connect } from "react-redux";
import {
  fetchClasses,
  updateClass,
  postClass,
  deleteClass,
  toggleEdit
} from "../Fitness/classAction";

const UpdateForm = props => {
  const [course, setCourse] = useState({
    id: props.classes.id,
    name: props.classes.name,
    type: props.classes.type,
    class_date: props.classes.class_date,
    start_time: props.classes.start_time,
    duration: props.classes.duration,
    intensity: props.classes.intensity,
    location: props.classes.location,
    number_of_attendees: props.classes.number_of_attendees,
    max_attendees: props.classes.max_attendees,
    editing: false
  });

  const handleChange = e =>
    setCourse({ ...course, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    props.updateClass(course);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>EDIT THIS CLASS</legend>

      <label>
        Course Name:
        <input onChange={handleChange} value={course.name} />
      </label>
      <label>
        Date:
        <input onChange={handleChange} value={course.class_date} />
      </label>
      <label>
        Type:
        <input onChange={handleChange} value={course.type} />
      </label>
      <label>
        Start Time:
        <input onChange={handleChange} value={course.start_time} />
      </label>
      <label>
        Duration:
        <input onChange={handleChange} value={course.duration} />
      </label>
      <label>
        Intensity:
        <input onChange={handleChange} value={course.intensity} />
      </label>
      <label>
        Location:
        <input onChange={handleChange} value={course.location} />
      </label>
      <label>
        Current Attendees:
        <input onChange={handleChange} value={course.number_of_attendees} />
      </label>
      <label>
        Maximum Attendees:
        <input onChange={handleChange} value={course.max_attendees} />
      </label>

      <button type="submit">Update Class</button>

      <button onClick={toggleEdit}>Cancel</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    classes: [...state.classes],
    id: state.id,
    name: state.name,
    type: state.type,
    class_date: state.class_date,
    start_time: state.start_time,
    duration: state.duration,
    intensity: state.intensity,
    location: state.location,
    number_of_attendees: state.number_of_attendees,
    max_attendees: state.max_attendees
  };
};

const mapDispatchToProps = { postClass, updateClass };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
