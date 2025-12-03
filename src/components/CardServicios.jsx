import { Link } from "react-router-dom";
import "./cardServicios.css";

const CardServicios = () => {
  const services = [
    {
      title: "Atención personalizada las 24hs",
      img: "https://www.promedco.com/images/NOTICIAS_2020/reducir-estres-de-mascotas-1.jpg",
      path: "/turnos"
    },
    {
      title: "Odontología animal",
      img: "https://clinicasalvatierra.com/wp-content/uploads/2016/10/d1b9ee01b329194cdd628d50a14aa4c6.jpg",
      path: "/turnos"
    },
    {
      title: "Peluquería",
      img: "https://www.clinicaveterinariamh.com/wp-content/uploads/2023/08/45.jpg",
      path: "/turnos"
    },
    {
      title: "Servicios para animales exóticos",
      img: "https://lh5.googleusercontent.com/proxy/luibrMYDRM4XM0-eThjyvn9SeYdlamG4-7UV1Za2BwizE3ZSpC5YiEud7hcsJh7G3A2PLkgAFFTErAb71Bq29rpEgxqnWuIvKO72FtT6lrU5d9IJiLzue2TM_B1tUCuagK6T5Zfw9X8o5SUz6YJcFGor8T4S1plDB3XkE7xwHO4kiiKVi1N4DE5xm6Xt",
      path: "/turnos"
    },
  ];

  return (
    <div className="container my-4">
      <div className="row g-3">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3 position-relative">
            <Link to={service.path} className="text-decoration-none">
              <div className="card card-servicios text-center p-3">
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <img src={service.img} alt={service.title} className="extra-img" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardServicios;

