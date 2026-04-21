"use client"
import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6'

interface Props {
    id: string;
}

export const FavoriteBookmark = ({ id }: Props) => {

    const [isFavorite, setIsFavorite] = useState(localStorage.getItem(id) ?? false);

    console.log(localStorage.getItem(id))
    console.log(isFavorite)

    const handleMarkFavorite = () => {
        if (isFavorite) {
            localStorage.removeItem(id)
            setIsFavorite(false)
        } else {
            localStorage.setItem(id, "true");
            setIsFavorite(true);
        }
    }
    return (
        <Button onClick={handleMarkFavorite} className='bg-none active:opacity-90' variant='ghost'  >
            {
                isFavorite ? (<FaBookmark className='hover:cursor-pointer' size={24} />) : (<FaRegBookmark className='hover:cursor-pointer' size={24} />)
            }
        </Button>
    )
}
