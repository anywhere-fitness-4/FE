import React, {useState, useEffect} from "react";
import Class from "./Class";
import axios from "axios";

export default function ClassGrid() {
    const [classData, setClassData] = useState([])

    useEffect(() => {
        axios.get(`https://anywhere-fitness04.herokuapp.com/api/classes`)
        .then(response => {
            console.log(response)
            setClassData(response.data);
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
            type = {attribute.type}
            date = {attribute.class_date}
            intensity = {attribute.intensity}/>
            )
            })}
            
        </div>
        )
    
    }
    
    