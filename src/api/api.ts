import reqmate, { Req } from 'reqmate';
import { type FetchResult } from './types'

const API_KEY = 'ee32c2c7ad4fe29cb8ee82fc541e12c3'
const BASE_URL = `https://api.themoviedb.org/3`;
const CACHE_TTL = 60_000; // 1 minute


export function useFetchPopular() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const request = reqmate.get(url)

    return () => callRequest(request)
}

export function useFetchTopRated() {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
    const request = reqmate.get(url);

    return () => callRequest(request)
}

export function useFetchUpcoming() {
    const url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
    const request = reqmate.get(url)

    return () => callRequest(request)
}

export function useSearchMovie() {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;
    const request = reqmate.get(url);

    return () => callRequest(request)
}

async function callRequest(request: Req) {
    const result = await request
        .setCaching(CACHE_TTL)
        .send<FetchResult>();

    return result.data;
}
