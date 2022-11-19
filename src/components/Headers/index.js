
import {Link} from "react-router-dom"
import { FaVideo ,FaBars,} from 'react-icons/fa';
import { FiPlus,FiGrid,FiSearch } from "react-icons/fi";
import { MdOutlineFilterList } from "react-icons/md";
import './index.css'

const Headers =()=>(
    <div className="background">
        <div className="virtual-card-bag">
            <div className="first-head">
                    <h1 className="first-Head">Virtual Cards</h1>
                    <p className="style-for-icon">
                    <FaVideo className="icon-edit"/>
                    <span className="text-edit">Learn More</span>
                    </p>
                        </div>
                        <div className="new-virtual-card-tab">
                            <p className="somthing-One">
                            <FiPlus className="FiPlus-style"/>
                            <span className="newVirtual-text">virtual card</span>
                            </p> 

                        </div>
        
            </div>
            <div className="virtual-card-bag">

                <ul className="tabs-container">
                <li className="list-style">
                    <Link className="link-style" to="/your">Your</Link>
                    </li>
                <li  className="list-style">
                    <Link className="link-style" to="/">All</Link>
                    </li>
                <li className="list-style">
                    <Link className="link-style" to="/blocked">Blocked</Link>
                    </li>

                </ul>
                <div>
                    <p><FiGrid className="FiGrid-style"/>
                    <FaBars className="FiGrid-style"/></p></div>
        </div>
        <hr className="hori-line"/>
        <div className="filter-elememt">
            
            <p className="filter-container"><FiSearch className="FiSearch-style"/>
            <span className="fliter-search"><MdOutlineFilterList className="MdOutlineFilterList-style"/><p className="filter-cargo">Filter</p></span></p>
            
            
        </div>
        
        </div>
    
)
export default Headers