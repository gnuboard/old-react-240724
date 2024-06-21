import { useParams } from 'react-router-dom';
import PostsList from "./components/WritesList";

const Board01 = () => {
  const { bo_table } = useParams();
  
  return (
    <div>
      <h1>{bo_table} 게시판</h1>
      <p>게시판 페이지입니다.</p>
      <PostsList bo_table={bo_table} />
    </div>
  );
}

export default Board01;