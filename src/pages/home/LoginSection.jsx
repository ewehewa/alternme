import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff, Mail, Lock, ShieldCheck } from "lucide-react";
import axios from "axios";
import { loginSchema } from "../../utils/validation";

const LoginSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const APP_URL = import.meta.env.VITE_APP_BASE_URL;

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setIsLoading(true);

      const response = await axios.post(`${APP_URL}/login`, {
        email: email.trim(),
        password,
      });

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      if (err.name === "ValidationError") {
        toast.error(err.inner[0].message);
      } else if (err.response) {
        const errorData = err.response.data;
        const errorMsg =
          errorData.message ||
          (errorData.errors
            ? Object.values(errorData.errors).flat().join(" ")
            : "Login failed");
        toast.error(errorMsg);
      } else {
        toast.error(err.message || "Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 relative">
      {/* Background circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400 dark:bg-blue-800/30 rounded-full blur-2xl opacity-30 animate-float"></div>

      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,80,200,0.08) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Card container */}
      <div className="relative z-10 w-full max-w-md mx-auto bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-200 mb-8 text-center">
          Welcome Back
        </h1>

        <form onSubmit={loginUser} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <label className="absolute -top-3 left-4 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-900 px-1">
              Email
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-full px-4 py-3 shadow-sm">
              <Mail className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-500"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-3 left-4 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-900 px-1">
              Password
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-slate-800 rounded-full px-4 py-3 shadow-sm">
              <Lock className="w-5 h-5 text-blue-900 dark:text-blue-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-500"
                placeholder="Enter your password"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500 mr-2"
                disabled={isLoading}
              />
              <span className="text-gray-700 dark:text-gray-300">Remember me</span>
            </div>

            <button
              type="button"
              className="text-blue-900 hover:text-blue-950 dark:text-blue-400 font-medium"
              onClick={() => console.log("Forgot password clicked")}
              disabled={isLoading}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 rounded-full transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing In...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Sign Up link */}
        <p className="text-center text-sm mt-6 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-900 hover:text-blue-950 dark:text-blue-400 font-semibold">
            Sign Up
          </Link>
        </p>

        {/* Security badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-600 dark:text-slate-400">
            <ShieldCheck className="text-blue-500 mr-2" size={16} />
            Secured with military-grade encryption
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginSection;
