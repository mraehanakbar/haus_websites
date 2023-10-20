import {
  NavbarComponent,
  FooterComponent,
  NewLocation,
  ListLokasi,
} from "../../components";
import "./lokasi.css";

const Lokasi = () => {
  return (
    <>
      <NavbarComponent />
      <div className="line">
        <div className="lines"></div>
      </div>
      <div className="title-lokasi-a">
        <h1>Karir di haus! Indonesia</h1>
      </div>
      <div className="newlocation-container">
        <NewLocation
          title="Haus! Cibadak"
          alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
        />
        <NewLocation
          title="Haus! Cibadak"
          alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
        />
        <NewLocation
          title="Haus! Cibadak"
          alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
        />
        <NewLocation
          title="Haus! Cibadak"
          alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
        />
        <NewLocation
          title="Haus! Cibadak"
          alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
        />
        <NewLocation
          title="Haus! Cibadak"
          alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
        />
      </div>
      <div className="line">
        <div className="lines"></div>
      </div>
      <div className="title-lokasi-a">
        <h1>Lokasi Store</h1>
        <p>Temukan Store terdekat dari lokasimu</p>
      </div>
      <div className="list-lokasi">
        <ListLokasi
          kota="Jakarta Pusat"
          daerah={[
            "batang",
            "pekalongan",
            "jakarta",
            "bandung",
            "semarang",
            "semarang",
            "semarang",
            "semarang",
            "semarang",
            "semarang",
            "semarang",
            "semarang",
          ]}
        />
        <ListLokasi kota="Jakarta Pusat" daerah={["batang", "pekalongan"]} />
        <ListLokasi kota="Jakarta Pusat" daerah={["batang", "pekalongan"]} />
        <ListLokasi kota="Jakarta Pusat" daerah={["batang", "pekalongan"]} />
        <ListLokasi kota="Jakarta Pusat" daerah={["batang", "pekalongan"]} />
        <ListLokasi kota="Jakarta Pusat" daerah={["batang", "pekalongan"]} />
      </div>
      <FooterComponent />
    </>
  );
};

export default Lokasi;
