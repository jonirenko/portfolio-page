import React from 'react';
import placeholder from '../images/reactungabunga.jpg';
import { useState, useEffect } from 'react';

const getReactText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/react-text.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

export function ReactText({fileName}) {
    const [text, setText] = useState("");

    useEffect(() => {
            getReactText(`${fileName}.txt`).then(setText).catch(console.error);
        },[fileName]);

    return (
        <>
            <h2>ReactJS & React Native</h2>
            <p>
              {text}
            </p>
            <img src={placeholder} alt="Whoops, you're not meant to see this" className='webdev-img'/>
        </>
    );
};