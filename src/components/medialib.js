import React,{useState} from 'react';
import '../styles/index.css'
import PlayList from './playList'
import AddIcon from '@mui/icons-material/Add';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import SortPlayList from './sortPlayList';
import AddPlayList from './addPlayList';
import usePopup from '../hooks/usePopUp';

function MediaLib() {
    const {isOpen: showAddPlayList, togglePopup: setShowAddPlayList, popupRef: showAddPlayListRef} = usePopup(false)
    const {isOpen: showSorted, togglePopup:setShowSorted, popupRef: showSortedRef} = usePopup(false)
    const [green,setGreen] = useState('recentlyListen');

  return (

        <div className='m-2 bg-neutral-900 rounded-md py-2 px-3 w-[360px] text-l font-bold'>
            <div className='flex justify-between'>
                <button className='flex items-center py-1 px-3 gap-3 h-10 transition-color duration-500 text-neutral-400 hover:text-white'>
                    <ViewStreamIcon sx={{ fontSize: 30 }}/>    
                    <h1>Медиатека</h1>
                </button>
                <div className='flex items-center py-1 px-3 gap-3 h-10' ref={showAddPlayListRef}>
                    <div ref={showAddPlayListRef}>
                        <button onClick={()=>{setShowAddPlayList()}} className='hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white'>
                            <AddIcon sx={{ fontSize: 25 }}/>
                            {showAddPlayList?  <AddPlayList  /> : " "}       
                        </button>     
                    </div>             
                    <button className='hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white'>
                        <ArrowForwardIcon sx={{ fontSize: 25 }}/>             
                    </button>  
                </div>
              
            </div>
            <div className='flex font-medium gap-5 text-sm pt-4'>
                <div className='bg-neutral-800 py-2 px-3 rounded-full transition-color text-white hover:text-white hover:bg-neutral-700'>
                    <button>Плейлисты</button>             
                </div>                  
                <div className='bg-neutral-800 py-2 px-3 rounded-full transition-color text-white hover:text-white hover:bg-neutral-700'>
                    <button>Исполнители</button>                  
                </div>
            </div>
            <div className='flex font-medium gap-5 text-sm pt-4 justify-between'>
                <div className='cursor-pointer py-1 px-1.5 rounded-full  hover:bg-neutral-800 rounded-full transition-color duration-500 text-neutral-400 hover:text-white'>
                    <SearchIcon sx={{ fontSize: 20 }}/>
                </div>
                <div ref={showSortedRef} className='py-1 px-2 rounded-full transition-color text-neutral-400 hover:text-white cursor-pointer'>
                    <button onClick={()=>{setShowSorted()}}>
                        Недавно прослушано {showSorted? '▼':'▲'}
                        {showSorted ? <SortPlayList active={green} handleClick={setGreen} /> : " "}
                    </button>

                </div>
            </div>
            <div>
                <PlayList />
            </div>
        </div>
  );
}

export default MediaLib;
