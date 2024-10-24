import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Oops!</h1>
        <p className="font-medium text-gray-700 pt-10">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 pt-10">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
