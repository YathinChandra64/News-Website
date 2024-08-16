import './NewsItem.css';
const NewsItem = ({ title, description, src, url }) => {
  const maxLength = 100; // Adjust as needed
  
  const truncatedTitle = title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  const truncatedDescription = description.length > maxLength ? description.slice(0, 50) + "..." : description;

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "370px" }}>
      {src ? (
        <img src={src} style={{height:"200px",width:"360px "}} className="card-img-top" alt="News" />
      ) : (
        <img src="https://th.bing.com/th?id=OIP.VWChxFEpEc14eZmHhy9yowHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" style={{height:"200px",width:"360px "}} className="card-img-top" alt="Default" />
      )}
      <div className="card-body">
        <h5 className="card-title">{truncatedTitle}</h5>
        <p className="card-text">{truncatedDescription}</p>
        <a href={url} className="btn btn-primary">
          Read More..
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
