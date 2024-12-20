import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  orgName: string;
  instituteId: string;
  inn: string;
  person: string;
  phone: string;
  email: string;
};

export const Radio = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          minLength: {
            value: 3,
            message: "minLength is 3",
          },
        })}
      />
      {errors.email?.message}

      <input type="submit" />
    </form>
  );
};
