import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LatestWrites({ bo_table, rows }) {
  const [writes, setWrites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const refreshInterval = 10000; // 10초마다 새로고침

  const fetchWrites = async () => {
    try {
      const api_url = `${process.env.REACT_APP_API_BASE_URL}/board-new/writes/${bo_table}?rows=${rows}`;
      console.log(api_url);
      const response = await fetch(api_url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${data.detail}` || 'Network response was not ok');
      }
      console.log(data); // 데이터 구조 확인용 콘솔 출력

      const writesData = data[bo_table];
      if (Array.isArray(writesData)) {
        setWrites(writesData);
      } else {
        setWrites([]); // 데이터가 배열이 아닌 경우 빈 배열로 설정
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWrites();
    const intervalId = setInterval(fetchWrites, refreshInterval);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [bo_table]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Latest Writes</h2>
      <p>{'{'} bo_table : {bo_table} , rows : {rows} {'}'}</p>
      <ul>
        {writes.map(write => (
          <li key={write.wr_id}>
            <Link to={`/board/${bo_table}/${write.wr_id}`}>{write.wr_subject}</Link>
            {/* <p dangerouslySetInnerHTML={{ __html: write.wr_content }}></p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestWrites;
