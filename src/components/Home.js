import React, { Component } from 'react'

export default class WelcomePage extends Component {
    render() {
        return (
            <section className = "homePage" >
        <nav className = "socialNetworks">
                <div className="container brackets">
                        <a><i className="lni-github-original"></i></a>
                        <a><i className="lni-linkedin-original"></i></a>
                      </div>
        </nav>
      <div className="nf">
          <div>
            <h1 className="nf-r2 ">Nathalie Cortez</h1>
            <h2 className="nf-r1">Frontend Developer / Vanilla Javascript / React / Node </h2>
            <span className="lta-source">Nathalie Cortez</span>
            <span className = "descpritionHome">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

              </span>
          </div>
          
        </div>
        <nav className= "navigation">
                <div className="containerNav brackets">
                        <a className= "navIcons"><i className="lni-home"></i></a>
                        <a className= "navIcons"><i className="lni-user"></i></a>
                        <a className= "navIcons"><i className="lni-code-alt"></i></a>
                        <a className= "navIcons"><i className="lni-folder"></i></a>
                        <a className= "navIcons"><i className="lni-envelope"></i></a>
                        
                      </div>
                    
        </nav>
    </section>
        )
    }
}
