import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InvestingationImage from '../assets/investigation.jpg'


const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/Login");
  };

  return (
    <div className="p-4 dark:bg-gray-900 h-full dark:text-white  bg-no-repeat " style={{backgroundImage:`url("${InvestingationImage}")`}}>
      <h1 className="text-3xl">{t("Welcome to the Investigation Web Application")}</h1>
      
    </div>
  );
};

export default Home;
