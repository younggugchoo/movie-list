import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail(){

    const  {id}  = useParams();

    //console.log(id);

    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);

    const getMovie = async()=> {
        const json =await( await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);


    //console.log(movie);

    return (
        <div>
            {loading?<h1>Loading...</h1>:<MovieInfo movie={movie}/>}
        </div>
    )
}

function MovieInfo({movie}){
    console.log(movie.large_cover_image);
    return (
        <div>
            <div>
                <img src={movie.background_image}/>
            </div>
            <div>
                <a href ={movie.url}>{movie.title}</a>
            </div>
        </div>
    )
}