const Home = () => {
  return (
    <section className="bg-gray-900 h-screen py-24">
      <div className="text-center px-5">
        <h1 className="text-6xl   font-semibold text-white mb-4">
          Welcome to CodeBits !
        </h1>
        <p className="text-xl text-white mb-8">
          Discover and share code snippets with the community.
        </p>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-lg"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
