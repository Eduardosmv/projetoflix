import {useState, useEffect} from 'react'
import axios from 'axios'



function App(){

const [dados, setdados] = useState([])

const getdados = async() =>{

  try{
    const response = await axios.get("http://10.0.1.43")

    console.log(response)

  }
  catch(erro){
    console.log(erro);

  }

} 
useEffect(() => {

  getdados()

}, [])
return 

}



export default App;
