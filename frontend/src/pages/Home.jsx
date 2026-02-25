import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/movies/now-playing`);
                setMovies(res.data);
            } catch (err) {
                console.error("Failed to fetch movies", err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center bg-neutral-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vtecsmREWeEX8.jpg')] bg-cover bg-center opacity-30" />

                <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                        Experience <span className="text-red-500">Cinema.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mb-8">
                        Book valid tickets in real-time. Pick your perfect seat before anyone else does.
                    </p>
                    <button
                        onClick={() => document.getElementById('now-showing').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <Play fill="currentColor" /> Browse Now Playing
                    </button>
                </div>
            </div>

            {/* Movies Grid */}
            <div id="now-showing" className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold border-l-4 border-red-500 pl-4">Now Showing</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movies.map((movie) => {
                        const movieId = movie.id || movie.tmdbId;
                        const poster = movie.poster_path || movie.posterPath;
                        const title = movie.title;
                        const rating = movie.vote_average || movie.rating || 0;
                        const year = movie.release_date ? movie.release_date.substring(0, 4) : 2024;
                        const posterUrl = poster ? `https://image.tmdb.org/t/p/w500${poster}` : null;

                        return (
                            <Link
                                to={`/movie/${movieId}`}
                                key={movieId}
                                className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20"
                            >
                                <div className="aspect-[2/3] bg-neutral-800">
                                    {posterUrl ? (
                                        <img
                                            src={posterUrl}
                                            alt={title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-neutral-500">No Image</div>
                                    )}
                                </div>
                                <div className="p-4 absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
                                    <h3 className="font-bold text-lg truncate">{title}</h3>
                                    <div className="flex items-center justify-between text-sm text-neutral-400 mt-1">
                                        <span>⭐ {Number(rating).toFixed(1)}</span>
                                        <span>{year}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
