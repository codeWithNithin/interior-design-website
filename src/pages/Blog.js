import Header from '../components/Header/Header';
import ArticleNews from '../components/article-news/ArticleNews';
import Footer from '../components/footer/Footer';
import HeroBanner from '../components/hero-banner/HeroBanner';
import './blog.css';
function Blog() {
  return (
    <div>
      <Header />
      <HeroBanner
        imgPath="/article-news.jpg"
        title="Articles & News"
        subTitle=" Home / Blog "
      />

      <div className="latest-post">
        <h1> Latest Post </h1>
      </div>

      <div className="latest-article">
        <div className="article-post">
          <img src="/latest-post.png" alt="" />
        </div>
        <div className="article-content">
          <h3>
            Low Cost Latest Invented Interior <br /> Designing Ideas
          </h3>
          <p className="small-paragraph m-t-22">
            Lorem ipsum dolor sit amet, adipiscing Aliquam <br /> eu sem vitae
            turpis dignissim maximus.posuere <br /> in.Contrary to popular
            belief.
          </p>
          <p className="small-paragraph m-t-22">
            Lorem Ipsum is not simply random text. It has <br /> roots in a
            piece of classica.
          </p>

          <div className="article-date-container m-t-41">
            <div className="date"> 26 December,2022 </div>
            <div className="article-btn">
              <img src="/elipse.svg" alt="" width="50" />
            </div>
          </div>
        </div>
      </div>

      <div className="m-t-100">
        <ArticleNews titleAlignment="left" showContent="false" />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
