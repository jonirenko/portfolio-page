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
                    <h3>Children of the Frost - Castaway (single)</h3>
                    <iframe title='spotify-player' src="https://open.spotify.com/embed/album/2IqzEpTAj7V7WzoeZLu44k?utm_source=generator" width="460" height="355" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </>
    );
};