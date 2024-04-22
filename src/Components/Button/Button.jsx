import styles from "./Button.module.css"
const Button = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.onClick();
  }
  return (
    <div className={styles.commonButton + ' ' + props.className}>
      <button onClick={clickHandler} disabled={!props.disabled}>{props.buttonName}</button>
    </div>
  );
};

export default Button;
