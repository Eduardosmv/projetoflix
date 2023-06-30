import {useState, useEffect} from 'react'
import axios from 'axios'



function App(){

const [dados, setdados] = useState([])

const getdados = async() =>{

  try{
    const response = await axios.get("http://10.0.1.43");

    const data = response.data;

   setdados(data)

   //console.log(data)

  }
  catch(erro){
    console.log(erro);

  }

} 
useEffect(() => {

  getdados()

}, [])


}



export default App;
