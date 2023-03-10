import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
        <section id="tittle">
      <h1>¡BIENVENID@ A MOVIENIGHT!</h1>
      </section>
      <div className="imageintro">
          <img className="movie" src="https://www.allperfectstories.com/wp-content/uploads/2022/09/PR-Movies-1280x720.png" alt="imageHome"/>
        </div>

        

      <h1 className="introHeader" > TEN LA MEJOR NOCHE DE PELÍCULAS CON TUS SERES QUERIDOS</h1>


      <div className="info">
        <div className="infotext">

      <p className="introtext">
          No hay nada mejor que una buena pelicula despues de un día estresante.
              </p>
            <p className="introtext">
              Por esto creamos movienight que te permite almacenar los mejores titulos asi como tus alimentos preferidos para acompañar tu momento.
              </p>
            <p className="introtext">
          ¡Anímate a disfrutar e unirte a nuestra comunidad! 
           </p>
           </div>
           <div className="imageintro">
          <img className="movie" src="https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="imageHome"/>
        </div>
    
    </div>

    </div>

  );
}

export default HomePage;

