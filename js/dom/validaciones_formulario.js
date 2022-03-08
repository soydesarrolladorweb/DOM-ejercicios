const d = document;

export default function contactFormValidations(){  
 /*
  * Capturando los datos del formulario (los requeridos)
 */
    const $form = d.querySelector(".contact-form"),
     $inputs = d.querySelectorAll(".contact-form [required]");
    
    //console.log($inputs);
    /*
     * Por cada input vas a hacer lo siguiente
    */
    $inputs.forEach(input =>{
        /*
         * Creamos dinamicamente ese span
        */
        const $span = d.createElement("span");
        /*
         * Le asignamos como atributo id el valor que viene en nuestro input en su propiedad name
        */
        $span.id = input.name;
        /*
         * A este span que estamos creando dinamicamente en su propiedad textContent ponle lo que venga en el atributo title del input
        */
        $span.textContent = input.title;

        /*
         * Al span en su lista de clases agregale las siguientes:
        */
        $span.classList.add("contact-form-error", "none");

        /*
         * Insertamos el span inmediatamente como hermano posterior del input y se le agrega el elemento (span).
        */
        input.insertAdjacentElement("afterend", $span);
    });

    /*
     * Para realizar las validaciones lo vamos hacer mientras el usuario esta digitando con el metodo Keyup, no al final.
    */

    /*
     * Con el metodo "keyup" vas a ejecutar la siguiente función
    */
    d.addEventListener("keyup", (e)=>{
        /*
         * La delegación de eventos ocurrira cuando el e.target coincida con el siguiente selector(".contact-form[required]");
        */
        if(e.target.matches(".contact-form [required]")){
            /*
             * Creamos una variable que se llame $input para asignar e.target y creamos una variable llamada pattern con un operador de
             * Cortocircuito, para decirle si no tiene un atributo pattern entonces seguramente tiene un dataAttribute con un dataset.
            */
            let $input = e.target,
             pattern = $input.pattern || $input.dataset.pattern;

            //console.log($input, pattern);
            if(pattern && $input.value !== ""){
                //console.log("El input tiene patrón");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                 ? d.getElementById($input.name).classList.add("is-active")
                 : d.getElementById($input.name).classList.remove("is-active");
            }

            if(!pattern){
                //console.log("El input No tiene patrón");
                return $input.value === ""
                 ? d.getElementById($input.name).classList.add("is-active")
                 : d.getElementById($input.name).classList.remove("is-active");
            }

        }
    });

    d.addEventListener("submit", (e)=>{
        e.preventDefault();
        // alert("Enviando Formulario...");

        const $loader = d.querySelector(".contact-form-loader"),
         $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
    });
}

/*
 * 
*/