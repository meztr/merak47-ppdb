import { useState, useEffect } from "react";

const useForm = (loginFunction, validate, isReset) => {
  const [errors, setErrors] = useState({});
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      loginFunction();
      setCredentials({ email: "", password: "" });
      setIsSubmitting(false);
    }
  }, [errors, isReset, isSubmitting, loginFunction]);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(credentials, isReset));
  };

  const handleChange = e => {
    e.persist();
    setCredentials(credentials => ({
      ...credentials,
      [e.target.name]: e.target.value
    }));
  };

  return [credentials, handleChange, handleSubmit, errors];
};

export default useForm;
