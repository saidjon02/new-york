import React, { useEffect } from 'react';
import paral1 from '../../imgs/parallax (1).png';
import paral2 from '../../imgs/parallax (2).png';
import paral3 from '../../imgs/parallax (3).png';
import paral4 from '../../imgs/parallax (4).png';
import paral5 from '../../imgs/parallax (5).png';
import paral7 from '../../imgs/parallax (7).png';
import paral8 from '../../imgs/parallax (8).png';
import portImg1 from '../../imgs/nyc img (1).png';
import portImg2 from '../../imgs/nyc img (2).png';
import portImg3 from '../../imgs/nyc img (3).png';
import portImg4 from '../../imgs/nyc img (4).png';
import portImg5 from '../../imgs/nyc img (5).png';
import portImg6 from '../../imgs/nyc img (6).png';
import portImg7 from '../../imgs/nyc img (7).png';
import portImg8 from '../../imgs/nyc img (8).png';
import portImg9 from '../../imgs/nyc img (9).png';
import hamburger from '../../imgs/hamburger.jpg';
import nycimg from '../../imgs/new york.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function Home() {
  useEffect(() => {
    // AOSni faollashtiramiz
    AOS.init({
      duration: 1000, // Animatsiyaning davomiyligi (ms)
      easing: 'ease-in-out', // Animatsiya uchun easing
      once: true, // Faqat bir marta animatsiya bo'lsin
    });
  }, []);

  return (
    <div className="wrap">
      <Helmet>
        <title>New York</title>
        <meta
          name="description"
          content="New York is one of the most famous and largest cities in the USA, known worldwide as an economic, cultural, financial, and artistic hub."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home">
        <div className="parallax">
          <h2 className="connon" data-aos="fade-down">
            NEW <span className="spann"></span> YORK
          </h2>
          <div className="box-imgs"></div>
          <img src={paral1} alt="parallax img" className="parallax-img le4" style={{ zIndex: 9 }} />
          <img src={paral2} alt="parallax img" className="parallax-img le1" style={{ zIndex: 4 }} />
          <img src={paral3} alt="parallax img" className="parallax-img le5" style={{ zIndex: 2 }} />
          <img src={paral4} alt="parallax img" className="parallax-img le3" style={{ zIndex: 5 }} />
          <img src={paral5} alt="parallax img" className="parallax-img le2" style={{ zIndex: 3 }} />
          <img src={paral7} alt="parallax img" className="parallax-img le1" style={{ zIndex: 1 }} />
          <img src={paral8} alt="parallax img" className="parallax-img le5" style={{ zIndex: 1 }} />
        </div>
      </div>
      <div className="home-section container">
        <div className="home-row">
          <div className="home-box">
            <h2 className="hs-title">Introduction</h2>
            <p className="hs-text">
              New York is a city that never sleeps, offering a unique blend of culture, history, and
              modernity. From the bustling streets of Manhattan to the serene beauty of Central
              Park, there's something here for everyone. Discover the charm of this iconic city and
              create memories that last a lifetime
            </p>
            <Link to={'/not'}>
              <button className="hs-btn">Visit to New York</button>
            </Link>
          </div>
          <div className="home-box">
            <img src={nycimg} alt="there is a img" />
          </div>
        </div>
      </div>
      <div className="bg-img">
        <div className="places">
          <div className="container">
            <h2 className="p-title">Places</h2>
            <p className="p-text">
              Every corner of New York tells a story. Whether you're walking across the historic
              Brooklyn Bridge, admiring the art at the Metropolitan Museum, or enjoying the skyline
              from the Empire State Building, you'll be captivated by the city's diverse
              attractions. Explore the must-see landmarks and hidden gems that make New York truly
              special.
            </p>
            <Link to={'/not'}>
              <button className="p-btn hs-btn">See NYC</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="portfolio container">
        <h2 className="port-title">Pictures for Travel</h2>
        <p className="p-text">
          New York is the most beautiful and colorful city in the world, and every photo tells a
          story. The city's famous landmarks, the bright lights of Times Square, the tranquility of
          Central Park, or the stunning view of the Brooklyn Bridge captivate every traveler.
        </p>
        <div className="port-row">
          <div className="p-box-imgs">
            <img src={portImg1} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg2} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg3} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg4} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg5} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg6} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg7} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg8} alt="portfolio imgs" className="port-imgs" />
          </div>
          <div className="p-box-imgs">
            <img src={portImg9} alt="portfolio imgs" className="port-imgs" />
          </div>
        </div>
      </div>
      <div className="food">
        <div className="home-section container">
          <div className="food-row">
            <div className="home-box">
              <img src={hamburger} alt="there is a img" />
            </div>
            <div className="home-box">
              <h2 className="hs-title">Food NYC</h2>
              <p className="hs-text">
                Indulge in New York's vibrant food scene, where every bite is a journey around the
                world. From classic New York-style pizza to gourmet dishes crafted by world-renowned
                chefs, the city offers a culinary experience like no other. Pair it with Broadway
                shows and cultural festivals to truly embrace the spirit of New York.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">See NYC foods</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="admin container">
        <h2 className="port-title">The person who created this site</h2>
        <p className="p-text">
          The creator of this website is Fozilov Saidjon, who has developed various websites,
          including ones similar to this New York site. His portfolio can be found at{' '}
          <Link to={'https://saidjon01.netlify.app'} className="link" target="_blanck">
            https://saidjon01.netlify.app
          </Link>
          .
        </p>
      </div>
      <h1>Beautiful New York City</h1>
    </div>
  );
}

export default Home;
