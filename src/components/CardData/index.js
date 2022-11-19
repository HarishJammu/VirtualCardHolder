
import Card from "../Card";
import { Component } from "react";
import './index.css';

class  CardData extends Component{

    state={cardDataDetails:[]}

    componentDidMount(){
        this.getBlogData()
    }
    

    getBlogData= async ( )=>{
        const apiUrl="https://636f8471f2ed5cb047df0d76.mockapi.io/blogs"
        const response=await fetch(apiUrl)
       
        const data=await response.json()
        const updateData=data.map(eachItem=>({
            AvailableToSpent:eachItem.Available_To_Spent,
            id:eachItem.id,
            name:eachItem.Name,
            spentName:eachItem.Spent,
            BudgetName:eachItem.Budget_Name,
            CardType:eachItem.Card_Type,
            CardHolder:eachItem.Card_holder,
            Expiry:eachItem.Expiry,
            Limit:eachItem.Limit,
            OwnerId:eachItem.Owner_id,
            Status:eachItem.Status,
        }))
        
        this.setState({cardDataDetails:updateData})
    }
    render(){
        const {cardDataDetails}=this.state
        
        return(
            <ul className="cardData-style">
            {cardDataDetails.map(items=>(
                <Card blogsData={items} key={items.id}/>
            )) }
            </ul>
           
        )
    }
}
export default CardData;