import React, {useState} from 'react';
function Certificate(){
    const [courses,setCourses]=useState(["Database Management System-Nptel","Artifical Intelligence Fundamentals-Oracle","Front-end Web development-Infosys SpringBroad"]);
    function addCourse(){
    const newCourse = document.getElementById("newCourse").value;
    if (newCourse.trim() === "") return;
    setCourses(c => [...c, newCourse]);
    document.getElementById("newCourse").value = "";
    }
    function removeCourse(index){
        setCourses(c => c.filter((element,i) => i !== index));
    }
    return(
        <div className="certificate-container">
            <h2>My Certificates</h2>
            <ul>
                {courses.map((course,index) =>(
                    <li key={index} onClick={()=> removeCourse(index)}>{course}</li>
                ))}
            </ul>
            <input type="text" id="newCourse" placeholder="Enter Course Name" />
            <button onClick={addCourse}>Add Course</button>
        </div>
    );
}
export default Certificate;