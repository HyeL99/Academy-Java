import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import Trailer from './Trailer';

const MovieInfo = ({movieDetails}) => {
  const {adult,backdrop_path,genres,overview,poster_path,release_date,runtime,tagline,title,vote_average,vote_count,popularity} = movieDetails;

  let realeaseDateArray = release_date.split('-');

  return (
    <div id='movieDetailPage' style={{backgroundImage:`url('https://www.themoviedb.org/t/p/original${backdrop_path}')`}}>
      <span id='detailBgOpacity'></span>
      <Container>
        <Row>
          <Col xs={12} md={5} lg={5} className='detailImg'>
            <img src={`https://www.themoviedb.org/t/p/original${poster_path}`} alt="" />
          </Col>
          <Col xs={12} md={7} lg={7}  className='detailContentsWrap'>
            <div className="detailContents"> 
              <h2>{title} <span className='detailRuntime'>{realeaseDateArray[0]}</span></h2>
              <span>, {runtime}분</span>
              <hr />
              <p className='tagline'>{tagline}</p>
              <div className="infoPlace">
                <span>🎬{`${realeaseDateArray[0]}년 ${realeaseDateArray[1]}월 ${realeaseDateArray[2]}일`}</span>
                <div className="infos">
                  <span>⭐{vote_average}</span>
                  <span>👥{popularity}</span>
                  {adult ? <Badge bg="danger">19+</Badge>:<Badge bg="success">R</Badge>}<br />
                </div>
              </div>
              <hr />
              <div className="detailCategorys">
                {genres && genres.map((item,index)=><Badge bg="secondary" key={index}>{item.name}</Badge>)}
              </div>
              <hr />
              <p>{overview}</p>
              <hr />
              <Trailer title={title}/>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default MovieInfo
