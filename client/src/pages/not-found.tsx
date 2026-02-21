import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-[#113B5E] mb-4">404 Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <Button className="bg-[#0077B3] hover:bg-[#006090] text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
