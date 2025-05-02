import React, {useState} from 'react'

export default function Component() {

  const [text, setText] = useState()
  const [update, setUpdated] = useState()

  const textOnChange = (event) => {
    setText(event.target.value)
  }
  const buttonOnClick = (event) => {
    setUpdated(text)
  }
  
  return (
    <div>
      Mi componente
      <br />

      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actulizar</button>
      <p>Texto input: {text}</p>
      <p>texto actualizado: {update}</p>
    </div>
  )
}
