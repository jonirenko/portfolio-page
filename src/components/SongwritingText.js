import React from 'react';
import { useState,useEffect } from 'react';

const getSongsText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/songwriting.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

export function SongwritingText({fileName}) {
    const [text, setText] = useState("");
            
                useEffect(() => {
                        getSongsText(`${fileName}.txt`).then(setText).catch(console.error);
                    },[fileName]);
    
    return (
        <>
            <h2>Songwriting</h2>
            <p>
                {text}
            </p>
            <div className='embed-container'>
                <div className='embed'>
                    <h3>Children of the Frost - Last Winter's Child EP</h3>
                    <iframe title='spotify-player' width="460" height="355" src="https://open.spotify.com/embed/album/0mg42Kj98OdgMuh38yKbu3?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className='embed'>
                    <h3>Death March - My original song</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HdK2mJogi60?si=zeD-RwYe7oWiY4uE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
};