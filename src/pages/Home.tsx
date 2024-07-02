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
    <div className="p-4 dark:bg-gray-900 bg- dark:text-white bg-no-repeat bg-fixed bg-cover h-full " style={{backgroundImage:`url("${InvestingationImage}")`}}>
      <h1 className="text-4xl text-shadow-xl  border border-gray-800 border-4 rounded-md w-fit p-4">{t("Welcome to the Investigation Web Application")}</h1>
      
    </div>
  );
};

export default Home;
