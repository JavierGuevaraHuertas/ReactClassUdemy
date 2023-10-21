export const formValidate = (getValues) => { 
    return {
        required: {
            value: true,
            message: "campo obligatorio"
        },  
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Formato de email incorrecto"
        }, 
        minLength: {
            value: 6,
            message: "Minimo 6 caracteres"
        },
        validateTrim: {
            trim: (v) => {
                if(!v.trim()){ 
                    return "No seas payaso";
                }
                return true;
        },  
        },
        validateEquals(value) {
            return {
                equals: (v) => v === value || "No coincide las contraseñas",
            }
        },                              
    }
 }