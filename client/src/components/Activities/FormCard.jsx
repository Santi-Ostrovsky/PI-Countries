import React from "react";
import styles from "../../styles/Activities/FormCard.module.css";

export default function FormCard(props) {
  const { id, name, flag, state, setState } = props;

  const handleClick = () => {
    setState({
      ...state,
      countries: state.countries.filter((c) => c !== id),
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.close_container}></div>
      <button onClick={handleClick}>❌</button>
      <img src={flag} alt={`${name}'s flag`} className={styles.flag} />
      <div className={styles.captions}>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
}
