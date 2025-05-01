import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  overflow-y: auto;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 50px 60px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
`;
export const Heading = styled.div`
  margin-bottom: 30px;
  padding-left: 10px;
  border-left: 4px solid var(--light-blue);
`;

export const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: var(--text-color);
  span {
    font-weight: 700;
    span {
      color: var(--light-blue);
    }
  }
`;
export const H4 = styled.h4`
  font-size: 12px;
  color: var(--icons-color);
  line-height: 16px;
  font-weight: 400;
  margin-top: 0;
`;
export const Form = styled.form`
  width: 100%;
`;
export const InputArea = styled.div`
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  font-size: 14px;
  span {
    margin-bottom: 5px;
    display: inline-block;
    color: var(--text-color);
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`;
export const Icon = styled.div`
  padding: 6px;
  height: 32px;
  width: 32px;
  color: var(--icons-color);
  background-color: var(--bg-color);
  border: 1px solid var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  font-size: 12px;
  height: 32px;
  color: var(--icons-color);
  transition: border 0.3s;
  background-color: transparent;
  border: 1px solid var(--bg-color);
  outline: none;
  box-sizing: border-box;
  &:focus {
    border: 1px solid var(--border-color);
  }
`;
export const EyeButton = styled.button`
  cursor: pointer;
  padding: 6px;
  height: 32px;
  width: 32px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: ${({ active }) =>
    active === "true" ? "#ffffff" : "var(--icons-color)"};
  background-color: ${({ active }) =>
    active === "true" ? "var(--border-color)" : "var(--bg-color)"};
  border: 1px solid
    ${({ active }) =>
      active === "true" ? "var(--border-color)" : "var(--bg-color)"};
`;
export const ForgotPassword = styled.a`
  position: absolute;
  font-size: 11px;
  line-height: 15px;
  bottom: -18px;
  right: 0;
  color: var(--light-blue);
  transition: all 0.3s;
  &:hover {
    color: var(--dark-blue);
    cursor: pointer;
  }
`;
export const CheckboxArea = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  input[type="checkbox"]:hover ~ div.checkbox-icon {
    border-color: var(--border-color);
  }
  input[type="checkbox"]:checked ~ div.checkmark {
    opacity: 1;
  }
  input[type="checkbox"]:hover ~ label {
    color: var(--border-color);
  }
`;
export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  lefy: 0;
  width: 18px;
  height: 18px;
  z-index: 2;
  cursor: pointer;
`;
export const CheckboxIcon = styled.div.attrs({ className: "checkbox-icon" })`
  width: 18px;
  position: absolute;
  left: 0;
  height: 18px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  background-color: transparent;
  pointer-events: none;
  z-index: 1;
  transition: all 0.3s;
`;
export const Checkmark = styled.div.attrs({ className: "checkmark" })`
  position: absolute;
  left: 2px;
  top: 1px;
  width: 14px;
  height: 14px;
  color: var(--border-color);
  opacity: 0;
  transition: all 0.3s;
`;
export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: var(--text-color);
  font-weight: 400;
  transition: all 0.3s;
  padding-left: 30px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100%;
  display: inline-block;
  height: 44px;
  border-radius: 5px;
  padding: 10px 25px;
  margin-bottom: 20px;
  transition: all 0.4s;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 0;
    height: 0;
    background-color: transparent;
    border-radius: 0 50% 50% 0%;
    z-index: -1;
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover::before {
    width: 200%;
    height: 200%;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: var(--light-blue);
  color: #fff;
  border: none;
  &::before {
    background-color: var(--dark-blue);
  }
`;
export const SecondaryButton = styled(Button)`
  background-color: #ffffff;
  color: var(--light-blue);
  border: 1px solid var(--light-blue);
  &::before {
    background-color: var(--light-blue);
  }
  &:hover {
    color: #fff;
  }
`;
export const BottomTitle = styled.div`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;
  position: relative;
  display: block;
  font-size: 13px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-color);
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: calc(50% - 90px);
    background-color: #dddddd;
    top: 50%;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;
export const SocialArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const SocialButton = styled.button`
  color: #fff;
  display: inline-block;
  border-radius: 5px;
  padding: 9px;
  height: 38px;
  width: 38px;
  border: none;
  margin-right: 10px;
  transition: all 0.4s;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 0;
    height: 0;
    background-color: transparent;
    border-radius: 0 50% 50% 0%;
    z-index: -1;
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover::before {
    width: 200%;
    height: 200%;
  }
`;

export const FacebookButton = styled(SocialButton)`
background-color: var(--facebook-blue);
&::before {
    background-color: #a8a8a8;
  }
    &:hover {
    color: var(--text-color);
    `;
export const GoogleButton = styled(SocialButton)`
background-color: var(--google-red);
&::before {
    background-color: #a8a8a8;
  }
    &:hover {
    color: var(--text-color);`;
