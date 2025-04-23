import React from 'react';
import placeholder from '../images/pos.jpg';
import { useState, useEffect } from 'react';

const getOtherText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/other-skills.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

export function OtherSkills({fileName}) {
    const [text, setText] = useState("");
        
            useEffect(() => {
                    getOtherText(`${fileName}.txt`).then(setText).catch(console.error);
                },[fileName]);

    return (
        <>
            <h2>Other Programming Skills</h2>
            <p>
              {text}
            </p>

            <img src={placeholder} alt='Oops, this is not supposed to be here...' className='webdev-img' />
        </>
    );
};