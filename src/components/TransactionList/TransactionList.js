import React from "react"
import Transaction from "../Transaction/Transaction";
import NewTransaction from "../NewTransaction/NewTransaction";


import "./TransactionList.css"


function TransactionList({transactions, onDeleteTrans, sort}) {
 

    const list = transactions.map((item)=>{
        return <Transaction key={item.id} id={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} onDeleteTrans= {onDeleteTrans} />;
    })

  

    return (

      <div className="land">        

       <div className="transaction-list">


        <div className="container">
         <table className="table table-bordered">
         <tbody>
        <tr className="tr">    
          <th >
            <h3 className="" onClick={sort}>Date</h3>
          </th>
          <th>
            <h3 className="" onClick={sort}>Description</h3>
          </th>
          <th>
            <h3 className="" onClick={sort} >Category</h3>
          </th>
          <th>
            <h3 className="" onClick={sort}>Amount</h3>
          </th>
          <th>
            <h3 className="">Update</h3>
          </th>
          <th>
            <h3 className="">Delete</h3>
          </th>
        </tr>
       
        {list}
      </tbody>
    </table>
    </div>
    </div>
    <div className="transaction-form"> 

    <NewTransaction />
    </div>
  

    </div>
    );
  }


export default  TransactionList