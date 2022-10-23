/** Styles */
import styles from "./style.module.css";

const Team = ({ team, handleClick }) => {
  return (
    <div className={styles.team} onClick={() => handleClick(team.id)}>
      <h4>
        {team.teamName}
        <span className={styles.hidden}> - {team.university}</span>
      </h4>
      <h4 className={styles.hidden}>
        <span>&gt;</span>
      </h4>
    </div>
  );
};

export default Team;
