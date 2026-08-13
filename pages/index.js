import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </Head>
      <div className="navbar">
        <div className="nav-logo borders">
            <div className="logo" style={{backgroundImage: "url('/amazon_logo.png')"}}>
            </div>
        </div>
    
        <div className="icon border">
            
            <div className="nav-address">
                <p className="add-first">Deliver to</p>
                <div className="icons">
                    <i className="fa-solid fa-location-dot"></i>
                <p className="add-sec">India</p>
                </div>
            </div>
        </div>

        <div className="nav-search">
            <select className="nav-option jk">
                <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="nav-box" />
            <div className="search-icon find">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <div className="language border">
            <div className="flag">
            </div>
            <div className="flag-text">
                <p>EN</p>
            </div>
            <div className="down">
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </div>

        <div className="nav-sign border">
            <p className="Hello">Hello, sign in</p>
            <p className="Account">
                Account & Lists
                <span className="up"><i className="fa-solid fa-caret-down"></i></span>
            </p>
        </div>

        <div className="nav-order border">
            <p className="Hello">Returns</p>
            <p className="Account">& Orders</p>
        </div>

        <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
        </div>
    </div>
    <div className="options">
        <div className="first-options">
            <span className="border">
                <i className="fa-solid fa-bars"></i>
                <span className="all">All</span>
            </span>
            <p className="border">Today's Deals</p>
            <p className="border">Customer Service</p>
            <p className="border">Registry</p>
            <p className="border">Gift Cards</p>
            <p className="border">Sell</p>
        </div>
        <div className="second-options">
            <p className="border">Shop deals in Electronics</p>
        </div>
    </div>

    <div className="hero-section">
        <div className="hero-msg">
            <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="https://www.amazon.in/">Click here to go to amazon.in</a></p>
        </div>
    </div>

    <div className="shop-section">
        <div className="box1 box">
            <h2>Clothes</h2>
            <div className="img-p" style={{backgroundImage: "url('/box1_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">Shop now</a></p>
        </div>
        <div className="box2 box">
            <h2>Health & Personal Care</h2>
            <div className="img-p" style={{backgroundImage: "url('/box2_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">Shop now</a></p>
        </div>
        <div className="box3 box">
            <h2>Furniture</h2>
            <div className="img-p" style={{backgroundImage: "url('/box3_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">See more</a></p>
        </div>
        <div className="box4 box">
            <h2>Electronics</h2>
            <div className="img-p" style={{backgroundImage: "url('/box4_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">See more</a></p>
        </div>
        
        <div className="box1 box">
            <h2>Beauty Picks</h2>
            <div className="img-p" style={{backgroundImage: "url('/box5_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">See more</a></p>
        </div>
        <div className="box2 box">
            <h2>Pet Care</h2>
            <div className="img-p" style={{backgroundImage: "url('/box6_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">See more</a></p>
        </div>
        <div className="box3 box">
            <h2>New Arrival in Toys</h2>
            <div className="img-p" style={{backgroundImage: "url('/box7_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">Shop now</a></p>
        </div>
        <div className="box4 box">
            <h2>Discover Fashion Trends</h2>
            <div className="img-p" style={{backgroundImage: "url('/box8_image.jpg')"}}></div>
            <p className="text-dec"><a href="https://amazon.in">Shop now</a></p>
        </div>
    </div>

    <footer>
        <div className="panel1">
            Back to top
        </div>

        <div className="nav-panel">
                <ul>
                    <p>Get to Know Us</p>
                    <a href="" className="under">Careers</a>
                    <a href="" className="under">Blog</a>
                    <a href="" className="under">About Amazon</a>
                    <a href="" className="under">Investor Relations</a>
                    <a href="" className="under">Amazon Devices</a>
                    <a href="" className="under">Amazon Science</a>
                </ul>

                <ul>
                    <p>Make Money with Us</p>
                    <a href="" className="under">Sell products on Amazon</a>
                    <a href="" className="under">Sell on Amazon Business</a>
                    <a href="" className="under">Sell apps on Amazon</a>
                    <a href="" className="under">Become an Affiliate</a>
                    <a href="" className="under">Advertise Your Products</a>
                    <a href="" className="under">Self-Publish with Us</a>
                    <a href="" className="under">Host an Amazon Hub</a>
                    <a href="" className="under">Make More Money with Us</a>
                </ul>

                <ul>
                    <p>Amazon Payment Products</p>
                    <a href="" className="under">Amazon Business Card</a>
                    <a href="" className="under">Shop with Points</a>
                    <a href="" className="under">Reload Your Balance</a>
                    <a href="" className="under">Amazon Currency Converter</a>
                </ul>

                <ul>
                    <p>Let Us Help You</p>
                    <a href="" className="under">Amazon and COVID-19</a>
                    <a href="" className="under">Your Account</a>
                    <a href="" className="under">Your Orders</a>
                    <a href="" className="under">Shipping Rates & Policies</a>
                    <a href="" className="under">Returns & Replacements</a>
                    <a href="" className="under">Manage Your Content and Devices</a>
                    <a href="">Amazon Assistant</a>
                    <a href="">Help</a>
                </ul>
        </div>

        <div className="panel3">
            <div className="comp"></div>
        </div>

        <div className="panel4">
            <div className="pages">
                <a href="">Conditions of Use</a>
                <a href="">Privacy Notice</a>
                <a href="">Your Ads Privacy Choices</a>
            </div>

            <div className="copyright">
                © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    </footer>
    </>
  );
}
