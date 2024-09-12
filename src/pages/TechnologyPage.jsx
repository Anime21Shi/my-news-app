import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import {Row, Container} from 'react-bootstrap'

const TechnologyPage = () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=${import.meta.env.VITE_API_KEY}`
    const [articles, setArticles] = useState([]);

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
    },[])
  return (
    <Container> 
        <h1 className= 'text-light text-center mt-5 pt-3'>Technology <span className='text-danger'>News</span></h1>
        <Row lg={3} md={2}>
            {articles.map((article) => ( 
                <NewsCard article={article} />
            ))}
        </Row>
    </Container>
  )
}

export default TechnologyPage