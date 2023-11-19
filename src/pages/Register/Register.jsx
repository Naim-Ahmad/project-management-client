import { Link } from "react-router-dom";
import loginimg from "../../assets/login.svg";
import AuthImage from "../../components/AuthImage/AuthImage";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../redux/features/auth/authApi";
import { useEffect, useState } from "react";
import MyAlert from "../../components/Alert/Alert";
import { NotificationDialog } from "../../components/Modal/Modal";
import { LuLoader2 } from "react-icons/lu";
export default function Register() {
  const [signup, { isLoading, isError, isSuccess, error }] =
    useSignupMutation();
  // alert state
  const [showAlert, setshowAlert] = useState(false);
  // modalState
  const [modalOpen, setmodalOpen] = useState(false);

  // form control logic
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signup(data);
  };

  useEffect(() => {
    if (isError) {
      setshowAlert(true);
      // close this alert after 3 sec
      setTimeout(() => {
        setshowAlert(false);
      }, 3000);
    }
    if (isSuccess) {
      reset();
      setmodalOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, error]);
  return (
    <>
      <div className="h-[90vh] md:flex">
        {/* modal */}
        {modalOpen && (
          <NotificationDialog
            modalOpen={modalOpen}
            handleOpen={() => setmodalOpen(!modalOpen)}
            url={"/login"}
          />
        )}

        <AuthImage image={loginimg} />
        {/* form  */}
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                {...register("firstName", { required: "Name is Required !" })}
                placeholder="First Name"
              />
            </div>
            {errors?.firstName?.message && (
              <small className="text-red-600 text-xs">
                {errors?.firstName?.message}
              </small>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                {...register("lastName", {
                  required: "Last Name is Required !",
                })}
                placeholder="Last Name"
              />
            </div>
            {errors?.lastName?.message && (
              <small className="text-red-600 text-xs">
                {errors?.lastName?.message}
              </small>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                {...register("email", { required: "Email is Required !" })}
                placeholder="Email Address"
              />
            </div>
            {errors?.email?.message && (
              <small className="text-red-600 text-xs">
                {errors?.email?.message}
              </small>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                {...register("password", {
                  required: "Password is Required !",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 character",
                  },
                })}
                placeholder="Password"
              />
            </div>
            {errors?.password?.message && (
              <small className="text-red-600 text-xs">
                {errors?.password?.message}
              </small>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              {isLoading ? (
                <LuLoader2 className="animate-spin mx-auto text-xl"></LuLoader2>
              ) : (
                "Register"
              )}
            </button>
            <span className="text-sm ml-2 text-gray-800 cursor-pointer">
              Already Registerd ?{" "}
              <Link to="/login" className="text-indigo-700 hover:underline">
                Login
              </Link>
            </span>
          </form>
        </div>
        {/* alert */}
        {showAlert && (
          <MyAlert
            message={error?.data?.message}
            type="error"
            setShowAlert={setshowAlert}
          />
        )}
      </div>
    </>
  );
}
