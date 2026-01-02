import { useState } from "react";

function Home() {

  return (
    <>
      <h1 style={{
        fontSize: '32px',
        color: 'chocolate',
        backgroundColor: 'pink',
        padding: '10px',
        border: '5px solid yellow',
        textAlign: 'center',
        borderRadius: '50%'
      }}>Home Page Component </h1>

      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://abcautomobile.mu/wp-content/uploads/2022/12/yutong-bus.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://abcautomobile.mu/wp-content/uploads/2022/11/new-navara-s.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://abcautomobile.mu/wp-content/uploads/2023/02/UD-Trucks-Range.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div class="elementor-widget-wrap elementor-element-populated">
        <div class="elementor-element elementor-element-5073049 elementor-widget elementor-widget-heading" data-id="5073049" data-element_type="widget" data-widget_type="heading.default">
          <div class="elementor-widget-container">
            <h2 class="elementor-heading-title elementor-size-default" style={{ color: 'red' }}>Overview</h2>		</div>
        </div>
        <section class="elementor-section elementor-inner-section elementor-element elementor-element-6674f41 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6674f41" data-element_type="section">
          <div class="elementor-container elementor-column-gap-default">
            <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-aec4933" data-id="aec4933" data-element_type="column">
              <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-eb92404 elementor-widget elementor-widget-text-editor" data-id="eb92404" data-element_type="widget" data-widget_type="text-editor.default">
                  <div class="elementor-widget-container">
                    <p>ABC Automobile is a major player in the automotive industry of Mauritius. Over the years, this key cluster of the ABC Group of Companies has gone from a one-brand company to a multi-brand automobile group consisting of 14 brands of vehicles, of which 8 car brands , 5 brands in the Heavy Commercial Vehicles segment and 1 bicycle Brand</p><p>Today, the cluster employs over 850 employees and its wide range portfolio’s most reputed brands consists of Porsche, Škoda, Alfa Romeo, Jeep, Dodge, Fiat, Nissan, Yutong and UD Trucks. Nissan, which is distributed by flagship company ABC Motors, has been crowned the leading automobile brand in Mauritius 18 times.</p>						</div>
                </div>
                <div class="elementor-element elementor-element-1ab5e6b elementor-align-left elementor-widget elementor-widget-button" data-id="1ab5e6b" data-element_type="widget" data-widget_type="button.default">
                  <div class="elementor-widget-container">
                    <div class="elementor-button-wrapper">
                      <a class="elementor-button elementor-button-link elementor-size-sm" href="https://abcautomobile.mu/about-us/">
                        <span class="elementor-button-content-wrapper">

                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div class="card-group">
        <div class="card mb-3" style={{ maxWidth: '540px' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/169161/gla-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80" width="200px" height="300px" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Mercedes-Benz</h5>
                <p class="card-text">Mercedes-Benz cars price range is Rs 46.05 Lakh to Rs 3.35 Cr. Top 3 Mercedes-Benz car model prices are Mercedes-Benz GLA price (Rs. 51.75 - 58.15 Lakh)</p>
                <p class="card-text"><small class="text-body-secondary">1994</small></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card mb-3" style={{ maxWidth: '540px' }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/1200px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg" class="img-fluid rounded-start" width="200px" height="300px" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Mahindra</h5>
                  <p class="card-text"> Mahindra purchased 100% of Gujarat Tractors from the Government of Gujarat, and in 2017, Mahindra renamed it Gromax Agri Equipment Limited as part of its new brand strategy, and the models continue to be sold as Trakstar.</p>
                  <p class="card-text"><small class="text-body-secondary">october 2 1995</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{ maxWidth: '540px' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/169161/gla-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80" width="200px" height="300px" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">kia</h5>
                <p class="card-text">It is South Korea's second largest automobile manufacturer, after its parent company, Hyundai Motor Company, with sales of over 2.8 million vehicles in 2019.</p>
                <p class="card-text"><small class="text-body-secondary">1994</small></p>
              </div>
            </div>
          </div>
        </div>
        <div></div>




      </div>











    </>
  )
}
export default Home;