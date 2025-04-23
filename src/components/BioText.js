import React from 'react';
import { useState, useEffect } from 'react';

const getBioText = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/biotext1.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
};

const getBioText2 = async () => {
    const res = await fetch(`${process.env.PUBLIC_URL}/${'text-files/biotext2.txt'}`);

    if (!res.ok) {
        throw res;
    }

    return res.text();
}

export function BioText({fileName}) {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    useEffect(() => {
        getBioText(`${fileName}.txt`).then(setText).catch(console.error);
        getBioText2(`${fileName}.txt`).then(setText2).catch(console.error);
    },[fileName]);

    return (
        <>
            <p>{text}</p>
            <p>{text2}</p>
        </>
    )
}