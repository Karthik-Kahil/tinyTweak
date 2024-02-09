/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import SpinnerMini from "../../UI/SpinnerMini";
import { useForm } from "react-hook-form";
import { loginAuth, signUpAuth } from "../../utils/apiAuth";
import toast from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";

const Form = styled.form`
  top: 600%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #5a38c0;
  padding: 2rem;
  border-radius: 5px;
  z-index: 1;
  position: fixed;
  max-width: 500px;
  text-align: left;
  width: 100%;
  padding-top: 2rem;
  border: 2px solid #65b741;
  box-shadow: 0px 6px 22px 12px rgba(0, 0, 0, 0.1);

  & div {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--color-white);
    margin-bottom: 1rem !important;
  }

  & label {
    width: 100%;
  }

  & input {
    width: 100%;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    outline: 0;
    border: 0;
    color: var(--color-primary);
    background-color: #ffffff;
  }
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: inherit;
  top: 0;
  position: fixed !important;
  z-index: 1;
`;

const Signup = styled.div`
  width: 100%;
  align-items: flex-start !important;

  & p {
    text-align: left;
  }

  & span {
    cursor: pointer;
  }
`;

const CloseBtn = styled(IoIosCloseCircle)`
  font-size: 3rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
  color: var(--color-white);
`;

const LogHeader = styled.h4`
  font-size: 3rem;
  padding-bottom: 2rem;
  color: var(--color-white);
`;

const Icon = styled.div`
  position: absolute !important;
  left: -247px;
  top: -60px;

  & img {
    width: 100px;
  }
`;

function LoginPage({ onClick }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const onSubmitLogin = (data) => {
    setIsLoading(true);
    loginAuth(data)
      .then((el) => {
        if (el.status === "success") {
          setIsLoading(false);
          toast.success("Logged in");
        } else {
          setError("loginFailed", {
            type: "manual",
            message: "Invalid credentials",
          });
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onSubmitSignup = (data) => {
    setIsLoading(true);
    signUpAuth(data)
      .then((el) => {
        if (el.status === "success") {
          setIsLoading(false);
          toast.success("Sign up successfully");
        } else {
          setError("signupFailed", {
            type: "manual",
            message: "Signup failed. Please try again.",
          });
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const signUpHandler = () => {
    setIsSignup(true);
  };

  const loginHandler = () => {
    setIsSignup((el) => !el);
  };

  const ErrorMessage = ({ children }) => (
    <h1
      style={{
        color: "yellow",
        marginTop: "5px",
        fontSize: "1.2rem",
        textAlign: "left",
        width: "100%",
      }}
    >
      {children}
    </h1>
  );

  return (
    <>
      <Overlay onClick={onClick} />
      {!isSignup && (
        <Form onSubmit={handleSubmit(onSubmitLogin)}>
          <Icon>
            <img
              src="./public/assets/psd_3d_render_rocket_ioslated_on_background.webp"
              alt=""
            />
          </Icon>
          <LogHeader>Login</LogHeader>
          <CloseBtn onClick={onClick} title="close" />
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </div>
          <div>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              minLength={8}
              {...register("password", { required: "Password is required" })}
            />
            <ErrorMessage>
              {errors.password && errors.password.message}
            </ErrorMessage>
          </div>
          <Signup>
            <p>
              {"Don't have an account?"}{" "}
              <span
                onClick={signUpHandler}
                style={{ textDecoration: "underline" }}
              >
                signup
              </span>
            </p>
          </Signup>
          <Button fullWidth={true}>
            {isLoading ? <SpinnerMini /> : "Login"}
          </Button>
          {errors.loginFailed && (
            <ErrorMessage>{errors.loginFailed.message}</ErrorMessage>
          )}
        </Form>
      )}
      {isSignup && (
        <Form onSubmit={handleSubmit(onSubmitSignup)}>
          <Icon>
            <img
              src="./public/assets/psd_3d_render_rocket_ioslated_on_background.webp"
              alt=""
            />
          </Icon>
          <LogHeader>Signup</LogHeader>
          <CloseBtn onClick={onClick} title="close" />
          <div>
            <label htmlFor="text">Name*</label>
            <input
              type="text"
              id="text"
              {...register("name", { required: "Name is required" })}
            />
            <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
          </div>
          <div>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
            <ErrorMessage>
              {errors.password && errors.password.message}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm password*</label>
            <input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "Please confirm your password",
              })}
            />
            <ErrorMessage>
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </ErrorMessage>
          </div>
          <Signup>
            <p>
              {"Already have an account?"}{" "}
              <span
                onClick={loginHandler}
                style={{ textDecoration: "underline" }}
              >
                login
              </span>
            </p>
          </Signup>
          <Button fullWidth={true}>
            {isLoading ? <SpinnerMini /> : "Signup"}
          </Button>
          {errors.signupFailed && (
            <ErrorMessage>{errors.signupFailed.message}</ErrorMessage>
          )}
        </Form>
      )}
    </>
  );
}

export default LoginPage;
