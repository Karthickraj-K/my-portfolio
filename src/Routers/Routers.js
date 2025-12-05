import React from "react";
import Layout from "../Layout";
import Home from '../Components/Home'
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "../Components/About";
import Project from "../Components/Projects";
import Experience from "../Components/Experience";
import Contact from "../Components/Contact";
import MainRouters from "./index";

const Index = () => {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route element={<MainRouters />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<About />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path='/*' element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </Router>
        </React.Fragment>
    );
};

export default Index;
