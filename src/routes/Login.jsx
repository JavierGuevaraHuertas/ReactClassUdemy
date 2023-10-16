import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import FormInput from "../components/FormInput";
import { formValidate } from "../utils/formValidate";

const Login = () => {

    const {loginUser} = useContext(UserContext);
    const navegate = useNavigate();
    const {required, patternEmail, minLength, validateTrim} = formValidate();

    const {register, 
        handleSubmit, 
        formState: {errors}, 
        getValues, 
        setError
        } = useForm();

    const onSubmit = async({email, password}) => {
        try{
             await loginUser(email, password);
              navegate("/");
        }catch(error){
              console.log(error.code);
              setError("firebase", {
               message: erroresFirebase(error.code),
             });                    
            }
    };

    return (
        <>            
            <h1>Login</h1>
            <FormError error={errors.firebase}/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                type="email" 
                placeholder="Ingrese Email"
                {...register("email", {
                    required,
                 pattern: patternEmail,
                })}
            ></FormInput>
            <FormError error={errors.email}/>
            <FormInput 
                type="password" 
                placeholder="Ingrese Password"
                {...register("password", {
                    minLength,
                  validate: validateTrim,                   
                })}
                >
            </FormInput>
            <FormError error={errors.password}/>                
            <button type="submit">Login</button>
            </form>            
        </>
    );
};

export default Login;