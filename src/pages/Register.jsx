import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import AuthContext from "../provider/AuthContext";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });
  const { createUserWithEmailPassword, updateUser, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, photoURL } = form;
    // const passwordValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
    const passwordValid = true;
    if (!passwordValid)
      return alert(
        "Password must have 1 uppercase, 1 lowercase & be 6+ characters long."
      );

    try {
      // Firebase createUser //
      createUserWithEmailPassword(email, password).then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch((e) => console.error(e));
      });
      navigate("/");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary px-4 gap-10">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          📝 Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full input input-bordered focus:ring-2 focus:ring-primary focus:rounded-xs"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full input input-bordered focus:ring-2 focus:ring-primary focus:rounded-xs"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={form.photoURL}
            onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
            className="w-full input input-bordered focus:ring-2 focus:ring-primary focus:rounded-xs"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full input input-bordered focus:ring-2 focus:ring-primary focus:rounded-xs"
          />
          <button
            type="submit"
            className="btn bg-primary w-full text-white border-[#e5e5e5] rounded-xs"
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
          <button className="btn bg-white w-full text-black border-[#e5e5e5] rounded-full">
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
      <Link to="/" className="btn btn-accent rounded-full text-green hover:text-white">Back To Home</Link>
    </div>
  );
};

export default Register;
