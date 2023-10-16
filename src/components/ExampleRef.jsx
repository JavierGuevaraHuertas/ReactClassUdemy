import { forwardRef, useRef } from "react";

const InputText = forwardRef((props, ref) => {
    return (
        <>
        <input type="text" ref={ref}/>
        </>
    );
});

const ExampleRef = () => { 
    
    const inputFocus = useRef(null);
    
    const handleButtonClick = () => {        
        console.log("me diste click");
        inputFocus.current.focus();
    };

    return (
    <>
        <InputText ref={inputFocus}/>
        <input type="text" ref={inputFocus}/>
        <button onClick={handleButtonClick}>Click me</button>
    </>
    ); 
};
export default ExampleRef; 