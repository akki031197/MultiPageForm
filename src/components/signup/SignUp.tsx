import React from "react";

interface SignUpProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // Optional function for form submission
}

const SignUp: React.FC<SignUpProps> = ({ children, onSubmit }) => {
  // State variables for username and password (optional)
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., validate data, send to backend)
    //     console.log('Form submitted:', { username: /* username */, password: /* password */ }); // Replace placeholders with actual values if using state
  };

  return (
    <div className="flex justify-center h-screen shadow-2xl">
      <div className="w-full max-w-sm sm:max-w-md md:max-lg bg-white rounded-lg p-5">
        <header className="flex items-center justify-center">
          <img
            className="w-20 mx-auto mb-5 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-56"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            alt="Logo"
          />
        </header>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center mb-5">
            <span className="text-2xl font-bold text-black hidden sm:block">
              WELCOME to SINHASI
            </span>
          </div>

          <div className="mb-6">
            <label
              for="first_name_last_name"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              First Name and Last Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-3"
              placeholder="Harry Baker"
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-3"
              placeholder="harry_baker@gmail.com"
              required
            />
          </div>

          <div className="flex items-center justify-center w-full h-25 mb-5 rounded-md">
            <input
              type="checkbox"
              id="accept-checkbox"
              className="focus:ring-indigo-500 focus:ring-opacity-50 unchecked:bg-transparent"
            />
            <label for="accept-checkbox" className="ml-2 text-lg text-gray-700">
              I accept terms and conditions
            </label>
          </div>

          <footer>
            <button className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded text-xl font-family-nunito tracking-[-0.07px] leading-[27.28px] flex items-center justify-center">
              Sign Up
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
