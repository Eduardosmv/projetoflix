import {useEffect, useState} from 'react';
import api from '../../sevices/Api';


//https://api.themoviedb.org/3//movie/now_playing?api_key=96076cdec05805e988903bffa64c5e6c&language=pt-BR

function Home(){

    const [filmes, setfilmes ]= useState ([]);


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
       setfilmes(response.data.results.slice(0, 17))

    }
    loadFilmes();


},[])

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        </article>
                    )
                })}

            </div>
            
        </div>
    )
}
export default Home;