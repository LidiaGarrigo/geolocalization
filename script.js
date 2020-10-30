
const obtenerLocalizacion = ()=> {
    if(navigator.geolocation) {
        document.getElementById("soporte").innerHTML =
        "La Geo-Localizacion HTML5 está soportada en este navegador.";
        navigator.geolocation.getCurrentPosition(updateLocation);
    } 
}    

const updateLocation = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let pre = position.coords.accuracy;
    console.log(lat, lon,pre)
} 
window.onload=obtenerLocalizacion;

/* [33.0,65.0]  */

/* EJERCICIO HECHO EN LA CARPETA DE AJAX_GEOLOCALIZACION */