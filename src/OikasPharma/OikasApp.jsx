import { useState, useEffect } from 'react'
import './App.css'
import PageLoader from './components/PageLoader'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import VerificationAtOikas from '../Pages/VerificationAtOikas'

import icon from './assets/logo_icon_round.svg'

function OikasApp() {
  const [isVerified, setIsVerified] = useState(false);


  useEffect(() => {
    document.title = "Oikas Pharma";

    if (icon) {
      
        let link = document.createElement("link");
        link.rel = "icon";
        link.href = icon;
        document.head.appendChild(link);
    }

    const verified = sessionStorage.getItem('oikas_verified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
    sessionStorage.setItem('oikas_verified', 'true');
  };

  if (!isVerified) {
    return <VerificationAtOikas onVerificationComplete={handleVerificationSuccess} />;
  }

  return (
    <div className='dosis'>
      <PageLoader>
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </PageLoader>
    </div>
  )
}

export default OikasApp
