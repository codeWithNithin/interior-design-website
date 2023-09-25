import './article-news.css';

const articleList = [
  {
    imgPath: '/article-1.png',
    title: 'Let’s Get Solution For Building\n Construction\n Work',
  },
  {
    imgPath: '/article-2.png',
    title: 'Low Cost Latest Invented\n Interior Designing\n Ideas.',
  },
  {
    imgPath: '/article-3.png',
    title: 'Best For Any Office &\n Business Interior\n Solution',
  },
];

function ArticleNews(props) {
  return (
    <div className="article-news-section">
      <h1 className={`text-align-${props.titleAlignment}`}>Articles & News</h1>
      {props.showContent && (
        <p className="small-paragraph text-align-center">
          It is a long established fact that a reader will be distracted by the
          of readable content <br /> of a page when lookings at its layouts the
          points of using.
        </p>
      )}

      <div className="article-list">
        {articleList.map((article) => (
          <ArticleCard articleObj={article} />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ articleObj }) {
  return (
    <div className="article-card">
      <div className="articcard-head">
        <img src={articleObj.imgPath} alt="" className="article-img" />
      </div>
      <div className="article-card-body">
        <h3> {articleObj.title} </h3>
        <div className="article-date-container">
          <div className="date"> 26 December,2022 </div>
          <div className="article-btn">
            <img src="/elipse.svg" alt="" width="50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleNews;
