import React from "react";
import { motion } from 'framer-motion';
import Header from "../../components/common/Header/Header";
import { Link } from "react-router-dom";

import './thankYou.scss';

const Index = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header />
            <section className="AuthWrapper">
                <div className="head-wrapper">
                    <h2>Thank You!</h2>
                    <p>For Purchasing our Site.</p>
                    <div className="btn-group">
                        <Link to="/" className="btn_wrapper">
                            Back to Home
                        </Link>
                        <Link to="/" className="btn_wrapper">
                            Continue
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Index;