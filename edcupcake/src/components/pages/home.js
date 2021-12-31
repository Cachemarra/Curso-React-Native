import Cupcakes from "./cupcakes";

const Home = () => (
<>
    <div className="main-banner img-container dark-color">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img 
                className="main-banner__img" 
                src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" 
                alt="banner"
            />
            <div className="main-banner__data s-center">
                <p className="s-mb-0 t2">EDteam Styleguides</p>
                <p>La presente guía de estilos define los componentes de diseño de EDteam y cómo implementarlos en nuestros productos.</p>
                <a className="button" href="/">Modelo de botón</a>
          </div>
        </div>
      </div>
    </div>
    <Cupcakes peticion="cupcakes?sabor_like=Chocolomo"/>
</>
)

export default Home;