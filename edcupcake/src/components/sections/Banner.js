// Creation of a Banner component


const Banner = () => {

    return(
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
                        <p className="s-mb-0 t2">Cupcakes de Aguacate Factory</p>
                        <p>Bienvenido a la pág de Aguacate Industry's. Aquí puede ver una lista de diversos cupcakes y un botón que no sirve pero puede presionar a placer.</p>
                        <a className="button" href="#">Botón inutil.</a>
                    </div>
                </div>
            </div>
        </div> 
    </>
    )
}

export default Banner;