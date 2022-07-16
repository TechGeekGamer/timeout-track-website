import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">404 Not Found</h1>
        </div>
      </header>
      <p className="text-center font-bold mt-5 text-lg">
        😕 That page doesn't exist
      </p>
      <br />
      <div className="grid">
        <div className="place-self-center">
          <NavLink to="/" className="btn-primary">
            Return Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
