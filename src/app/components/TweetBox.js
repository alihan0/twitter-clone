"use client";
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '@/icons/icon';
import React, {useState} from 'react';
import { collection, doc, setDoc, addDoc, Firestore ,serverTimestamp} from "firebase/firestore"; 
import db from '@/firebase';


const TweetBox = () => {
  const [content, setContent] = useState("");
  
  const sendTweet = async() => {
    if(content !== "" ){
      const docRef = await addDoc(collection(db, "feed"), {
        name: "Alihan Öztürk",
        avatar : "https://cdn-www.bluestacks.com/bs-images/Icon_com.sixjoy.game_.blue_.jpg",
        timestamp: serverTimestamp(),
        username: "@alihan",
        content
      });
      setContent("");
    }
  }
  
  
  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's happening?"  onChange={(e) => setContent(e.target.value)}  value={content} />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium" onClick={sendTweet}>Tweet</button>
      </div>
    </div>
  )
}

export default TweetBox
