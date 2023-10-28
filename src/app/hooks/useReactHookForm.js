import { useForm, Controller } from "react-hook-form";

// Custom hook for form validation
const useFormValidation = () => {
  const {
    control,
    reset,
    setValue,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return {
    register,
    setValue,
    reset,
    watch,
    handleSubmit,
    errors,
    control,
    Controller,
  };
};

export default useFormValidation;
