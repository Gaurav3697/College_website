"use client";

import Header from "../pages/Header.jsx";
import Footer from "@/pages/Footer.jsx";
import Contact from "@/pages/Contact.jsx";
import { Toaster } from "react-hot-toast";
import InfoHeader from "@/pages/InfoHeader.jsx";
import Home from "@/pages/Home.jsx";
import Courses from "@/pages/Courses.jsx";
import Testinomial from "@/pages/Testinomial.jsx";
import Profile from "@/pages/Profile.jsx";
import Gallary from "@/pages/Gallary.jsx";

export default function page() {
    return <>
        <div className="overflow-x-hidden w-screen">
            <InfoHeader />
            <Header />
            <Home />
            <Profile />
            <Courses />
            <Gallary/>
            <Contact />
            <Testinomial />
            {/* <Posts/> */}
            <Footer />
            <Toaster />
        </div>
    </>
}
