import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

const NewsCard = ({article}) => {
  return (
        
            <Col className='my-5 mr-2'>
                <Card style={{ width: '345px'}} bg="dark" text='light' className='px-2 py-2'>
                    <Card.Img variant="top" src={article.image} style={{height: '200px'}} className='' />
                    <Card.Body>
                        <Card.Title>{article.title.slice(0,50)+'...'}</Card.Title>
                        <Card.Text>
                            {article.description.slice(0,90)+'...'}
                        </Card.Text>
                        <a href={article.url} className='btn btn-primary' target='_blank'>
                            Read More
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        
  )
}

export default NewsCard