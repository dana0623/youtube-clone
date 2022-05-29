import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className='recommendedVideos_videos'>
            <VideoCard 
                title="Become a Web Developer in 10 minutes | 2019/2020"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhL9vgSCn0-lhLoKUVz6T5I8o6z4HImBkglLpNvlXpvtVxo7uVCMTZfLwjRHrSxqPNAZ8&usqp=CAU"
                channel="Sonny Sangha"
                image="https://i.insider.com/5d41b07ea209d312642937ac?width=700"
            />
            <VideoCard 
                title="ReactJS Tutorial For Beginners | 2022"
                views="1.3M Views"
                timestamp="2 days ago"
                channelImage="https://i.pinimg.com/originals/ee/81/b0/ee81b07446b151f39d60a8b6e74914a2.jpg"
                channel="Clever Programmer"
                image="https://i.ytimg.com/vi/I6tbhNUU96Y/maxresdefault.jpg"
            />
            <VideoCard 
                title="A day in the life of a google software engineer | 2020"
                views="20K Views"
                timestamp="1 month ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s900-c-k-c0x00ffffff-no-rj"
                channel="Google Engineer"
                image="https://i.ytimg.com/vi/oHBFD8cfXho/maxresdefault.jpg"
            />
            <VideoCard 
                title="Build a iMessage Clone with React.js for Beginners | 2020"
                views="78K Views"
                timestamp="3 days ago"
                channelImage="https://i.pinimg.com/originals/ee/81/b0/ee81b07446b151f39d60a8b6e74914a2.jpg"
                channel="Clever Programming"
                image="https://i.ytimg.com/vi/HF65cySUYao/maxresdefault.jpg"
            />
             <VideoCard 
                title="How to build Instagram Clone with React JS"
                views="2.3M Views"
                timestamp="Streamed 1 year ago"
                channelImage="https://i.pinimg.com/originals/ee/81/b0/ee81b07446b151f39d60a8b6e74914a2.jpg"
                channel="Clever Programmer"
                image="https://i.ytimg.com/vi/mEPm9w5QlJM/maxresdefault.jpg"
            />
            <VideoCard 
                title="Build a Twitter Clone with React JS | 2020"
                views="192K Views"
                timestamp="1 month ago"
                channelImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd47835c-cde6-46d1-8221-8df5c805fb95/da5ffqi-334c4bfc-f0d0-48c5-952e-17414d610c3d.png/v1/fill/w_1024,h_1024,q_80,strp/self_portrait_for_my_youtube_channel_s_profile_pic_by_lucaslikesdrawing_da5ffqi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2JkNDc4MzVjLWNkZTYtNDZkMS04MjIxLThkZjVjODA1ZmI5NVwvZGE1ZmZxaS0zMzRjNGJmYy1mMGQwLTQ4YzUtOTUyZS0xNzQxNGQ2MTBjM2QucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PNwtBNS__T9G1zqNp3HNwUwf6Ls1DANx_1JyctsYMAo"
                channel="Backbench Coder"
                image="https://i.ytimg.com/vi/Fdi6FRCT1uY/maxresdefault.jpg"
            />
            <VideoCard 
                title="Lets Learn React Native | 2021"
                views="100K Views"
                timestamp="7 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s900-c-k-c0x00ffffff-no-rj"
                channel="freeCodeCamp.org"
                image="https://repository-images.githubusercontent.com/228016359/25861500-a2fa-11eb-90fb-5e044b30649c"
            />
      
        </div>
    </div>
  )
}

export default RecommendedVideos