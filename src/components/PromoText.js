import React from 'react';
import { useState, useEffect } from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTikTok } from "react-icons/ai";

const getPromoText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/musicpromo.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

export function PromoText({fileName}) {
    const [text, setText] = useState("");
                    
    useEffect(() => {
    getPromoText(`${fileName}.txt`).then(setText).catch(console.error);
    },[fileName]);
    return (
        <>
        <h2>Music Promotion</h2>
          <p>
            {text}
          </p>

          <div className='links-container'>
            <div className='links'>
                <div className='some-link'>
                  <a href='https://www.facebook.com/childrenofthefrost/' ><AiFillFacebook /></a>
                  <span>Children of the Frost Facebook</span>
                </div>
                <div className='some-link'>
                  <a href='https://www.instagram.com/childrenofthefrost/#'><AiFillInstagram /></a>
                  <span>Children of the Frost Instagram</span>
                </div>
                <div className='some-link'>
                  <a href='https://www.youtube.com/@childrenofthefrostband'><AiFillYoutube /></a>
                  <span>Children of the Frost YouTube</span>
                </div>
                <div className='some-link'>
                  <a href='https://www.tiktok.com/@childrenofthefrost'><AiFillTikTok /></a>
                  <span>Children of the Frost TikTok</span>
                </div>  
            </div>
          </div>
        </>
    )
}