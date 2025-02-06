import { useState, useEffect } from "react"

type SearchBarProps = {
    setText: (input: string) => void
}
const SearchBar = ({ setText }: SearchBarProps) => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        setText(debouncedQuery)
    }, [debouncedQuery]);

    return (
        <input
            type="search"
            name="search"
            placeholder="Search by genre or movie name"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}

export default SearchBar
