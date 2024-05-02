import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
// import { signup } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { emailRegex, passwordRegex } from "../../constants/validation";
import { emailMessages, passwordMessages, name } from "../../constants/messages";
import { useAuth } from "../../AuthContext";

function SignIn() {

  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user =[ {
  //     firstname : "aa",
  //     lastname : "bb",
  //     email : "ab@gmail.com",
  //     password : "ab@123#"
  // }]

  // localStorage.setItem('users', JSON.stringify(user))

  const onSubmit = async (data) => {

    console.log('submit');
    auth.login(data.email, data.password, setEmail, setPassword, navigate);
    // await dispatch(
    //   signup(
    //     data.email,
    //     data.password,
    //     data.firstName,
    //     data.lastName,
    //     data.cpassword,
    //     setFirstName,
    //     setLastName,
    //     setEmail,
    //     setPassword,
    //     navigate
    //   )
    // );
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  autoComplete="first name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  {...register("firstName", { required: true, maxLength: 10 })}
              />
              {errors.firstName && <p className="block text-xs text-red-700 text-left">{name.firstname}</p>}
              </div>
            </div> */}

            {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  {...register("lastName", { required: true, maxLength: 10 })}
                />
                {errors.lastName && <p className="block text-xs text-red-700 text-left">{name.lastname}</p>}
              </div>
            </div> */}
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  {...register("email", { required: true, pattern: emailRegex } )}
                />
                {errors.email && <p className="block text-xs text-red-700 text-left">{emailMessages.invalid}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  {...register("password", { required: true, pattern: passwordRegex })}
                />
                {errors.password && <p className="block text-xs text-red-700 text-left">{passwordMessages.weak}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  {...register("cpassword")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default SignIn;
