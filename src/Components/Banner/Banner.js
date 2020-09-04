import React, {useState, useEffect} from 'react';
import axiosConfig from '../Axios/AxiosConfig';
import Request from '../Request/Request';
import './Banner.css';

const Banner = () => {

    const [movie,
        setMovie] = useState([]);

    useEffect(() => {

        const fetchBannerData = async() => {
            try {
                const res = await axiosConfig.get(Request.fetchNetflixOriginals);
                setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
                return res;
            } catch (error) {
                console.log(error);
            }
        }
        fetchBannerData();

    }, [])

    console.log(movie);

    function truncate(str, n){
        return str?.length> n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner_contents">
                <h1 className="banner_title"> {movie?.title || movie?.name || movie?.origina_name} </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        Play
                    </button>
                    <button className="banner_button">
                        My List
                    </button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    );
}

export default Banner;
