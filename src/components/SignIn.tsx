import styled from "styled-components";

export default function SignIn() {
  return (
    <SignInParent>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
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
