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

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        <title>Beautiful New York</title>
        <meta
          name="description"
          content="New York is one of the most famous and largest cities in the USA, known worldwide as an economic, cultural, financial, and artistic hub."
        />
        <link rel="canonical" href="https://beautiful-newyork.netlify.app/" />
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
            <LazyLoadImage
              src={nycimg}
              alt="Beautiful New York"
              effect="blur" // Blur effekti
            />
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
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg1}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg2}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg3}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg4}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg5}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg6}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg7}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg8}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
          <div className="p-box-imgs">
            <LazyLoadImage
              effect="blur"
              width="100%"
              src={portImg9}
              alt="portfolio imgs"
              className="port-imgs"
            />
          </div>
        </div>
      </div>
      <div className="food">
        <div className="home-section container">
          <div className="food-rowss">
            <div className="home-box order2">
              <LazyLoadImage
                effect="blur"
                src="https://www.spectator.co.uk/wp-content/uploads/2020/10/GettyImages-1281735311-820x550-1.jpg"
                alt="there is a img"
                className='sssddd'
              />
            </div>
            <div className="home-box">
              <h2 className="hs-title">Donald Trump</h2>
              <p className="hs-text">
              Donald Trump — 45-chi AQSh prezidenti, biznesmen, televidenie shaxsiyati va ko‘chmas mulk magnati. U 1946-yil 14-iyunda Queens, New Yorkda tug‘ilgan. Trump ko‘plab biznes imperiyalarini boshqarish, ko‘chmas mulk, mehmonxona va o‘yin-kulgi sanoatlarida faoliyat yuritgan.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">Donald Trump</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="food">
        <div className="home-section container">
          <div className="food-rowss">
            <div className="home-box">
              <h2 className="hs-title">Statua of Liberty</h2>
              <p className="hs-text">
                Statue of Liberty is a colossal statue recognized as a symbol of freedom and
                democracy worldwide, and it is a symbol of the United States. Given to the United
                States by France in 1886 as a gift, the statue is located on Liberty Island in New
                York and marks the entrance for visitors. The statue stands 93 meters tall, and the
                torch at the top can be imagined as a light representing freedom.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">See Statua of Liberty</button>
              </Link>
            </div>
            <div className="home-box order">
              <LazyLoadImage
                effect="blur"
                src="https://lp-cms-production.imgix.net/2020-10/GettyRF_534570599.jpg"
                alt="there is a img"
                className='sssddd'
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="food">
        <div className="home-section container">
          <div className="food-rowss">
            <div className="home-box order2">
              <LazyLoadImage
                effect="blur"
                src="https://downtownny.com/wp-content/uploads/2023/12/120423_bkbridge_1024x576-828x576.jpg"
                alt="there is a img"
                className='sssddd'
              />
            </div>
            <div className="home-box">
              <h2 className="hs-title">Brooklyn Bridge</h2>
              <p className="hs-text">
                The Brooklyn Bridge is one of the most famous and historic bridges in New York City,
                built in 1883. It connects the Manhattan and Brooklyn boroughs and is one of the
                oldest suspension bridges in the world. The bridge spans 1,834 meters and stands out
                with its unique architecture and specially installed cable system.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">See Brooklyn Bridge</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="food">
        <div className="home-section container">
          <div className="food-rowss">
            <div className="home-box">
              <h2 className="hs-title">World Trade Center</h2>
              <p className="hs-text">
                World Trade Center's two twin towers (North Tower and South Tower) were built in the
                1970s and became an inseparable part of New York's skyline. On September 11, 2001,
                two airplanes crashed into the WTC, causing both buildings to collapse. This event
                became one of the most tragic terrorist attacks in world history, resulting in the
                loss of over 3,000 lives.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">World Trade Center</button>
              </Link>
            </div>
            <div className="home-box order">
              <LazyLoadImage
                effect="blur"
                src="https://ca-times.brightspotcdn.com/dims4/default/49edb7d/2147483647/strip/true/crop/2000x1347+0+0/resize/1200x808!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2b%2Fd8%2Fd1cca6577d1a553dfae7588b4d93%2Fla-xpm-photo-2001-sep-12-na-sept-11-attack-201105-01"
                alt="there is a img"
                className='sssddd'
              />
            </div>
          </div>
        </div>
      </div>
      <div className="food">
        <div className="home-section container">
          <div className="food-row">
            <div className="home-box order2">
              <LazyLoadImage
                effect="blur"
                src="https://media.cntraveler.com/photos/550b2b2e8857ed037e15d95f/master/pass/one-world-trade-center.jpg"
                alt="there is a img"
              />
            </div>
            <div className="home-box">
              <h2 className="hs-title">One World Trade Center</h2>
              <p className="hs-text">
                One World Trade Center (commonly referred to as the Freedom Tower) is a new building
                constructed after the collapse of the two twin towers of the original World Trade
                Center. Construction began in 2006, and the building was completed in 2013. It is
                the tallest building in New York City.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">One World Trade Center</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="food">
        <div className="home-section container">
          <div className="food-row">
            <div className="home-box">
              <h2 className="hs-title">Times Square</h2>
              <p className="hs-text">
                Times Square is one of the most famous and vibrant places in New York, located at
                the central part of Manhattan Island. It is situated at the intersection of 42nd
                Street and Broadway, making it one of the busiest and most iconic landmarks in the
                city.
              </p>
              <Link to={'/not'}>
                <button className="hs-btn">Times Square</button>
              </Link>
            </div>
            <div className="home-box order">
              <LazyLoadImage
                effect="blur"
                className='sssddd'
                src="https://www.exp1.com/blog/wp-content/uploads/sites/7/2020/06/Times-Square-1-1.jpg"
                alt="there is a img"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="food">
        <div className="home-section container">
          <div className="food-row">
            <div className="home-box order2">
              <LazyLoadImage effect="blur" src={hamburger} alt="there is a img" />
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
          . If you need site my phone number: <span className="link"> +998 94 837 70 08</span>
        </p>
      </div>
      <h1>Beautiful New York City</h1>
    </div>
  );
}

export default Home;
