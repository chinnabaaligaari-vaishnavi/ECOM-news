import React, { useEffect, useState } from "react";
import axios from "axios";
function NewsFeed() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("/api/news").then(res => setNews(res.data));
  }, []);
  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map(n => (
          <li key={n._id}>{n.title}: {n.summary}</li>
        ))}
      </ul>
    </div>
  );
}
export default NewsFeed;
