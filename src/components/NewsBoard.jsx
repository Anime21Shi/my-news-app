import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import NewsCard from './NewsCard'

const NewsBoard = ({category}) => {
    const [articles,setArticles] =useState([]);
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${import.meta.env.VITE_API_KEY}`
    
    useEffect(() => {
        const fetchArticles = async() => {
            try{
                let res = await fetch(apiUrl);
                let data = await res.json();
                setArticles(data.articles);
            }catch(error){
                console.log(error);
            }
        }
        fetchArticles();
    },[category])
  return (
    <Container> 
        <h1 className= 'text-light text-center mt-5 pt-3'>Latest <span className='text-danger'>News</span></h1>
        <Row lg={3} md={2}>
            {articles.map((article) => ( 
                <NewsCard article={article} />
            ))}
        </Row>
    </Container>
  )
}

export default NewsBoard