import '../styles/index.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

function Menue() {
  return (
        <nav className="m-2 bg-neutral-900 rounded-md py-2 px-3 w-[360px] text-l font-bold">
          <button className='flex items-center py-1 px-3 gap-3 h-10 transition-color duration-500 text-neutral-400 hover:text-white'>
              <img src='/img/v3.png' className='w-[30px] h-[30px]' />
              <h1>VovkaFy</h1>
            </button>
            <button className='flex items-center py-1 px-3 gap-3 h-10 transition-color duration-500 text-neutral-400 hover:text-white'>
              <HomeIcon sx={{ fontSize: 30 }}/>
              <h1>Главная</h1>
            </button>
            <button className='flex items-center py-1 px-3 gap-3 h-10 transition-color duration-500 text-neutral-400 hover:text-white'>
              <SearchIcon sx={{ fontSize: 30 }}/>
              <h1>Поиск</h1>
            </button>
        </nav>
  );
}

export default Menue;
