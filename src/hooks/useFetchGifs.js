import { useEffect, useState } from 'react'
import { getGiffs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState([true])

    const getImages = async() => {
      const newImages = await getGiffs(category);
      setImages(newImages);
      setIsLoading(false);
    }


    useEffect( () => {
      getImages();
    }, [ ] )
    


  return {
    images: images,
    isLoading: isLoading
  }
}
