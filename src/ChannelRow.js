import React from 'react';
import './ChannelRow.css';
import Avatar from '@mui/material/Avatar';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

const ChannelRow = ({image, channel, subs, noOfVideos, verified, description}) => {
  return (
    <div className='channelRow'>
    <Avatar className='channelRow_logo'
    alt={channel} src={image} />
    <div className='channelRow_text'>
        <h4>{channel} {verified && <CheckCircleOutlineOutlined/>} </h4>
        <p>
        {subs} subscribers • {noOfVideos} videos
        </p>
        <p>
            {description}
        </p>
    </div>
    </div>
  )
}

export default ChannelRow