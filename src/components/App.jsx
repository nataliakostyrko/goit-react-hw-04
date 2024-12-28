import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import fetchImages from "../services/api";


function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    


    useEffect(() => {
        if (!query) return;

        const getArticles = async () => {
            try {
                setLoading(true);
                setError(false);
                
                const response = await fetchImages(query, page);
            
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getArticles();
        
    }, [query, page]);
    const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };










    return (
        <div>
            <h1>Gallery</h1>
            <SearchBar onSubmit={handleSubmit} />
            <ImageGallery/>
            
</div>
    );
};


export default App;