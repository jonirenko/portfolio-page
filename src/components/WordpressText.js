import React from 'react';
import placeholder from '../images/wordpressnoob.jpg';
import { useState, useEffect } from 'react';

const getWPText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/wordpress-text.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

export function WordpressText({fileName}) {
    const [text, setText] = useState("");
    
        useEffect(() => {
                getWPText(`${fileName}.txt`).then(setText).catch(console.error);
            },[fileName]);

    return (
        <>
            <h2>WordPress</h2>
            <p>
              {text}
            </p>

            <img src={placeholder} alt='Move along, nothing to see here!' className='webdev-img' />
        </>
    );
};