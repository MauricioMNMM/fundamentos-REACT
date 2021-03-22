import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg",
      titulo: "Image 3D",
      descripcion: "Terreno 3D",
      categoria: "FTO",
    },
    {
      imagen:
        "https://marcianosmx.com/wp-content/uploads/2013/08/minimoo64_fractals_01.jpg",
      titulo: "Wolf Neon",
      descripcion: "Flor que sale de dia",
      categoria: "Flores",
    },
  ];
  return (
    <div>
      <Barra />
      <Wallpapers />
      <div className="Tarjetas">
        {data.map((item) => {
          return <Tarjeta {...item} />;
        })}
        <Tarjeta
          imagen="https://media.istockphoto.com/photos/astronaut-deep-space-image-science-fiction-fantasy-in-high-resolution-picture-id1153308175?k=6&m=1153308175&s=612x612&w=0&h=_DHjK_PgfSmezWxaJJZ8IRdOG59f_j-mKiC0vJxfdSs="
          titulo="Atronauta"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg"
          titulo="Humo de colores"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
          titulo="Colors"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nSqYJJ0AYaoU3JrIUJRn88AZ4KvN9V3qqA&usqp=CAU"
          titulo="Paisajes"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://imagenesfrasesbonitas.com/wp-content/uploads/2020/01/5b2c795b253480df4408c6fc9aa002c0820df1c0_00.jpg"
          titulo="Flor de Leon"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg"
          titulo="Flor de Leon"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://static.t13.cl/images/original/2018/12/1544264433-8.jpg"
          titulo="Flor de Leon"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
        <Tarjeta
          imagen="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/leon-wallpaper.jpg"
          titulo="Flor de Leon"
          descripcion="Flor que sale de dia"
          categoria="Flores"
        />
      </div>
    </div>
  );
}

function Tarjeta(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.imagen} alt="" />
      <div className="card_info">
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <h6>{props.categoria}</h6>
      </div>
    </div>
  );
}
function Barra(props) {
  return (
    <nav className="navegador">
      <h2>Behance</h2>
      <div className="nav1">
        <p>Discover</p>
        <p>Jobs</p>
        <p>Sign Up</p>
      </div>
      <div className="nav2">
        <img src="search.png" alt="" />
        <p>Sign in</p>
        <img src="" alt="" />
        <p>Adobe</p>
      </div>
    </nav>
  );
}
function Wallpapers(props) {
  return (
    <div className="wall">
      <h4>Showcase & Discover Creative Work</h4>
    </div>
  );
}
export default App;
