import styles from "../Card/Card.module.css";

const Card = (props) => {
  const styling = styles.card + ' ' + props.className;
  return <div className={styling}>{props.children}</div>;
};

export default Card;
