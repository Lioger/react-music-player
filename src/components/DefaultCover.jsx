import { useSelector } from 'react-redux';

const DefaultCover = () => {
  const isDarkThemeActive = useSelector((state) => state.isDarkThemeActive);
  
  return (
    <svg className='song-cover' viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M500 50H200C172.5 50 150 72.5 150 100V400C150 427.5 172.5 450 200 450H500C527.5 450 550 427.5 550 400V100C550 72.5 527.5 50 500 50ZM450 175H375V312.5C375 347 347 375 312.5 375C278 375 250 347 250 312.5C250 278 278 250 312.5 250C326.75 250 339.5 254.75 350 262.75V125H450V175ZM100 150H50V500C50 527.5 72.5 550 100 550H450V500H100V150Z" fill={isDarkThemeActive ? 'white' : '#1e1e23'} />
    </svg>
  );
};

export default DefaultCover;
