import {BrowserRouter,Route,Routes } from 'react-router-dom'
import CardView from './components/CardView'
import Headers from './components/Headers'
import CardData from './components/CardData'
import './App.css';

const App =()=>{
  return(
<BrowserRouter>
<Headers/>
<Routes>
<Route exact path="/" element={<CardData/>}/>
<Route exact path="/blogs/:id" element={<CardView/>}/>
</Routes>
</BrowserRouter>
  )
}
export default App;
