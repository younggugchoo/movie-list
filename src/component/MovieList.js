import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import "../../src/css/Movie.css"


function MovieList() {


    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year,rating&limit=20&order_by=asc`
        )).json();

        //const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    //console.log(movies);

    useEffect(() => {
        getMovies();
    }, []);

    return(
        <div>
            {loading?<h1>Loading...</h1>:<div className="container">{movies.map(item=><MovieItem key={item.id} movie={item}/> )}</div>}
        </div>
    )



       


    

}


export default MovieList;