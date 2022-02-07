import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import Card from './Card';

const Backdrop = (props) => {
    return <div onClick={props.onConfirm} className={classes.backdrop} />
}
const Button = (props) => {
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};
const ModalOverLay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2> {props.title}</h2>
            </header>
            <div className={classes.content}>
                <p> {props.message}</p>
            </div>
            <footer className={classes.actions}>
                {props.children}
                <Button className={classes.button} id={props.id} onClick={props.onConfirm}>Хорошо</Button>
            </footer>
        </Card>
    )
}
const Modal = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'),
            )}
            {ReactDOM.createPortal(
                <ModalOverLay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('modal-root'),
            )}
        </div>
    )
}
export default Modal;