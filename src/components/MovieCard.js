import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Rating } from '@mui/material'
import { Link } from "react-router-dom";

const MovieCard = ({movies}) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {movies.map(movie => (
        <Col>
          <Card>
            <Card.Img variant="top" style={{width:'20rem',height:'340px'}} src={movie.posterURL} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
              {movie.description}
              </Card.Text>
              <Rating name="read-only" value={movie.rating} readOnly max={10} />
              <Link to={`/details/${movie.id}`}>MORE DETAILS...</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MovieCard;