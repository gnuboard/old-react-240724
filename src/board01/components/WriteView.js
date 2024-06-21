import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WriteView = () => {
  const { bo_table, wr_id } = useParams();
  console.log(bo_table, wr_id);
  const [write, setWrite] = useState(null);
  const [comments, setComments] = useState([]); // 댓글 목록 상태 변수 추가
  const [images, setImages] = useState([]); // 이미지 목록 상태 변수 추가
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const api_url = `${process.env.REACT_APP_API_BASE_URL}/boards/${bo_table}/writes/${wr_id}`;
        console.log(api_url);
        const response = await fetch(api_url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || 'Network response was not ok');
        }
        console.log(data); // 데이터 구조 확인용 콘솔 출력
        setWrite(data);
        setComments(data.comments); // 댓글 목록 상태 업데이트
        if (Array.isArray(data.images)) {
          setImages(data.images); // 이미지 목록 상태 업데이트
        } else {
          setImages([]); // 데이터가 배열이 아닌 경우 빈 배열로 설정
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [bo_table, wr_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!write) {
    return <div>No write found</div>;
  }

  return (
    <div>
      <h1>{write.wr_subject}</h1>
      <p>작성자 : {write.wr_name}</p>
      <p>작성일 : {write.wr_datetime}</p>
      <p>조회수 : {write.wr_hit}</p>
      <ul>
        {images.map(image => (
          <li key={image.img_id}>
            <img src={`https://g6.demo.sir.kr/${image.bf_file}`} alt={image.img_alt} />
          </li>
        ))}
      </ul>
      <p dangerouslySetInnerHTML={{ __html: write.wr_content }}></p>
      <dd>
        <h3>Comments</h3>
        <ul>
          {comments.map(comment => (
            <li key={comment.wr_id}>
              <p>{comment.save_content}</p>
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
};

export default WriteView;
