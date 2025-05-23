import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles.js';

export function NoteItem({ isNew = false, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type='button'
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}