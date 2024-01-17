import { LoadingSpinner } from "./LoadingSpinner";

export const LoadingPage = () => {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-screen items-center justify-center">
      <LoadingSpinner size={60} />
    </div>
  );
};
