import './App.css';
import "./Search.css"
import Header from './Header';
import Sidebar from './Sidebar';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'



function Search() {
  return (
    <div className="App">
      <Header />
      <div className='app_page'>
        <Sidebar />
        <div className='searchPage'>
            <div className='searchPage_filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://cdn3.vectorstock.com/i/thumb-large/76/57/portrait-young-bearded-man-in-eyeglasses-vector-34397657.jpg"
            channel="Good Programming"
            verified
            subs="659K"
            noOfVideos={392}
            description="You can find awesome programming videos here"
            />

            <hr />

            <VideoRow 
            views="1.4M"
            subs="659K"
            description="Do you want a free one to one tutorial.."
            timestamp="59 seconds ago"
            channel="Clever Programmer"
            title="Let's build a Youtube Clone"
            image="https://i.ytimg.com/vi/CNfNPDVTOlY/maxresdefault.jpg"
            />
        </div>
       
      </div>
    </div>
  );
}

export default Search;