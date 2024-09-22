import Navbar from "@/components/Navbar";
import { OAuthButtons } from "../oAuth-signin";

export default function Login() {
  return (
    <>
      <Navbar />
      <section className="bg-primary">
        <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <img
                  className="w-8 h-8 mr-2 rounded-full"
                  src="https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
                  alt="logo"
                />
                rukolist
              </a>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <OAuthButtons />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
