import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess, signInFailure } from "../../redux/auth/Actions";
import {
  BottomTitle,
  Checkbox,
  CheckboxArea,
  CheckboxIcon,
  CheckboxLabel,
  Checkmark,
  Container,
  EyeButton,
  FacebookButton,
  ForgotPassword,
  Form,
  GoogleButton,
  H3,
  H4,
  Heading,
  Icon,
  Input,
  InputArea,
  InputWrapper,
  PrimaryButton,
  SecondaryButton,
  SocialArea,
  Wrapper,
} from "./Login.styles";
import {
  CheckmarkIcon,
  EyeIcon,
  FacebookIcon,
  GoogleIcon,
  PasswordIcon,
  UserIcon,
} from "../../components/LoginPageIcons/Icons";
import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../../utils/api";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); 
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Giriş başarısız');
      }
      
      const data = await response.json();
      console.log("Login response data:", data);
      
      const { token, user } = data;
      
      dispatch(signInSuccess({
        ...user,
        token
      }));

      navigate('/home');
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.error("Login error:", error.message);
    }
  };
  
  const tooglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <Wrapper>
      <Container>
        <Heading>
          <H3>
            Welcome to{" "}
            <span>
              Easy
              <span>DEV</span>
            </span>
          </H3>
          <H4>Start your business easily</H4>
        </Heading>
        <Form>
          <InputArea>
            <span>Username</span>
            <InputWrapper>
              <Icon>
                <UserIcon />
              </Icon>
              <Input name="username" type="text" placeholder="Name" value={formData.username} onChange={(e)=> setFormData({...formData, username:e.target.value})} />
            </InputWrapper>
          </InputArea>
          <InputArea>
            <span>Password</span>
            <InputWrapper>
              <Icon>
                <PasswordIcon />
              </Icon>
              <Input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />

              <EyeButton
                type="button"
                onClick={tooglePasswordVisibility}
                active={passwordVisible ? "true" : "false"}
              >
                <EyeIcon />
              </EyeButton>

              <ForgotPassword>Forgot a password?</ForgotPassword>
            </InputWrapper>
          </InputArea>
          <CheckboxArea>
            <Checkbox type="checkbox" id="remember_me" name="remember-me" />
            <CheckboxIcon></CheckboxIcon>
            <Checkmark>
              <CheckmarkIcon />
            </Checkmark>
            <CheckboxLabel htmlFor="remember_me">Remember me</CheckboxLabel>
          </CheckboxArea>
          <PrimaryButton type="button" onClick={handleSignIn}>Sign In</PrimaryButton>
          <SecondaryButton>Create Account</SecondaryButton>
          {auth.error && <p style={{ color: "red" }}>{auth.error}</p>}
          {auth.user && <p style={{ color: "green" }}>Welcome, {auth.user.username}</p>}
        </Form>
        <BottomTitle>Or Easily Using</BottomTitle>
        <SocialArea>
          <FacebookButton>
            <FacebookIcon />
          </FacebookButton>
          <GoogleButton>
            <GoogleIcon />
          </GoogleButton>
        </SocialArea>
      </Container>
    </Wrapper>
  );
};

export default Login;
