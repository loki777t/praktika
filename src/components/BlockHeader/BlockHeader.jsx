import styles from './BlockHeader.module.css';

const BlockHeader = ({ title, text = false, link = false }) => {
  return (
    <div className={styles.blockHeader}>
      <div className={styles.title}>{title}</div>
      <div className={styles.empty}></div>
      {text && link && (
          <>
            <div className={styles.poloska}></div>
            <div className={styles.btn}>{text}</div>
          </>
      )}
    </div>
  );
};

export default BlockHeader;