import {useEffect, useState} from "@types/react";
import Movie from "../components/Movie";

function Home() {
    // const [loading, setLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     const json = await (
    //         await fetch(
    //             'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    //         )
    //     ).json();
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // }
    // useEffect(() => {
    //     getMovies();
    // }, []);

    return (
        <div>
            {/*{loading ? (*/}
            {/*    <h1>Loading~</h1>*/}
            {/*) : (*/}
            {/*    <div>*/}
            {/*        {movies.map((item) => (*/}
            {/*            <Movie*/}
            {/*                key={item.id}*/}
            {/*                coverImg={item.medium_cover_image}*/}
            {/*                title={item.title}*/}
            {/*                summary={item.summary}*/}
            {/*                genres={item.genres}/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*)}*/}
            hello
        </div>
    )
}

export default Home;