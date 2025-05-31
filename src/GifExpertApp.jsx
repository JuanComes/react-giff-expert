import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

const [categories, setCategories] = useState(["AOE2"])

  const onAddCategory = (newCategory) => {

    // Testeo 1
    if( categories.includes(newCategory) ) return;

    // Testeo 2 
    setCategories([ newCategory, ...categories])
  }

  return (
    <>  
    
      <h1>GifExpertApp</h1>
  
      <AddCategory 
        onNewCategory = { (value) => onAddCategory (value) }
      />

      { 
        categories.map( (category) => {
          return (
          <GifGrid 
          key={category}  
          category={category}
          /> 
          );

        })  
      }

    </>
  )
}


