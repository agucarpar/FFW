import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedFont
} from '../redux/actions/actions'




function SquareContainer(props) {

   // Cogiendo el valor desde el state
  const reduxSelectedFont = useSelector(state => state.fontsReducer.selectedFont ? state.fontsReducer.selectedFont : undefined)


  const dispatch = useDispatch()

  const [isSelected, setIsSelected] = useState(false)



  function handlerInputSelection(id) {

    dispatch (selectedFont(id))

  }

  useEffect(() => {


    if(reduxSelectedFont === props.squareData.id) {setIsSelected(true)}
    else {setIsSelected(false)}


    },[reduxSelectedFont, props.squareData.id]
  )





  return (
    <div className='font-wrapper__font-section__input-wrapper' style={{opacity: isSelected === true ? '50%' : '100%'}}>
      <div className='font-wrapper__font-section__input-wrapper__square'>
        <div className='font-wrapper__font-section__input-wrapper__square__color' style={{ backgroundColor: props.squareData.color }}>
          <p>
            {props.squareData.abbr}
          </p>
        </div>
      </div>
      <div className='font-wrapper__font-section__input-wrapper__input'>
        <input
          id={props.squareData.id}
          name="font"
          value={props.squareData.id}
          onChange={ ()=>handlerInputSelection(props.squareData.id)}
          type="radio"
        />
        <label htmlFor={props.squareData.id}>{props.squareData.label}</label>
      </div>
    </div>
  )
}

export default SquareContainer