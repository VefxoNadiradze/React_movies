import styled from "styled-components";
import SignIn from "../components/SignIn";
export default function LoginRegister() {
  return (
    <AuthorizationParent>
      <SignIn />
    </AuthorizationParent>
  );
}

const AuthorizationParent = styled.div`
  background-color: red;
  width: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
