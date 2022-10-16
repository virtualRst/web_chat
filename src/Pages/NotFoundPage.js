import React, { useEffect } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function NotFoundPage() {
  useEffect(() => {
    setTimeout(function () {
      window.location.href="https://edithindia.com/";
    }, 5000);
}, ['']);
  return (
    <div>
      <Header />
      <main id="main" style={{'display':'flex','alignItems':"center",flexDirection:'column'}}>
        <h1>Page Not Found</h1>
        <h3>Please check the url. The page will be redirected to Homepage in 5 seconds</h3>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage;