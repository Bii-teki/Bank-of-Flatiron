import React, {useState} from "react"
import Update from "../Update/Update"

function Transaction({id, date, description, category, amount, onDeleteTrans}) {

  const [edit, setEdit] = useState(false)
  
  function handleDelete() {
    fetch(`http://localhost:3000/transactions/${id}`,
    {
      method:"DELETE"
    })
    
    onDeleteTrans(id)
  }
  
    
  if(edit){ 
    return (

      <>
      
     <Update id={id} date={date} description={description} category={category} amount={amount}/>
    
  
     </>
   )
  }
  if(!edit){
    return (
      <>
     
 
        <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td><button key={id}className="btn btn-success" onClick={() => setEdit(true)}>Update</button></td>
        <td><button key={id}className="btn btn-danger" onClick={handleDelete}>Delete</button></td>
      </tr>
  </>  );
  }
}

export default  Transaction