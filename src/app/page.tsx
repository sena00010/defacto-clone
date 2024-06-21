"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import OfferSlider from "@/components/OfferSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <OfferSlider />
        <div className={styles.videoFrame}>
          <img
            width="1300"
            height="700"
            src="https://dfcdn.defacto.com.tr/Mobile/imageor_desktop_e7638b2e-8991-48d1-bbbf-9f9b9d7c7110_1130abea-fef3-43e6-8f7e-e55bc42d7821_DI_429.jpg"
          />
          <video width="1300" height="700" autoPlay muted>
            <source
              src="https://dfcdn.defacto.com.tr/responsive/video/2024/haziran/afra1-d.mp4"
              type="video/mp4"
            />
          </video>
          <div className={styles.options}>
            <div className={styles.bannerContainer}>
              <button
                onClick={() => {
                  console.log("hellloooo");
                }}
                className={styles.bannerButtons}
              >
                Çanta
              </button>
              <button className={styles.bannerButtons}>
                Yazlık Aksesuarlar
              </button>
              <button className={styles.bannerButtons}>
                Terlik & Sandalet
              </button>
              <button className={styles.bannerButtons}>Hasır</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
