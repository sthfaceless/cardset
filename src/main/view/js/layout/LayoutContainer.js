import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "@/js/layout/Header";
import Footer from "@/js/layout/Footer";
import ContentRouter from "@/js/layout/ContentRouter";

const LayoutContainer = () => {
        return (
            <>
                <Header/>
                <ContentRouter/>
                <Footer/>
            </>
        );
}

export default LayoutContainer