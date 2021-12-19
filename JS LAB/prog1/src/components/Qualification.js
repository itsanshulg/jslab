import React from "react";
import('./Qualification.css')


let Qualification=(props)=>{


return(
<div>
    <table className="table" border="2" cellspacing="0" cellpadding="1">
        <thead >
            <th>SR NO</th>
            <th>COLLEGE NAME</th>
            <th>PERCENTAGE</th>
            <th>DEGREE</th>
        </thead>
        <tbody>{
                props.qualifications.map((data,index)=>{
                    return(
                    <tr key={data.SNo}>
                        <td>{index+1}</td>
                        <td>{data.College}</td>
                        <td>{data.Marks}</td>
                        <td>{data.Degree}</td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
</div>
);
}

export default Qualification;