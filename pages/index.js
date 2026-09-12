import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon Clone | Shop Online</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
            <div className="logo"></div>
        </div>
    
        <div className="nav-search">
            <select className="nav-option">
                <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="nav-box" />
            <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <div className="nav-cart">
            <i className="fa-solid fa-cart-shopping" style={{marginRight: '5px'}}></i>
            Cart
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
          backgroundImage: "url('/hero_image.jpg')",
          height: '350px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: '2rem'
      }}>
        <div style={{
            backgroundColor: 'white',
            padding: '1rem',
            width: '90%',
            textAlign: 'center',
            fontSize: '0.9rem'
        }}>
            You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="https://www.amazon.in/" style={{color: '#007185'}}>Click here to go to amazon.in</a>
        </div>
      </div>

      {/* Product Grid */}
      <div className="shop-section">
        {[
            { title: "Clothes", img: "/box1_image.jpg" },
            { title: "Health & Personal Care", img: "/box2_image.jpg" },
            { title: "Furniture", img: "/box3_image.jpg" },
            { title: "Electronics", img: "/box4_image.jpg" },
            { title: "Beauty Picks", img: "/box5_image.jpg" },
            { title: "Pet Care", img: "/box6_image.jpg" },
            { title: "New Arrival in Toys", img: "/box7_image.jpg" },
            { title: "Discover Fashion Trends", img: "/box8_image.jpg" }
        ].map((item, idx) => (
            <div key={idx} className="box">
                <h2>{item.title}</h2>
                <div className="img-p" style={{backgroundImage: `url('${item.img}')`}}></div>
                <p className="text-dec"><a href="https://amazon.in">Shop now</a></p>
            </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <div className="panel1">Back to top</div>
        <div className="nav-panel">
            <ul>
                <p>Get to Know Us</p>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">About Amazon</a>
            </ul>
            <ul>
                <p>Make Money with Us</p>
                <a href="#">Sell products</a>
                <a href="#">Become an Affiliate</a>
            </ul>
            <ul>
                <p>Amazon Payment Products</p>
                <a href="#">Business Card</a>
                <a href="#">Shop with Points</a>
            </ul>
        </div>
      </footer>
    </>
  );
}
