import { NavbarComponent, FooterComponent } from "../../components";

import kitkat-blur-bottom-left from "../../assets/images/kitkat-blur-bottom-left.png";
const HomePage_2 = () => {
    return  (
        <>
        <NavbarComponent />
        <div className="relative w-screen h-auto lg:h-screen" style="background-color: #DA1E32;">

    <img className="decoration-bg-kitkat absolute bottom-0 left-0 w-1/3 lg:w-auto"
        src="{% static '/images/kitkat-blur-bottom-left.png' %}" alt="kitkat-bg"/>
    <img className="decoration-bg-kitkat absolute top-0 right-0 w-1/3 lg:w-auto"
        src="{% static '/images/kitkat-blur-top-right.png' %}" alt="Background Kitkat"
        style="transform: rotate(180deg);"/>

    <div className="flex flex-row justify-center px-14 pt-5 lg:px-32">
        <div className="w-2/4 my-auto">
            <img className="logo-haus-kitkat w-3/5 lg:w-1/4" src="{% static '/images/haus-logo.png' %}" alt="Haus Logo"/>
        </div>
        <div className="w-2/4 flex justify-end z-10">
            <img className="logo-haus-kitkat w-3/5 right-0 lg:w-auto right-0" src="{% static '/images/kitkat-logo.png' %}"/>
        </div>
    </div>

    <div className="flex flex-col justify-center lg:flex-row mt-20 lg:mt-px">
        <div className="flex justify-center h-2/5 my-auto lg:w-2/4 lg:justify-end">
            <img className="kitkat-text w-11/12 lg:w-4/5" src="{% static '/images/kitkat-text.png' %}" alt="Kitkat Text"/>
        </div>
        <div className=" flex justify-center h-2/4 lg:w-3/5 lg:justify-start">
            <img className="kitkat-gelas w-full lg:w-8/12" src="{% static '/images/kitkat-gelas.png' %}" alt="Kitkat Gelas"/>
        </div>
    </div>

    <div className="flex lg:absolute right-0 justify-end my-10 lg:mb-28 lg:mt-auto">
        <img className="mr-24 w-1/12 lg:w-20 h-auto" src="{% static '/images/halal-logo.png' %}" alt="Logo Halal"/>
    </div>


    <div className="flex flex-col mx-auto items-center justify-center pb-20 lg:absolute min-w-full lg:pb-10">
        <div className="z-20 text-2xl text-white">Promo</div>
        <img className="z-10 lg:w-20" src="{% static '/images/polygon_arrow.svg' %}" alt="Polygon Arrow"/>
    </div>
    <img className="footer-aksen absolute bottom-0 min-w-full lg:h-28" src="{% static '/images/footer-aksen.png' %}"
        alt="Footer Aksen"/>
    </div>

        <FooterComponent />
        </>
    )
}

export default HomePage_2;