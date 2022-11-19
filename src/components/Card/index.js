import React from 'react';
import {Link} from 'react-router-dom'
import { BsDot ,BsFillCircleFill} from "react-icons/bs";
import { AiTwotoneFire } from "react-icons/ai";
import "./index.css"

const Card= props =>{
    const {blogsData}=props
    const {id,name,AvailableToSpent,spentName,BudgetName,CardType,CardHolder,Expiry}=blogsData
   

return(
    <Link  to={`/blogs/:${id}`} className="link-cardData-style">
    <div className="card-cantainer">
        <div className="cards-cantainer">
            <li className="card-style">
            <h1 className="card-head">{name}</h1>
            <div className="budget-name">
                <React.Fragment>
                <p className="card-holder">{CardHolder} <BsDot className="BsDot-style"/>
                <span className="subcription">{BudgetName}</span></p>
                </React.Fragment>
                <div className="card-type-icon">
                        <AiTwotoneFire className="AiTwotoneFire-style"/>
                </div>
            </div>
            <div className="budget-name">
                <p className="card-type-cantainer"> {CardType}</p>
                <p className="Expires-date">Expires:{Expiry}</p>
            </div>
        <div className="line"></div>
        <div className="budget-name">
               
               <p className="acted">
                <BsFillCircleFill className="BsFillCircleFill-style-pink"/> 
               <span className="spent-style">Spent</span>
                 </p>
                <p className="spent-style">{spentName.value} <span className="SGD-spent">SGD</span></p>
            </div>
            <div className="budget-name">
               
               <p className="acted">
                <BsFillCircleFill className="BsFillCircleFill-style-green"/> 
               <span className="spent-available">Available to Spend</span>
                 </p>
                <p className="spent-available">{AvailableToSpent.value} <span className="SGD-available">SGD</span></p>
            </div>
            </li>
            
        </div>
    </div>
    </Link>
)}
export default Card;