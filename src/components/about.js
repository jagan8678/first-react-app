import {Component} from 'react';
import { useState } from "react";


function About(){
  const [count,setCount] = useState(0);
        return (
          <>
            <div className="counter">
              <h6>Counter : {count}</h6>
              <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
              <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
            </div>


          <div data-testid="about-content">
                <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/303349/pexels-photo-303349.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button>
        </div>
      </div>
    </div>
  </div>






  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hyundai</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hyundai</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Nokia</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
            </div>
            </>
        )
    }



export default About;