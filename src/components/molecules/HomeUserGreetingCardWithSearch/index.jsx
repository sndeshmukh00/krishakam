import HomeScreenSearchBox from '../../atoms/HomeScreenSearchBox'
import HomeUserGreetingCard from '../../atoms/HomeUserGreetingCard'

import React from 'react'

const HomeUserGreetingCardWithSearch = () => {
  return (
    <>
      <HomeUserGreetingCard />
      <HomeScreenSearchBox/> 
    </>
  )
}

export default HomeUserGreetingCardWithSearch;
