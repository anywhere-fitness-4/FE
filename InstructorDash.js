import React, { Component } from "react";
import { connect } from "react-redux";
import ClassForm from "./classForm";
import {
  fetchClasses,
  updateClass,
  postClass,
  deleteClass
} from "./classAction";
import ClassCard from "./ClassCard";
import UpdateForm from "./updateForm";

class InstructorDash extends Component {
  componentDidMount() {
    this.props.fetchClasses();
  }

  render() {
    return (
      <div className="App">
        <div className="welcome">
          <h1>Welcome, Instructor!</h1>
          <label className="instructormsg">
            Add and manage your offered courses below
          </label>
        </div>
        <div className="row">
          <ClassForm />
          {this.props.fetchingClasses ? (
            <h3>Hold tight, we're fetching courses...</h3>
          ) : (
            <div>
              {this.props.isEditing ? (
                <div>
                  <h2>EDIT Course</h2>
                  <UpdateForm updateClass={updateClass} />
                </div>
              ) : (
                <div className="wrap">
                  {this.props.classes.map(course => {
                    return (
                      <ClassCard
                        id={course.id}
                        key={course.id}
                        name={course.name}
                        start_time={course.start_time}
                        type={course.type}
                        date={course.class_date}
                        duration={course.duration}
                        intensity={course.intensity}
                        location={course.location}
                        number_of_attendees={course.number_of_attendees}
                        max_attendees={course.max_attendees}
                        edit={course.toggleEdit}
                        updateClass={course.updateClass}
                        delete={course.deleteClass}
                      />
                    );
                  })}
                </div>
              )}
              {/* )} */}
              {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classes,
    error: state.error,
    fetchingCourses: state.fetchingCourses
  };
};

export default connect(mapStateToProps, {
  fetchClasses,
  updateClass,
  postClass,
  deleteClass
})(InstructorDash);
