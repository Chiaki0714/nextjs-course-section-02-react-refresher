import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

export default function Modal({ children }) {
  const navigate = useNavigate();
  function handlerClose() {
    navigate('..');
  }
  return (
    <>
      <div className={classes.backdrop} onClick={handlerClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
