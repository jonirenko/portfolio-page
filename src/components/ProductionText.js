import React from 'react';
import { useState,useEffect } from 'react';

const getProductionText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/production.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

export function ProductionText({fileName}) {
    const [text, setText] = useState("");
                
                    useEffect(() => {
                            getProductionText(`${fileName}.txt`).then(setText).catch(console.error);
                        },[fileName]);
    return (
        <>
        <h2>Music Production</h2>
          <p>
            {text}
          </p>

          <div className='embed-container'>
            <div className='embed'>
                <h3>Afterglow - My original song</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/01YxGIdiiLg?si=xKa0FLAuJJdRDhUl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>            
            <div className='embed'>
            <h3>I Will Find You - My original song</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vHqGmCZaXzw?si=zIeP_dx23HHs1ayK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </>
    );
};