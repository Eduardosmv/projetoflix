import{ useEffect, useState} from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import api from '../../sevices/Api';
import'./filme.css';


function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const[filme, setfilmes] = useState({});
    const[loading, setloading] =useState(true);

    useEffect(()=>{
      async function loadFilmes(){
        await api.get(`/movie/${id}`,{
            params:{
                api_key:"96076cdec05805e988903bffa64c5e6c",
                    language: "pt-BR",


            }
        } )
        
        .then((response)=>{
            setfilmes(response.data);
            setloading(false);

        })
        .catch(()=>{
            console.log("filme Não encontrado")
            navigate("/", {replace: true})
            return;
        })
     

      }
    
    loadFilmes();
    return ()=>{
        console.log("componente foi desmontado")
    }
    
},[navigate, id])
if(loading){
    return(
        <div className="filme-info">
            <h1>Carregando detalhes ...</h1>
        </div>
    )
}
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
           
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
        
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>

        <strong>Avaliação: {filme.voto_averge} / 10</strong>

        <div className="area-buttons">
          <button>Salvar</button>
          <button>
            <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                Trailer
            </a>
          </button>

        </div>

        </div>
    )
}
export default Filme;