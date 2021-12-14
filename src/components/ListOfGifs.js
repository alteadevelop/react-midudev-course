import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs({params}) {
    const [gifs, setGifs] = useState([])

    const { keyword } = params;

    useEffect(() => {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs))
    }, [keyword])

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}>
                </Gif>
            )
        }
    </div>

}