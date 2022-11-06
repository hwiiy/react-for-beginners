import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
function Detail(){
    const { id } = useParams();
    const [detail,setDetails] = useState([]);
    const [loading,setLoading]=useState(true);
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
    setDetails(json.data.movie);
    setLoading(false);
    
    };
    useEffect(() => {
      getMovie();
    }, []);
        
    return (
        <div>
        {loading 
        ?(<h1>LoadingDetail...</h1>)
        :(<div>
            <h2>{detail.title} ({detail.year}): {detail.rating} rates</h2>
            <img src={detail.large_cover_image}></img>
            <ul>
                genres : {detail.genres}
            </ul>
            </div>)}
        </div>
    );
};
export default Detail;

