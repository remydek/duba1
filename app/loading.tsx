import { Spinner } from "@/components/ui/spinner";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <Spinner className="w-16 h-16 text-primary animate-spin" />
      <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
    </div>
  );
}
