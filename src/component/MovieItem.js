import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function MovieItem({movie}){

    return(

        <div className="item">          
            <div>
                <Link to={`/MovieDetail/${movie.id}`} ><img src={movie.medium_cover_image}/></Link>
            </div>
            <div>
                {movie.title} 
            </div>
        </div>
    )
}


MovieItem.propTypes = {
    movie:PropTypes.object,
}
