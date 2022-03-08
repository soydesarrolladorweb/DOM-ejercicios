import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import {moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_srcoll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
// import speechReader from "./dom/narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj"); // selectores
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown(
        "countdown",
         "Dec 31, 2022 23:59:00",
         "Nunca pares de aprender."
        );
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=A0U7FoCni-k/;SameSite=None/;Secure" target="_blank" rel="noopener">Parque Tayrona - Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/A0U7FoCni-k/;SameSite=None;Secure" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/ooLwqZQpgJBnWUp38/" target="_blank" rel="noopener">Parque Tayrona - Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250403.38537701702!2d-74.19660096379458!3d11.29424055976551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef48b39147045bb%3A0x7060f6927b6eace6!2sLa%20piscinita!5e0!3m2!1ses!2sco!4v1644249063042!5m2!1ses!2sco/" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );

    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

// eventos del teclado
d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode"); 
networkStatus();
// speechReader();