import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ToggleDarkModeImage from "../../assets/images.jpg";
import i18n from "../../i18n";

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};


const App: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [userRole, setUserRole] = React.useState("");

  React.useEffect(() => {
    const userString = sessionStorage.getItem("user");
    if (userString) {
      try {
        const user = JSON.parse(userString);
        console.log("Retrieved user from sessionStorage:", user);
        setUserRole(user.role?.toUpperCase() || "");
      } catch (error) {
        console.error("Error parsing user data from sessionStorage:", error);
      }
    } else {
      console.warn("No user data found in sessionStorage.");
    }
  }, []);
  

  const handleLogout = () => {
    // Clear local storage
    sessionStorage.clear();
    // Clear cookies if any (example)
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Redirect to login page
    navigate("/login");
    location.reload();
  };

  return (
    <div id="wrapper" className="">
      <div className="flex float-right items-center space-x-4 py-2 bg-white   ">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="text-black hover:text-red-500"
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage("si")}
          className="text-black hover:text-red-500"
        >
          සිංහල
        </button>
        <button
          onClick={() => i18n.changeLanguage("ta")}
          className="text-black hover:text-red-500"
        >
          தமிழ்
        </button>
      </div>

      <img
        src="https://slpost.gov.lk/wp-content/uploads/2019/10/DOP_header.png"
        alt="Department of Posts"
        className="mx-auto bg-red-50 dark:bg-gray-900  "
      />

      <button onClick={toggleDarkMode} className="fixed bottom-6 right-4">
        <img
          src={ToggleDarkModeImage}
          alt={t("Toggle Dark Mode")}
          className="w-10 h-8"
        />
      </button>

      <div id="navcontent" className="">
        <nav className="flex justify-center items-center w-full bg-gray-800">
          <ul className="flex gap-4 list-none p-0 m-0">
            <li>
              <a
                href="/"
                className="block text-white text-center py-4 px-6 hover:bg-gray-700"
              >
                {t("Home")}
              </a>
            </li>
            <li className="relative group">
              <a
                href="/new-investigation"
                className="block text-white text-center py-4 px-6 hover:bg-gray-700"
              >
                {t("New Investigation")}
              </a>
              <ul className="absolute hidden group-hover:block bg-gray-800 shadow-lg">
                <li>
                  {" "}
                  <a
                    href="/new-investigation/inv-Inspector"
                    className="block text-white text-center py-4 px-6 hover:bg-gray-700"
                  >
                    {t("Inv Inspector")}
                  </a>
                </li>
                <li>
                   {/* Render 'Create New User' only if the user is an admin */}
                {userRole === "ADMIN" && (
                  <li>
                    <a href="/new-investigation/create-New-User" className="block text-white text-center py-4 px-6 hover:bg-gray-700">
                      {t("Create New User")}
                    </a>
                  </li>
                )}
                </li>
              </ul>
            </li>

            <li className="relative group">
              <a
                href="/update-investigation"
                className="block text-white text-center py-4 px-6 hover:bg-gray-700"
              >
                {t("Update Investigation")}
              </a>
              <ul className="absolute hidden group-hover:block bg-gray-800 shadow-lg">
                <li>
                  <a
                    href="/update-investigation/update-formal-inquiry"
                    className="block text-white text-center py-4 px-6 hover:bg-gray-700"
                  >
                    {t("Formal Inquiry")}
                  </a>
                </li>
                <li>
                  <a
                    href="/update-investigation/update-Charge-Sheet"
                    className="block text-white text-center py-4 px-6 hover:bg-gray-700"
                  >
                    {t("Charge Sheet")}
                  </a>
                </li>
                <li>
                  <a
                    href="/update-investigation/update-interim-report"
                    className="block text-white text-center py-4 px-6 hover:bg-gray-700"
                  >
                    {t("Interim Report")}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/search"
                className="block text-white text-center py-4 px-6 hover:bg-gray-700"
              >
                {t("Search")}
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block text-white text-center py-4 px-6 hover:bg-gray-700"
              >
                {t("Contact")}
              </a>
            </li>
            <li>
            <button
                onClick={handleLogout}
                className="block text-white text-center py-4 px-6 hover:bg-gray-700"
              >
                {t("Logout")}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default App;
