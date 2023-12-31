import '../styles/index.css'
import React from 'react';

function AddPlayList() {
  return (
       <div className='absolute mt-[15px] bg-neutral-800 rounded-md w-[180px] text-sm text-left text-white'>
            <button className='text-left w-[170px] m-1 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-sm'>Создать плейлист</button>
            <button className='text-left w-[170px] m-1 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-sm'>Создать папку</button>
       </div>
  );
}

export default AddPlayList;