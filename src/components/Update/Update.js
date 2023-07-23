import React, {useState, useEffect}  from "react";
import  "../NewTransaction/NewTransaction";

function Update({id, date, description, category, amount}){
      const [editor, setEditor] =useState(true)
    
    const [values, setValues] = useState({
       id: id,
        description: date,
        date: description,
        category: category,
        amount: amount,

       })
      
      
       useEffect(()=> {
        const fetchd = () =>{
            fetch("http://localhost:3000/transactions?q=" + id)
            .then(r=>r.json())
            .then(data=>{
              return setValues({...values, description: data.description, date: data.date, category: data.category, amount: data.amount})
            })
  
              .catch(e=>{
                console.log('error', e)
              })
        }
         fetchd();
        }, [])

       
    


        if(editor){
    return(

        <>
       
        <div className="submit-container">
            <div className="">
            <form>
            <h3>Update your Transaction</h3>
            <div>
            <label htmlFor="">Date:</label>
            <input value={date} name="date" type="date" placeholder="Date" className="form-control"/>
            </div>
            <div>
            <label htmlFor="">Description:</label>
            <input value={description} name="description" type="text" className="form-control"/>
            </div>
            <div>
            <label htmlFor="">Amount:</label>
            <input value={amount} name="amount" type ="number" className="form-control"/>
            </div>
            <div>
            <label htmlFor="">Category:</label>
            <input value={category} name="category" type="text" className="form-control"/>
            </div>      
          <br/>
          <button name="submit" className="btn btn-info">Update</button> 
          <button name="" onClick={() => setEditor(false)} className="btn btn-danger">Close</button> 
         </form>
            </div>
        </div>
       
        </>
    )
} 
}
export default Update
