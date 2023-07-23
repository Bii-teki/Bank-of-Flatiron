import React, { useEffect, useState } from "react";
import About from './components/About/About';
import TransactionList from './components/TransactionList/TransactionList';
import Header from './components/Header/Header';
import Search from "./components/Search/Search";



import './App.css';

function App() {

  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  const [order, setOrder] = useState("asc")
 

  useEffect(() => {

    const fetcha = () =>{
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction)
               
       )
      .catch(e=>{
        console.log('error', e)
      })
}
 fetcha();
}, [query])
  // function handleAddNew(newTrans) {
  //   const updateTransaction = [...transaction, newTrans]
  //   setTransaction(updateTransaction)
      
  //  }
   function handleSearch(e) {
    setQuery(e.target.value)
  }
  function handleSort() {

    if(order==="asc"){
    const result = [...transaction].sort((a, b) => a.category.localeCompare(b.category));
        setTransaction(result);
        setOrder("desc")
    }
    if(order==="desc"){
      const result = [...transaction].sort((a, b) => b.category.localeCompare(a.category));
          setTransaction(result);
          setOrder("asc")
      }
  
  }

  function onDeleteTrans(id){
    const updateTransaction = transaction.filter(transa=>
      transa.id !==id
      
    )
    setTransaction(updateTransaction)

  }
  // function onUpdateTrans(id){
  //   const updateTransaction= transaction.map(transa =>{
  //         if(transa.id===id){
  //           return {...transa, completed}
  //         }
  //         else{
  //           return transa
  //         }
  //       })    
  //       setTransaction(updateTransaction)

  // }   

 
  return (
    <div >
     <Header />
      <About />
      <Search handleSearch={handleSearch} />
      <TransactionList transactions={transaction} sort={handleSort}   onDeleteTrans={onDeleteTrans} />   
     </div>

  );
}

export default App;
