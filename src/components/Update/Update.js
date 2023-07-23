import React, {useState, useEffect}  from "react";
import  "../NewTransaction/NewTransaction";

function Update({id, date, description, category, amount}){


      const [editor, setEditor] =useState(true)
    
    const [values, setValues] = useState({
       id: id,
        description: description,
        date: date,
        category: category,
        amount: amount,

       })
      
      
       useEffect(()=> {
        const fetchd = () =>{
            fetch("http://localhost:3000/transactions?q=" + id)
            .then(r=>r.json())
            .then(data=>{
              setValues((prevValues) => ({
                ...prevValues,
                description: data.description,
                date: data.date,
                category: data.category,
                amount: data.amount,     }));
              })
            .catch((e) => {
              console.log('error', e);
            });
        };
        fetchd();
        }, [id, setValues])

       function handleOnSbmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/transactions?q=" + id,{

        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(values)
    }) 
       
            .then(r=>r.json())
            .then(data=>
             console.log(data)
            )
  
              .catch(e=>{
                console.log('error', e)
              })
        }
        
       
    


        if(editor){
    return(

        <>
       
        <div className="submit-container">
            <div className="">
            <form onSubmit={handleOnSbmit}>
            <h3>Update your Transaction</h3>
            <div>
            <label htmlFor="">Date:</label>
            <input value={values.date} onChange={e => setValues({...values, date: e.target.value})} name="date" type="date" placeholder="Date" className="form-control"/>
            </div>
            <div>
            <label htmlFor="">Description:</label>
            <input value={values.description} onChange={e => setValues({...values, description: e.target.value})} name="description" type="text" className="form-control"/>
            </div>
            <div>
            <label htmlFor="">Amount:</label>
            <input value={values.amount} onChange={e => setValues({...values, amount: e.target.value})} name="amount" type ="number" className="form-control"/>
            </div>
            <div>
            <label htmlFor="">Category:</label>
            <input value={values.category} onChange={e => setValues({...values, category: e.target.value})} name="category" type="text" className="form-control"/>
            </div>      
          <br/>
          <button name="submit" type="submit" className="btn btn-info">Update</button> 
          <button onClick={() => setEditor(false)} className="btn btn-danger">Close</button> 
         </form>
            </div>
        </div>
       
        </>
    )
} 
}
export default Update
