import React, {useState, useEffect} from "react";
import Class from "./Class";
import axios from "axios";

export default function ClassGrid() {
    const [classData, setClassData] = useState([{
        id: '',
        name: '',
        city: '',
        abbreviation: ''
    }])

    useEffect(() => {
        axios.get(`https://www.balldontlie.io/api/v1/teams`)
        .then(response => {
            console.log(response.data)
            setClassData(response.data.data);
        })
        .catch(error => {
            console.log("Got an error", error)
        })
    }, [])
    
    return(
        
        <div>
            
        {classData.map(attribute => {
          return (
            <Class
            key = {attribute.id}
            name = {attribute.name}
            city = {attribute.city}
            abbreviation = {attribute.abbreviation}
            />
            )
            })}
            
        </div>
        )
    
    }
    
    