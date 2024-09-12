import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NewsCard from '../components/NewsCard'

const Search = () => {
    let {query} = useParams();
    const url = `https://gnews.io/api/v4/search?q=${query}&apikey=${import.meta.env.VITE_API_KEY}`
    const [articles, setArticles] = useState([]);
    // const [searchQuery, setSearchQuery] = useState("");
    const capitalize = (query) => {
        return query.charAt(0).toUpperCase() + query.slice(1);
    }
    // console.log(query);

    useEffect(() => {
        const fetchArticles = async() => {
            try{
                let res = await fetch(url);
                let data = await res.json();
                setArticles(data.articles);
            }catch(error){
                console.log(error);
            }
        }
        fetchArticles();
    },[query]);

  return (
    <Container>
        <h1 className= 'text-light text-center mt-5 pt-3'>{capitalize(query)} <span className='text-danger'>News</span></h1>
        <Row lg={3} md={2}>
            {articles.map((article) => ( 
                <NewsCard article={article} />
            ))}
        </Row>
    </Container>
  )
}

export default Search