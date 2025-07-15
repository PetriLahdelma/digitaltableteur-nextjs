import React from "react";
import Head from "next/head";
import styles from "./Work.module.css";
import Grid from "../components/Grid/Grid";

const Work = () => {
  return (
    <>
      <Head>
        <title>Work | Digitaltableteur</title>
        <meta
          name="description"
          content="Selected projects and experiments by Digitaltableteur"
        />
        <meta property="og:title" content="Work | Digitaltableteur" />
        <meta
          property="og:description"
          content="Selected projects and experiments by Digitaltableteur"
        />
        <meta property="og:image" content="/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work | Digitaltableteur" />
        <meta
          name="twitter:description"
          content="Selected projects and experiments by Digitaltableteur"
        />
        <meta name="twitter:image" content="/logo512.png" />
      </Head>
      <div className={styles["workPage"]}>
        <section className={styles.works}>
          <Grid columns={3} gap="2rem" className={styles.worksGrid}>
            <a
              href="work/new-things-co"
              rel="noopener noreferrer"
              className={styles.workItem}
            >
              <img
                src="new_things_co_item.webp"
                alt="New Things Co project link."
              />
            </a>
            <div className={styles.workItem}>
              <a
                href="work/illustrations"
                rel="noopener noreferrer"
                className={styles.workItem}
              >
                <img src="ice-cream.webp" alt="Illustrations project link" />
              </a>
            </div>
            <div className={styles.workItem}>
              <a
                href="work/garage-junction"
                rel="noopener noreferrer"
                className={styles.workItem}
              >
                <img
                  src="check_pattern@2x.webp"
                  alt="Garage Junction project link"
                />
              </a>
            </div>
          </Grid>
        </section>
      </div>
    </>
  );
};

export default Work;
