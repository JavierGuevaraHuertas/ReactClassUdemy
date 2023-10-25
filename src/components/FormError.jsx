const FormError = ({error}) => { 
    return <>
    {error && (
        <p
        id="outlined_error_help"
        className="mt-2 text-xs text-red-600 dark:text-red-400"
      >
        <span className="font-medium"></span>
        {error.message}
      </p>
    )}</> 
};

export default FormError;