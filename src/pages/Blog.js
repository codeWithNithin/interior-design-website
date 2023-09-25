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
      <ArticleNews titleAlignment="left" showContent="false" />
      <Footer />
    </div>
  );
}

export default Blog;
