import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXN8ZW58MHx8MHx8&w=1000&q=80"
                alt="Note Ilustrator"
              />
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-16 lg:pb-24 lg:pt-32">
              <h1 className="text-6xl font-extrabold tracking-tight text-center sm:text-8xl lg:text-9xl">
                <span className="block text-yellow-500 uppercase drop-shadow-md">
                  Notes App
                </span>
              </h1>
              <div className="max-w-sm mx-auto mt-10 sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center px-4 py-3 text-base font-medium text-yellow-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-yellow-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center px-4 py-3 font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}
