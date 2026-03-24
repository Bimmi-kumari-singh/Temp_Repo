import { FileText, ExternalLink, ArrowRight } from 'lucide-react'
import './LandingPage.css'

const CLOSE_PACKAGE_URL = 'https://mb9vpjs3-4200.inc1.devtunnels.ms/'

export default function LandingPage() {
  const handleClosePackage = () => {
    window.open(CLOSE_PACKAGE_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="landing-main">
      <div className="landing-hero">
        <div className="landing-hero-icon">
          <FileText size={48} color="#2563EB" />
        </div>
        <h1>Intelligent Loan Processing System</h1>
        <p className="landing-hero-subtitle">
          Select a workflow to get started
        </p>
      </div>
      <div className="landing-cards">
        <button className="landing-card" onClick={handleClosePackage}>
          <div className="landing-card-icon close-package-icon">
            <ExternalLink size={32} />
          </div>
          <h2>Close Package Loan Application</h2>
          <p>Access the close package loan application portal.</p>
          <span className="landing-card-action">
            Open Portal <ExternalLink size={16} />
          </span>
        </button>
        <a className="landing-card" href="/dashboard">
          <div className="landing-card-icon origination-icon">
            <ArrowRight size={32} />
          </div>
          <h2>Loan Origination</h2>
          <p>Upload and process loan documents with AI-powered extraction.</p>
          <span className="landing-card-action">
            Continue <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </main>
  )
}
