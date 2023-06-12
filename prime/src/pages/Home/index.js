import {useEffect, useState} from 'react';
import api from '../../sevices/Api';
import {Link} from 'react-router-dom';
import './home.css';


//https://api.themoviedb.org/3//movie/now_playing?api_key=96076cdec05805e988903bffa64c5e6c&language=pt-BR

function Home(){

    const [filmes, setfilmes ]= useState ([]);
    const [loading, setloading] = useState(true);


useEffect(()=>{
    async function loadFilmes(){
        const response = await api.get("movie/now_playing",{
                params:{
                    api_key:"96076cdec05805e988903bffa64c5e6c",
                    language: "pt-BR",
                    PAGE: 1,
                }

        })
       // console.log(response.data.results);
       setfilmes(response.data.results.slice(0, 19))
       setloading(false);

    }
    loadFilmes();


},[])
if(loading){
    return(
        <div className="loading">
            <h2>Carregando Filmes.....</h2>
        </div>
    )
}

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/Filme/${filme.id}`}> Acessar</Link>
                        </article>
                    )
                })}

            </div>
            
        </div>
    )
}
export default Home;