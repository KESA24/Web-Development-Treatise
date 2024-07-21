import React from 'react';
import './DivArray.css';

function DivArray() {

    const students = [  
        {  
          'id': 'Div 1',   
          'name': 'Jack',   
          'email': 'jack@gmail.com'  
        },  

        {  
          'id': 'Div 2',   
          'name': 'Mary',   
          'email': 'mary@gmail.com'  
        },  

        {  
          'id': 'Div 3',   
          'name': 'John',   
          'email': 'john@gmail.com'  
        },

        {  
            'id': 'Div 4',   
            'name': 'John',   
            'email': 'john@gmail.com'  
          }, 
    ];  

    
    return (  
        <div className="divArray">  
            <h1>Array prop</h1>
            <hr />
            {students.map((student, index) => (  
                <div className='arrayElement' data-index={index}>
                    <li>{student.id}</li>
                    <li>{student.name}</li>
                    <li>{student.email}</li>
                </div>
                   
                ))}  
        </div>  
      );  
      
}

export default DivArray

