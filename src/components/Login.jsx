import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, Lock, User, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [loginId, setLoginId] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate login without backend
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('archis_token', 'dummy-token');
      navigate('/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center relative px-6 overflow-hidden text-white font-['Ubuntu']">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-normal z-20 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      <div className="relative z-10 w-full max-w-md p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="\dist\images\logo.png" 
            alt="ARCHIS Logo" 
            className="h-16 w-auto object-contain mb-4 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]" 
          />
          <h1 className="text-2xl font-normal tracking-wide text-white">Official Portal</h1>
          <p className="text-xs text-zinc-400 mt-1">ARCHIS Spatial Intelligence System</p>
        </div>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-normal text-white">Authentication Successful</h2>
            <p className="text-xs text-zinc-400">Welcome to the official ARCHIS secure environment.</p>
            <button
              onClick={() => {
                localStorage.removeItem('archis_token');
                navigate('/');
              }}
              className="mt-4 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-normal text-white transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-normal">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal text-zinc-400 tracking-wider uppercase">Login ID</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="Enter your official ID"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal text-zinc-400 tracking-wider uppercase">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3.5 rounded-xl bg-emerald-500 text-black font-normal text-sm hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Secure Login'
              )}
            </button>
          </form>
        )}
      </div>

      <div className="mt-8 text-center text-xs text-zinc-600">
        Dummy Authentication
      </div>
    </div>
  );
}