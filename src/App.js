// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import {useState } from 'react';
import { Row, Col } from "react-bootstrap"
import { posts, tags } from "./Data"
import Footer from "./components/Footer"
import pfp from "./assets/pfp.jpg";
import poster from "./assets/poster.png";

function App() {
  const [higlightChart, setChart] = useState({
    profile: false,
    poster: false,
  })
  const higlight = (name) => {
    return () => {
      setChart((oldChart) => {
      oldChart[name] = true;
        return oldChart
    })
    }
    }
  return (
    <>
    <div className='App App-header'
  >
    <Container fluid="xl" class=" container-xl container-fluid mb-3">
    <Row>
    <h2 class="display-1 text-center"> Blog</h2>
    <hr />
      <Col md={6}>
<h2> Profile: </h2>
<br />
    <p class="lead text-center"> 
    <img src={pfp}  alt="pfp" onDoubleClick={higlight("poster")} style={{borderRadius:"50%",height:"90px",width:"70px", background: higlightChart.poster ? "yellow": null }} />
<h2> Bilbo Baggins </h2>
        The best theif
        <br />
        {tags.map((t) => {
          return (<><a href=''>#{t}</a> {" "}</>)
        })}
    </p>
        </Col>
        <br />
       <Col md={4}>
       <h2> Poster </h2>
        <img src={poster} alt="Poster"  width={500} height={500}/>
       </Col>
    </Row>
    <br />
    <hr />
    <Row>
        <h2 class="text-center"> Posts </h2>
        <br />
        <div id="posts">
<Row>
{posts.filter((_, i) => i % 2===0).map((data) => {
return (<>
  <br />
  <Col md={6}>
  <div class="card text-center bg-dark">

<div class="card-header">
<img src={data.author?.src} alt="" style={{borderRadius:"50%",height:"30px",width:"30px"}}/>  {data.author?.name}
</div>
<div class="card-body">
  <h5 class="card-title">{data.title}</h5>
  <p class="card-text lead">{data.content ? data.content() : null}</p>
   {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
</div>
{data.img ? 
<img class="card-img-bottom" size={200} src={data.img.src} alt={data.img.alt} style={data.img.style} />
: null}
<div class="card-footer text-muted">
  {data.date} 
</div>
</div>
  </Col>
  <br />
  </>)
})}
</Row>
<br />
<hr />
<br />
<Row>
{posts.filter((_, i) => i % 2!==0).map((data) => {
return (<>
<br />
  <Col md={6}>
  <div class="card bg-dark">
<div class="card-header">
<img src={data.author.src} alt={data.author.name + " PFP"} style={{borderRadius:"50%",height:"30px",width:"30px"}}/>  {data.author.name}
</div>
<div class="card-body">
  <h5 class="card-title">{data.title}</h5>
  <p class="card-text lead">{data.content()}</p>
  
   {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
{data.link && !(!data.link.name && !data.link.href) ? 
 ( <a href={data.link.href} class="btn btn-primary">{data.link.name}</a>  )
: null}
</div>
{data.img ? 
<img class="card-img-bottom" size={200} src={data.img.src} alt={data.img.alt} style={data.img.style} />
: null}
<div class="card-footer text-muted">
  Published: {data.date} 
</div>
</div>
  </Col>
<br />
  </>
)
})}
</Row>
        </div>
    </Row>
    </Container>
    <hr />
  <Footer />
  </div>
    </>
    
  );
}

export default App;
