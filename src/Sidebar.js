import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>

    <SidebarRow selected Icon={HomeIcon} title ="Home"/>
    <SidebarRow Icon = {ExploreOutlinedIcon} title ="Explore"/>
    <SidebarRow Icon = {AccessTimeOutlinedIcon} title ="Shorts"/>
    <SidebarRow Icon = {SubscriptionsOutlinedIcon} title ="Subscriptions"/>
    <hr />
    <SidebarRow Icon = {VideoLibraryOutlinedIcon} title ="Library"/>
    <SidebarRow Icon = {HistoryOutlinedIcon} title ="History"/>
    <SidebarRow Icon = {OndemandVideoOutlinedIcon} title ="Your videos"/>
    <SidebarRow Icon = {WatchLaterOutlinedIcon} title ="Watch Later"/>
    <SidebarRow Icon = {ThumbUpOutlinedIcon} title ="Liked Videos"/>
    <SidebarRow Icon = {MenuOpenOutlinedIcon} title ="Show More"/>
   
    
    </div>
  )
}

export default Sidebar