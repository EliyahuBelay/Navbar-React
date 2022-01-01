// import React,{ useState } from 'react'
import HomePage from './Components/HomePage/HomePage.component'
import Parent from './Components/Parent/Parent.component'
import Student from './Components/Student/Studenr.component'
import Teacher from './Components/Teacher/Teacher.component'
import {Routes,Route} from 'react-router-dom';

function Routing() {
    // Route path="/child" element={<ChildComponent />} 
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/parent" element={<Parent/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/teacher" element={<Teacher/>}/>
        </Routes>
    )
// const [counter,setCounter] = useState(0);

//     switch (counter) {
//         case 1:
//             return <HomePage />;
//         case 2:
//             return <Parent />;
//         case 3:
//             return <Student />;
//         case 4:
//             return <Teacher />;
//         default:
//             return <div></div>;
    // }


    

}

export default Routing;