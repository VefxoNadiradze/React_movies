import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";

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
    <>
      <HomeLinkPar>
        <Link to="/">
          Home <IoMdHome />
        </Link>
      </HomeLinkPar>
      <PageName>Sign In</PageName>
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

          <div className="buttons">
            <button>Sign in</button>
            <Link to="/Register/sign_up">Registration</Link>
          </div>
        </form>
      </SignInParent>
    </>
  );
}

const HomeLinkPar = styled.div`
  position: absolute;
  top: -50px;

  @media screen and (max-width: 400px) {
    top: -80px;

    left: 50%;
    transform: translateX(-50%);
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #ff4343;
    text-decoration: none;
    font-size: 17px;
    @media screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const PageName = styled.h2`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: #ff4343;

  @media screen and (max-width: 400px) {
    font-size: 17px;
  }
`;

const SignInParent = styled.div`
  display: flex;
  justify-content: center;
  form {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    p {
      color: #ff4343;
      font-size: 12px;
      margin-top: -15px;
      margin-left: 5px;
    }
    input {
      padding: 15px 10px;
      border-radius: 5px;
      border: none;
      background-color: #242731;
      background: #242731;
      color: #ff4343;
      outline: none;
      border: 2px solid #ff4343;

      &::placeholder {
        color: #ff4343;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      button {
        width: max-content;
        font-size: 15px;
        padding: 7px 12px;
        cursor: pointer;
        background-color: #242731;
        border: 2px solid #ff4343;
        border-radius: 5px;
        color: #ff4343;
      }

      a {
        color: #ff4343;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 70%;
    }
    @media screen and (max-width: 670px) {
      width: 100%;

      a {
        font-size: 14px;
      }
      button {
        font-size: 13px;
      }
    }
  }
`;
