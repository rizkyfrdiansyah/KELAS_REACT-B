/** Images */
import logo from "../../assets/img/logo.png";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";

const About = () => {
  const images = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpeg", "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg"];

  const gallery_images = images.map((image) => require(`../../assets/img/${image}`));

  return (
    <>
      <Header />
      <div className={styles.about_container}>
        <img src={logo} alt="Logo" className={styles.logo} />

        <h2 className={styles.title}>MComp 2022</h2>

        <div className={styles.about}>
          <p>
            MComp 2022 yang merupakan singkatan dari Malvino Competition 2022 merupakan sebuah kompetisi gitar duo yang diselenggarakan oleh seorang mahasiswa dari Universitas Mikroskil bernama Malvino Austin Tanura. Kompetisi ini dapat
            diikuti oleh mahasiswa S1 dari seluruh pergurutan tinggi di Indonesia. Kompetisi ini bertujuan untuk mengembangkan dan memberi wadah bagi para pecinta gitar duo yang saat ini masih sangat sedikit yang menyelenggarakan kompetisi
            untuk gitar duo.
          </p>
        </div>

        <h2>Image Gallery</h2>

        <div className={styles.gallery}>
          {gallery_images.map((gallery_image, gallery_imageIdx) => (
            <div className={styles.gallery_item} key={gallery_imageIdx}>
              <img src={gallery_image} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
