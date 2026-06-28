"use client";

import Image from "next/image";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { addFavorite } from "@/store/favoritesSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
//console.log("Favorite clicked:", movie.title);
  return (
    <div className="relative">
      <button
        onClick={(e) => {
  e.preventDefault();
  //console.log("Favorite clicked:", movie.title);
  dispatch(addFavorite(movie));
}}
        className="absolute top-3 right-3 z-10 bg-red-500 px-2 py-1 rounded"
      >
        ❤️
      </button>

      <Link href={`/movie/${movie.id}`}>
        <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500 transition cursor-pointer">
          <div className="overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={700}
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-4">
            <h2 className="text-lg font-bold mb-2 line-clamp-1">
              {movie.title}
            </h2>

            <p className="text-sm text-gray-400 line-clamp-2">
              {movie.overview}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}