import {Buttons, ButtonImage} from './styledComponents'

const ButtonItems = props => {
  const {buttonDetails, selectedOptions} = props
  const {id, imageUrl} = buttonDetails

  const onSelected = () => {
    selectedOptions(id)
  }
  return (
    <Buttons
      type="button"
      key={id}
      onClick={onSelected}
      data-testid={`${id.toLowerCase()}Button`}
    >
      <ButtonImage src={imageUrl} alt={id} />
    </Buttons>
  )
}

export default ButtonItems
