import React, {useState } from "react";
import "./NewTransaction.css"


function NewTransaction(onTransNew) {
 

    const [date, setDate]= useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] =useState("")
    const [errors, setErrors] = useState([])

    const handleDate = (e) => setDate(e.target.value)
    const handleDescription = (e) => {setDescription(e.target.value)}
    const handleCategory = (e) => setCategory(e.target.value)
    const handleAmount = (e) => setAmount(e.target.value)


   function handleSubmit(e){
    e.preventDefault()
      

    if ( category.length > 0  ) {

        const transactionOBJ = { date: date, description: description, category: category, amount: amount}

        setErrors([]);
  
      fetch("http://localhost:3000/transactions",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(transactionOBJ)
    }) 
    .then(r=>r.json())
    .then(data=>console.log(data))
   
} else {
    setErrors(["First category is required!"]);
  }
}
  return(

<>
<form  className=""  onSubmit={handleSubmit}>
      <div className="submit-container" >
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
        <h3>Add your Transaction</h3>
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
        <input value={date} onChange={handleDate} type="date" name="date" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
        <input value={description} onChange={handleDescription} type="text" name="description" placeholder="Description" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
        <input value={category} onChange={handleCategory} type="text" name="category" placeholder="Category" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
         <input value={amount} onChange={handleAmount} type="number" name="amount" placeholder="Amount" step="0.01" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
         <button className="submit"  type="submit">
        Add Transaction
      </button>
      </div>
     
    </form>
</>

    )
}

export default NewTransaction