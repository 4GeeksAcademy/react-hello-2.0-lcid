import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Contain from "./components/Contain";
import MiniCard from "./components/MiniCard";

const cardInformation = {
  text: "Estas para mi son unas de las mejores series , donde cada una cuenta una historia diferente , pero todas tienen un punto en comun , la emocion e intriga y sin olvidar la nostalgia en una de ellas , con unas B.S.O que son una pasada ¡Descubre más sobre ellas!",
  title: "Series del Momento",
  button: "¡Ver más!",
  link: "https://www.imdb.com/es-es/", 
};

const series = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/d/d6/CobraKaiTitleScreen.png",
    title: "Cobra Kai",
    text: "Retoma la historia de Karate Kid, mostrando el reencuentro entre viejos rivales y la evolución de sus técnicas de combate.",
    link: "https://www.imdb.com/es-es/title/tt7221388/",
  },
  {
    img: "https://www.selecta-vision.com/wp-content/uploads/2024/07/ataque-a-los-titanes-4.png",
    title: "Ataque a los Titanes",
    text: "Una épica serie de anime en la que la humanidad lucha por sobrevivir ante gigantes devoradores, explorando temas de libertad y sacrificio.",
    link: "https://www.imdb.com/es/title/tt33175825/",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BM2M4YzdkMTEtMjUyYy00ZWY0LWI5ODQtNGRkZWQ1MzU5MWM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Solo Leveling",
    text: "Basada en el popular webtoon, sigue a un cazador que se transforma en el ser más poderoso de un mundo lleno de monstruos.",
    link: "https://www.imdb.com/es-es/title/tt21209876/",
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/outofthekitchen_instagram_teaser_poster_spain_871c6754.jpeg",
    title: "Daredevil: Born Again",
    text: "Una intensa historia donde el héroe se enfrenta a sus propios demonios, retomando su lucha por la justicia en un mundo corrupto.",
    link: "https://www.marvel.com/",
  },
];

const generarCarta = (array) => {
  return array.map((element, index) => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
        <MiniCard
          img={element.img}
          title={element.title}
          text={element.text}
          link={element.link}
          alt={element.title}
        />
      </div>
    );
  });
};

const Home = () => {
  return (
    <>
      <Navbar/>
      <Card
        text={cardInformation.text}
        title={cardInformation.title}
        button={cardInformation.button}
        link={cardInformation.link}
      />
      <Contain generar={generarCarta} array={series} />
      <div className="container-fluid pie bg-dark text-center align-content-center text-white">
        <p>Copyright 2025 - Luis Cid</p>
      </div>
    </>
  );
};

export default Home;
