"use client"
import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JoinCommunity } from '@/components/JoinCommunity'
import { Properties } from '@/components/Properties'
import { Services } from '@/components/Services'
import { TransitionPage } from '@/components/TransitionPage'
import dynamic from "next/dynamic"




const LocationMap = dynamic(
  () => import('../components/Location').then(module => module.Location),
  {
    ssr: false
  }
)

export default function Home() {

  return (
    <>
     <TransitionPage />
      <Header />

      <main>
        <Banner />
        <Properties />
        <div className="max-w-6xl mx-auto">
          
          <Services />
          <LocationMap />
          <About />
        </div>
        <JoinCommunity />
        <Footer />
      </main>
    </>
  )
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHS7f-Ul7FuQh-sjyELD_OUE1hpglEdoM",
  authDomain: "terrasolparcelas-f878e.firebaseapp.com",
  projectId: "terrasolparcelas-f878e",
  storageBucket: "terrasolparcelas-f878e.appspot.com",
  messagingSenderId: "685194379411",
  appId: "1:685194379411:web:01c634b50e265de290cd66",
  measurementId: "G-M752NXEKGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);