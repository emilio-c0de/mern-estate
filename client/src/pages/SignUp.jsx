import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null)
      const result = await fetch("api/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await result.json();
      setLoading(false);
      if (response.success === false) {
        setError(response.message);
        return;
      }
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="..."
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {
        error && <p className="text-red-500 mt-5">{error}</p>
      }
    </div>
  );
};

export default SignUp;
