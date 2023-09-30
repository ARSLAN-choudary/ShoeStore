import { useState } from "react"
import Navbar from "./components/Navbar"

import Recommended from "./components/Recommended"
import Sidebar from "./sidebar/Sidebar"
import products from "./db/Data";
import Cards from "./components/Cards"


function App() {
 const [selectedCategory, setSelectedCategory] = useState(null)

 const [query, setQuery] = useState("")

 const handleInputChange=(Event)=>{
  setQuery(Event.target.value)
 }

 const FilteredItems= products.filter((Product)=>
 Product.title.toLowerCase().indexOf(query.toLocaleLowerCase!==-1)
 )

 const handleChange=(Event)=>{
  setSelectedCategory(Event.target.value)
 }

 const handleClick=(Event)=>{
  setSelectedCategory(Event.target.value)
 }

 function filteredData(products,selected,query) {
  let filteredProducts=products;

  if (query) {
    filteredProducts=FilteredItems;
  }
  if (selected) {
    filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>category===selected||
    color===selected||
    company===selected||
    newPrice===selected||
    title===selected)
  }
 
 } 
 const result = filteredData(products,selectedCategory,query)
  return (
    <>
    <Sidebar handleChange={handleChange}/>
      <Navbar query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick} />
      <div className="container w-auto" >
        <div className="row "style={{marginLeft:"8rem",marginRight:"0"}}>
        {products?.map(({img, title, reviews, newPrice, prevPrice}) => (
      
      <div className="col">
      <Cards key={Math.random()}
    img={img}
    title={title}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />
      </div>
   
  ))}
        </div>
      </div>
     
      
    </>
  )
}

export default App
