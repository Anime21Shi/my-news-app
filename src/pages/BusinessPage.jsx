import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import NewsCard from '../components/NewsCard'

const BusinessPage = () => {
    const [articles,setArticles] =useState([]);
    const url = `https://gnews.io/api/v4/top-headlines?category=business&lang=en&apikey=${import.meta.env.VITE_API_KEY}`
    
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
        <h1 className= 'text-light text-center mt-5 pt-3'>Business <span className='text-danger'>News</span></h1>
        <Row lg={3} md={2}>
            {articles.map((article) => ( 
                <NewsCard article={article} />
            ))}
        </Row>
    </Container>
  )
}

export default BusinessPage