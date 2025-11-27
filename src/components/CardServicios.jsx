import "./CardServicios.css"

const CardServicios = () => {
  const services = [
    "Atención personalizada las 24hs",
    "Odontología animal",
    "Peluquería",
    "Servicios para animales exóticos",
  ]

  return (
    <div className="container my-4">
      <div className="row g-3">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <div className="card card-servicios h-100 text-center p-3">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title">{service}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardServicios