import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ( {tweets} ) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <div>
       <FeedItem key={index} {...tweet.data} />
       </div>
      ))}
    </div>
  )
}

export default FeedList
