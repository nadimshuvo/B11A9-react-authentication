import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../provider/AuthContext";
import avatar from "../assets/hacker.png";
import swal from "sweetalert";

const Profile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    job: "",
  });
  const { updateUser, setUser, user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photoURL } = form;

    try {
      await updateUser({ displayName: name, photoURL: photoURL })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photoURL });
          setForm({ name: "", email: "", photoURL: "", job: "" });
          swal(
            "Updated",
            "You have successfully updated your info !",
            "success",
          );
          navigate("/");
        })
        .catch((e) => console.error(e));
    } catch (error) {
      alert("Update failed: " + error.message);
    }
  };

  return (
    <section className="relative my-20 flex flex-col items-center justify-center gap-10 text-center">
      <div className="group">
        <img
          className="h-auto w-auto rounded-full"
          src={user.photoURL || avatar}
          alt="Profile Picture"
        />
      </div>

      <h2 className="text-2xl font-extrabold">{user.displayName}</h2>
      <h2 className="text-accent text-2xl font-extrabold">{user.email}</h2>

      <form onSubmit={handleSubmit} className="space-y-4 px-2.5">
        <input
          type="text"
          placeholder="Change Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input input-bordered focus:ring-accent w-full focus:rounded-xs focus:ring-2"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={form.photoURL}
          onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
          className="input input-bordered focus:ring-accent w-full focus:rounded-xs focus:ring-2"
        />
        <button
          type="submit"
          className="btn bg-primary text-yellow mt-10 w-full rounded-xs border-[#e5e5e5]"
        >
          Update
        </button>
      </form>
      <Link
        to="/"
        className="btn btn-accent text-primary rounded-full hover:text-white"
      >
        Back To Home
      </Link>
    </section>
  );
};

export default Profile;
