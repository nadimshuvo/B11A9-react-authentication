import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import AuthContext from "../provider/AuthContext";
import swal from "sweetalert";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const { createUserWithEmailPassword, updateUser, setUser, signInwithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterWithGoogle = async () => {
    try {
      await signInwithGoogle()
        .then((userCredential) => {
          const newUser = userCredential.user;
          swal("Sign Up", "You have successfully signed up !", "success");
          setUser(newUser);
          navigate("/");
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
      swal("Error", "Failed To Sign Un with Google", "error", {
        buttons: [false],
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 2300);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, photoURL } = form;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    if (!passwordValid) {
      setPasswordError(
        "Password must have 1 uppercase, 1 lowercase & be 6+ characters long.",
      );
      return;
    }

    try {
      createUserWithEmailPassword(email, password).then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch((e) => console.error(e));
        swal("Sign Up", "You have successfully signed up !", "success");
      });
      navigate("/");
    } catch {
      swal("Error", "Registration failed !", "error");
    }
  };

  return (
    <div className="bg-primary flex min-h-screen flex-col items-center justify-center gap-10 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-xl font-bold min-lg:text-2xl">
          📝 Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input input-bordered focus:ring-primary w-full focus:rounded-xs focus:ring-2"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input input-bordered focus:ring-primary w-full focus:rounded-xs focus:ring-2"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={form.photoURL}
            onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
            className="input input-bordered focus:ring-primary w-full focus:rounded-xs focus:ring-2"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="input input-bordered focus:ring-primary w-full focus:rounded-xs focus:ring-2"
          />
          <p
            className={`ml-3.5 text-red-500 ${
              passwordError ? "animate-vibrate" : ""
            }`}
          >
            {passwordError}
          </p>
          <button
            type="submit"
            className="btn bg-primary w-full rounded-xs border-[#e5e5e5] text-white"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </div>
        {/* google button - login */}
        <div className="mt-4">
          <button
            onClick={() => handleRegisterWithGoogle()}
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
            Continue with Google
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

export default Register;
