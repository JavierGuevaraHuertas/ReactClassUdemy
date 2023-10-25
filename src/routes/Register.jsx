import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import { formValidate } from "../utils/formValidate";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import Button from "../components/Button";
import ButtonLoading from "../components/ButtonLoading";


const Register = () => { 

    const navegate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {registerUser} = useContext(UserContext);
    const {required, patternEmail, minLength, validateTrim, validateEquals } = formValidate();
    const {register, handleSubmit, formState: {errors}, getValues, setError
    } = useForm();

    const onSubmit = async({email, password}) => {
        try{
            setLoading(true);
           await registerUser(email, password);
           navegate("/");
        }catch(error){
           console.log(error.code);
           const {code, message} = erroresFirebase(error.code);
           setError(code, {message});                    
           } finally {
            setLoading(false);
           }
        };
        return (
            <>
            <Title text="Register"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email" 
                    placeholder="Ingrese Email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                    label="Ingresa tu correo"
                    error={errors.email}
                ></FormInput>
                <FormError error={errors.email}/>
                <FormInput 
                type="password" 
                placeholder="Ingrese Password"
                {...register("password", {
                    minLength,
                  validate: validateTrim,                   
                })}
                label="Ingresa tu password"
                error={errors.password}
                >
                </FormInput>
                <FormError error={errors.password}/>
                <FormInput
                type="password" 
                placeholder="Ingrese Password"
                {...register("repassword", {
                    validate: validateEquals(getValues("password")),
                })}
                label="Repite password"
                error={errors.repassword}
                >
                    <FormError error={errors.repassword}/>
                </FormInput>
                <Button text="Register" type="submit" loading={loading}/>  
            </form>
            </>
        );
};

export default Register;