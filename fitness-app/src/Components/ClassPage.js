import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import CLasses from "./Classes";
import ClassList from "./ClassList";

const ClassPage = props => {
	const [ claxList, setClaxList ] = useState([]);

  const logout = e => {
    localStorage.removeItem('token');
		props.history.push('/');
	};
	useEffect(() => {
    axiosWithAuth()
    .get('https://www.balldontlie.io/api/v1/teams')
    .then(res => {
      setClaxList(res.data);
    })
    .catch(err => console.log(`No claxes still`, err));
}, []);

  return (
    <div className="ClassPage">
      <div className="ClassPage--claxes">
        <claxList claxes={claxList} updateClaxes={setClaxList} />
        <Classes claxes={claxList} />
      </div>
    </div>
    );
};

export default ClassPage;