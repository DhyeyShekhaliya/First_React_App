import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Counter from "../Components/Counter";

export default function Homepage(){
    
 const name = "Dhyey"
 const age = 30
 const addresh = "123 Main St"
 console.log(name)

    return(
     <div>
        <Navbar/>
        <Counter/>
        <h1>MY name is {name}</h1>
        <h1>My age {age}</h1>
        <h1>I live in {addresh} </h1>



        <p>Lorem ipsum dolor sit amet.</p>
        <Footer/>
     </div>
    )
}