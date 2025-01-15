import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="p-4 h-full ">
        <h1 className="text-4xl text-shadow-xl  border-4 border-gray-800 rounded-md w-fit p-4">
          Welcome to Investigation Database
        </h1>
      </div>
    </div>
  );
};

export default Home;
