import { connect } from "react-redux";
import React, { useState } from "react";
import { postClass, updateClass } from "../Fitness/classAction";

function ClassForm(props) {
  console.log(props);
  const [classes, setClasses] = useState([
    // {
    //   id: props.classes[props.classes.length - 1],
    //   name: "",
    //   type: "",
    //   class_date: "",
    //   start_time: "",
    //   duration: "",
    //   intensity: "",
    //   location: "",
    //   number_of_attendees: "",
    //   max_attendees: "",
    //   editing: false
    // }
  ]);

  const handleChange = e =>
    setClasses({ ...classes, [e.target.name]: e.target.value });
  // this function handleChange says that when the state of the input field (which calls the function) changes, set the courses to whatever the course were before (...courses), and then at the location (target) the event (e) takes place, refer to that location's name (event.target.name), set that target to the value placed on the target (event.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    props.postClass(classes);
  };
  // when the CourseForm is submitted, it will call the handleSubmit function. The handleSubmit function will call the postCourses function on the state properties, making a request to post a new set of courses to the server.

  return (
    <div className="add-course">
      <form onSubmit={handleSubmit}>
        <h1>Let's get fit!</h1>
        <h2>Add information for new courses below</h2>
        <label>Title</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={classes.name}
        />
        <label>Date</label>
        <input
          type="text"
          name="class_date"
          onChange={handleChange}
          value={classes.class_date}
        />

        <label>Class Type</label>
        <input
          type="text"
          name="type"
          onChange={handleChange}
          value={classes.type}
        />
        <label>Start Time</label>
        <input
          type="text"
          name="start_time"
          onChange={handleChange}
          value={classes.start_time}
        />
        <label>Class Duration</label>
        <input
          type="text"
          name="duration"
          onChange={handleChange}
          value={classes.duration}
        />
        <label>Class Intensity</label>
        <input
          type="text"
          name="intensity"
          onChange={handleChange}
          value={classes.intensity}
        />
        <label>Class Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={classes.location}
        />
        <label>Current Attendees</label>
        <input
          type="text"
          name="number_of_attendees"
          onChange={handleChange}
          value={classes.number_of_attendees}
        />
        <label>Maximum Spaces Available</label>
        <input
          type="text"
          name="max_attendees"
          onChange={handleChange}
          value={classes.max_attendees}
        />
        <button type="submit">Add This Class</button>
      </form>
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm);
