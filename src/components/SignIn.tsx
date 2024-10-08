import { useForm } from "react-hook-form";
import styled from "styled-components";
type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <SignInParent>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("email", { required: "This input is required" })}
          type="email"
          placeholder="Email"
        />
        {errors.email ? <p>{errors.email?.message}</p> : ""}
        <input
          {...register("password", { required: "This input is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password ? <p>{errors.password?.message}</p> : ""}

        <button>Sign in</button>
      </form>
    </SignInParent>
  );
}

const SignInParent = styled.div`
  display: flex;
  justify-content: center;
  form {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      padding: 5px;
    }
  }
`;
