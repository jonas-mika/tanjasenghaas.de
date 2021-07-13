import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Landing from '../components/Landing';
import ProjectGallery from '../components/ProjectGallery';
import Philosophy from '../components/Philosophy';
import CustomerFeedback from '../components/CustomerFeedback';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GoUp from '../components/generics/GoUp';

const Main = ({ data }) => {
    return (
        <div classname="MainPage">
            <Header />
            <Landing projects={data.projects} />
            <ProjectGallery projects={data.projects} />
            <Philosophy />
            <CustomerFeedback quotes={data.quotes} />
            <Services />
            <Contact />
            <Footer />
            <GoUp />
        </div>
    );
};

export default Main;
