import React, { useState } from 'react';
import LatestWrites from './LatestWrites';

function Home() {
  const [selectedBoard, setSelectedBoard] = useState('free');
  const [rows, setRows] = useState(5);

  const boards = [
    { name: 'free', rows: 3 },
    { name: 'notice', rows: 5 },
    { name: 'qa', rows: 7 },
    { name: 'gallery', rows: 9 }
  ];

  const handleBoardClick = (board) => {
    setSelectedBoard(board.name);
    setRows(board.rows);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>

      <div>
        {boards.map((board) => (
          <button 
            key={board.name} 
            onClick={() => handleBoardClick(board)}
            style={{ marginRight: '10px', padding: '10px', cursor: 'pointer' }}
          >
            {board.name}
          </button>
        ))}
      </div>

      <LatestWrites bo_table={selectedBoard} rows={rows} />
    </div>
  );
}

export default Home;
