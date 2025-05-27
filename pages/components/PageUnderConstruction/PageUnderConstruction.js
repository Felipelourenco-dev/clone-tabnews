import styles from "./PageUnderConstruction.module.css";

const PageUnderConstruction = () => {
  return (
    <>
      <video
        className={styles.PageUnderConstructionImage}
        src="/page-construction.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Vídeo de um homem com um drone segurando uma bandeira escrito em construção"
      />
    </>
  );
};

export default PageUnderConstruction;
