import { useState } from 'react'
import { FileText, Lock, User, Shield, Zap, BarChart3, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'
import './Login.css'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim() && password.trim()) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        onLogin()
      }, 800)
    }
  }

  return (
    <div className="landing-page">
      {/* Decorative blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      <div className="landing-left">
        <div className="landing-brand">
          <div className="landing-logo-wrap">
            <div className="landing-logo">
              <FileText size={36} color="#ffffff" />
            </div>
            <span className="landing-badge">Enterprise</span>
          </div>
          <h1 className="landing-title">Intelligent Loan Processing System</h1>
          <p className="landing-description">
            AI-powered document extraction and entity recognition for streamlined loan origination workflows.
          </p>
        </div>

        <div className="landing-stats">
          <div className="stat-item">
            <span className="stat-value">10x</span>
            <span className="stat-label">Faster Processing</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">99.8%</span>
            <span className="stat-label">Accuracy Rate</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">500+</span>
            <span className="stat-label">Documents / Day</span>
          </div>
        </div>

        <div className="landing-features">
          <div className="landing-feature">
            <div className="feature-icon-wrap">
              <Zap size={20} color="#93C5FD" />
            </div>
            <div>
              <h3>Fast Processing</h3>
              <p>Extract entities from loan documents in seconds using advanced AI models.</p>
            </div>
          </div>
          <div className="landing-feature">
            <div className="feature-icon-wrap">
              <Shield size={20} color="#93C5FD" />
            </div>
            <div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security for sensitive financial documents.</p>
            </div>
          </div>
          <div className="landing-feature">
            <div className="feature-icon-wrap">
              <BarChart3 size={20} color="#93C5FD" />
            </div>
            <div>
              <h3>Batch Processing</h3>
              <p>Upload and process multiple documents simultaneously.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-right">
        <div className="login-card">
          <div className="login-card-top-accent" />
          <div className="login-header">
            <div className="login-logo-mark">
              <FileText size={24} color="#2563EB" />
            </div>
            <h2 className="login-title">Welcome back</h2>
            <p className="login-subtitle">Sign in to your loan processing dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-wrapper">
                <User size={16} className="input-icon" />
                <input
                  id="username"
                  type="text"
                  className="form-input"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />
                {username && (
                  <CheckCircle2 size={16} className="input-check" />
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password" className="form-label">Password</label>
                <button type="button" className="forgot-link">Forgot password?</button>
              </div>
              <div className="input-wrapper">
                <Lock size={16} className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="input-eye-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className={`login-button${isLoading ? ' loading' : ''}`} disabled={isLoading}>
              {isLoading ? (
                <span className="spinner" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} className="btn-arrow" />
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <Shield size={12} />
            <span>Secured with 256-bit TLS encryption</span>
          </div>
        </div>
      </div>
    </div>
  )
}
