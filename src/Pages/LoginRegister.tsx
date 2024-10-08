import styled from "styled-components";
import SignIn from "../components/SignIn";
import { useParams } from "react-router-dom";
import SignUp from "../components/SignUp";
export default function LoginRegister() {
  const { sign_in } = useParams();

  return (
    <AuthorizationParent>
      <Authorization>
        {sign_in === "sign_in" ? <SignIn /> : <SignUp />}
      </Authorization>
    </AuthorizationParent>
  );
}

const AuthorizationParent = styled.div`
  background-color: #1a1c22;
  min-height: 100vh;
  overflow: auto;
`;

const Authorization = styled.div`
  width: 70%;
  position: fixed;
  top: 59%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
