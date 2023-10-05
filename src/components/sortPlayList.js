import React from 'react';
import '../styles/index.css'

// eslint-disable-next-line react/prop-types
function SortPlayList({ active, handleClick }) {

  return (
    <div className='absolute mt-[15px] bg-neutral-800 rounded-md w-[180px] text-sm text-left text-white'>
      <button onClick={()=>handleClick('recentlyListen')}
       className={`text-left w-[170px] m-1 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-sm ${active === 'recentlyListen' ? 'text-[#1ed760]' : ''}`}>Недавно прослушано</button>
      <button onClick={()=>handleClick('recentlyAdd')}
       className={`text-left w-[170px] m-1 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-sm ${active === 'recentlyAdd' ? 'text-[#1ed760]' : ''}`}>Недавно добавленные</button>
      <button onClick={()=>handleClick('Alph')}
       className={`text-left w-[170px] m-1 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-sm ${active === 'Alph' ? 'text-[#1ed760]' : ''}`}>По алфавиту</button>
      <button onClick={()=>handleClick('Autor')}
       className={`text-left w-[170px] m-1 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-sm ${active === 'Autor' ? 'text-[#1ed760]' : ''}`}>По автору</button>
    </div>
  );
}

export default SortPlayList;
