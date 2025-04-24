import React from 'react';
import { useState, useEffect } from 'react';

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
                <p>Links go here</p>
            </div>
          </div>
        </>
    )
}