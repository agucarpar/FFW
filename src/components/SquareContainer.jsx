import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedFont
} from '../redux/actions/actions'

function SquareContainer (props) {
  const dispatch = useDispatch()

  // Cogiendo el valor desde el state
  const reduxSelectedFont = useSelector(state => state.fontsReducer.selectedFont ? state.fontsReducer.selectedFont : undefined)

  const [isSelected, setIsSelected] = useState(false)

  const colorBlindLabel = 'color-blind-label'

  function handlerInputSelection (id) {
    dispatch(selectedFont(id))
  }

  function handlerOnFocus (color) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(color))
  }

  useEffect(() => {
    if (reduxSelectedFont === props.squareData.id) { setIsSelected(true) } else { setIsSelected(false) }
  }, [reduxSelectedFont, props.squareData.id])

  return (
    <div className='font-wrapper__font-section__wrapper'>
      <div className='font-wrapper__font-section__wrapper__card-wrapper' style={{ opacity: isSelected === true ? '50%' : '100%' }}>
        <div className='font-wrapper__font-section__wrapper__card-wrapper__square'>
          <div className='font-wrapper__font-section__wrapper__card-wrapper__square__color' style={{ backgroundColor: props.squareData.color }}>
            <p>
              {props.squareData.abbr}
            </p>
          </div>
        </div>
        <div className='font-wrapper__font-section__wrapper__card-wrapper__input-wrapper'>

          <input
            id={props.squareData.id}
            name="font"
            value={props.squareData.id}
            onChange={ () => handlerInputSelection(props.squareData.id)}
            type="radio"
            onFocus={() => handlerOnFocus(props.squareData[colorBlindLabel])}
          />
          <label htmlFor={props.squareData.id}>{props.squareData.label}</label>

        </div>
      </div>
      <p className='font-wrapper__font-section__wrapper__color-reader'>
        {props.squareData[colorBlindLabel]}
      </p>
    </div>
  )
}

export default SquareContainer
