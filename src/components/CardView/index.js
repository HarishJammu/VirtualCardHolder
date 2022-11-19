import React from "react";
import { Component } from "react";
import { BsDot ,BsFillCircleFill} from "react-icons/bs";
import { AiTwotoneFire } from "react-icons/ai";
import "./index.css"

class CardView extends Component{

        componentDidMount(){
                this.getBlogsDataFromApi()
        }

        getBlogsDataFromApi=props=>{
                console.log(this.props)
        }


        render(){
                return(
                        <div className=".background-setup">
                        <div className="card-container">
                            <li className="card-setup">
                            <h1 className="card-head-setup">harish</h1>
                            <div className="budget-name-setup">
                            <React.Fragment>
                                <p className="card-holder-setup">CardHolder <BsDot className="BsDot-style-setup"/>
                                <span className="subcription-setup">BudgetName</span></p>
                                </React.Fragment>
                                <div className="card-type-icon-setup">
                                        <AiTwotoneFire className="AiTwotoneFire-style-setup"/>
                                </div>
                            </div>
                            <div className="budget-name-setup">
                                <p className="card-type-cantainer-setup"> CardType</p>
                                <p className="Expires-date-setup">Expires:Expiry</p>
                            </div>
                        <div className="line-setup"></div>
                        <div className="budget-name-setup">
                               
                               <p className="acted-setup">
                                <BsFillCircleFill className="BsFillCircleFill-style-pink-setup"/> 
                               <span className="spent-style-setup">Spent</span>
                                 </p>
                                <p className="spent-style-setup">spentName<span className="SGD-spent-setup">SGD</span></p>
                            </div>
                            <div className="budget-name-setup">
                               
                               <p className="acted-setup">
                                <BsFillCircleFill className="BsFillCircleFill-style-green-setup"/> 
                               <span className="spent-available-setup">Available to Spend</span>
                                 </p>
                                <p className="spent-available-setup">AvailableToSpent <span className="SGD-available-setup">SGD</span></p>
                            </div>
                            </li>
                            
                        </div>
                        </div>
                )
        }



}
export default CardView