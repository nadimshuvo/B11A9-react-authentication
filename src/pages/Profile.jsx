import React, { useContext, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../provider/AuthContext";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    job: "",
  });
  const { updateUser, setUser, user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photoURL } = form;

    try {
      await updateUser({ displayName: name, photoURL: photoURL })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photoURL });
          setForm({ name: "", email: "", photoURL: "", job: "" });
        })
        .catch((e) => console.error(e));
    } catch (error) {
      alert("Update failed: " + error.message);
    }
  };

  return (
    <section className="text-center flex flex-col gap-10 items-center justify-center my-20 relative">
      <div className="group">
        <img
          className="w-auto h-auto rounded-full"
          src={user.photoURL}
          alt="Profile Picture"
        />
      </div>

      <h2 className="font-extrabold text-2xl">{user.displayName}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Change Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full input input-bordered focus:ring-2 focus:ring-accent focus:rounded-xs"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={form.photoURL}
          onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
          className="w-full input input-bordered focus:ring-2 focus:ring-accent focus:rounded-xs"
        />
        <button
          type="submit"
          className="btn bg-primary w-full text-yellow border-[#e5e5e5] rounded-xs mt-10"
        >
          Update
        </button>
      </form>
      <Link to="/" className="btn btn-accent rounded-full text-primary hover:text-white">Back To Home</Link>
    </section>
  );
};

export default Profile;
