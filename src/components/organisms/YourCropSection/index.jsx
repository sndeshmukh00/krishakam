import React from 'react'
import CropCircleSlider from '../../molecules/CropCircleSlider'
import AddCropSection from '../../atoms/AddCropSection'

const YourCropSection = ({crops}) => {
  return (
    <>
      <AddCropSection />
      <CropCircleSlider crops={crops}/>
    </>
  )
}

export default YourCropSection
