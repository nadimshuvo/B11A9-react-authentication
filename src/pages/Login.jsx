import { useContext, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import AuthContext from "../provider/AuthContext";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { signInWithEmailPassword, setUser, signInwithGoogle } =
    useContext(AuthContext);

  const handleLoginWithGoogle = async () => {
    try {
      await signInwithGoogle()
        .then((userCredential) => {
          const newUser = userCredential.user;
          swal("Sign in !", "You have successfully signed in !", "success");
          setUser(newUser);
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((e) => {
          console.log(e);
          swal("Error", "Try Again ! Please", "error", {
            buttons: [false],
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        });
    } catch {
      swal("Error", "Failed To Sign In with Google", "error", {
        buttons: [false],
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 2300);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase auth logic - sign in
      await signInWithEmailPassword(email, password)
        .then((userCredential) => {
          swal("Sign in !", "You have successfully signed in !", "success");
          setUser(userCredential.user);
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch(() => {
          setPasswordError("Invalid User/Password ! Try Again");
          setTimeout(() => {
            window.location.reload(true);
          }, 2500);
        });
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="bg-primary flex min-h-screen flex-col items-center justify-center gap-10 px-2.5 min-sm:px-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold max-sm:text-xl">
          🔐 Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered focus:ring-primary w-full focus:rounded-xs focus:ring-2"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered focus:ring-primary w-full focus:rounded-xs focus:ring-2"
          />
          <p
            className={`ml-3.5 text-red-500 ${
              passwordError ? "animate-vibrate" : ""
            }`}
          >
            {passwordError}
          </p>

          <p className="cursor-help text-right text-xs font-bold hover:underline">
            Forgot Password?
          </p>

          {/* Email */}
          <button
            type="submit"
            className="btn bg-primary w-full rounded-xs border-[#e5e5e5] text-white"
          >
            <svg
              aria-label="Email icon"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="#031320"
                stroke="#34D399"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Register here
          </Link>
        </div>
        {/* google button - login */}
        <div className="mt-4">
          <button
            onClick={() => handleLoginWithGoogle()}
            className="btn w-full rounded-full border-[#e5e5e5] bg-white text-black"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
      <Link
        to="/"
        className="btn btn-accent text-green rounded-full hover:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Login;
