import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WriteView } from './WriteView';

const WritesList = ({ bo_table }) => {
  const [writes, setWrites] = useState([]);
  const [board, setBoard] = useState({});
  const [total_count, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWrites = async () => {
      try {
        const api_url = `${process.env.REACT_APP_API_BASE_URL}/boards/${bo_table}/writes`;
        console.log(api_url);
        const response = await fetch(api_url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`${bo_table} ${data.detail}` || 'Network response was not ok');
        }
        console.log(data); // 데이터 구조 확인용 콘솔 출력
        if (Array.isArray(data.writes)) {
          setWrites(data.writes);
          setBoard(data.board);
          setTotalCount(data.total_count);
        } else {
          setWrites([]); // 데이터가 배열이 아닌 경우 빈 배열로 설정
          setBoard({}); // 데이터가 배열이 아닌 경우 빈 객체로 설정
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWrites();
  }, [bo_table]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{board.bo_subject}</h1>
      <p>전체게시물수 : {total_count}</p>
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
};

export default WritesList;
