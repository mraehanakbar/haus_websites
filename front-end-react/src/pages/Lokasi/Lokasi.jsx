import {
  NavbarComponent,
  FooterComponent,
  NewLocation,
  LocationList,
} from "../../components";
import LocationIter from "./LocationIter";

const Lokasi = () => {
  return (
    <>
      <NavbarComponent />
      <div className="-mt-2">
        {/* <div className="flex justify-center">
          <div className="px-4 w-72">
            <div className="flex justify-center w-full">
              <div className="bg-pink-main w-36 h-1.5"></div>
            </div>
            <h1 className="mt-2.5 font-semibold text-center text-2.5xl">
              Lokasi Store Baru
            </h1>
          </div>
        </div>

        <section className="flex justify-center mt-10">
          <div className=" grid grid-cols-1 md:space-x-6 lg:space-x-20 xl:space-x-40 md:grid-cols-2 items-center text-center px-3">
            <div className="col-span-1 flex justify-center w-88">
              <div>
                <NewLocation
                  title="Haus! Cibadak"
                  alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
                />
                <NewLocation
                  title="Haus! Kebon Pedes"
                  alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
                />
                <NewLocation
                  title="Haus! Ciawi"
                  alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
                />
              </div>
            </div>

            <div className="col-span sm:flex justify-center w-88 ">
              <div>
                <NewLocation
                  title="Haus! Srengseng"
                  alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
                />
                <NewLocation
                  title="Haus! Jalan Baru"
                  alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
                />
                <NewLocation
                  title="Haus! Budi Agung"
                  alamat="Jl. Raya Kresek Rt. 01/12 Duri Kosambi Cengkareng, Jakarta Barat"
                />
              </div>
            </div>
          </div>
        </section> */}

        <section></section>
      </div>
      {/* <!-- STORE LIST HEADER --> */}
      <div className="mt-14 mb-14 flex justify-center">
        <div className="px-4">
          <div className="flex justify-center w-full">
            <div className="bg-pink-main w-36 h-1.5"></div>
          </div>
          <h1 className="mt-2.5 font-semibold text-center text-2.5xl">
            Lokasi Store
          </h1>
          <p className="mt-2.5 text-center text-2xl font-normal">
            Temukan Store terdekat dari lokasimu
          </p>
        </div>
      </div>
      <LocationIter />
      <div className="h-14"></div>

      <FooterComponent />
    </>
  );
};

export default Lokasi;
