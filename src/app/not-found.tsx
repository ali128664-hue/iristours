import Link from 'next/link';
import { CarFront, MapPinOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-bg-primary relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center px-6 relative z-10">
        <div className="relative inline-block mb-6 mt-16">
          <h1 className="text-9xl font-black text-text-primary/5">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <CarFront size={72} className="text-text-primary" />
              <MapPinOff size={32} className="text-accent-primary absolute -bottom-2 -right-2 bg-bg-primary rounded-full p-1 border border-border-primary" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Looks like this road is closed.
        </h2>
        
        <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" className="w-full sm:w-auto px-8">
              Return Home
            </Button>
          </Link>
          <Link href="/fleet">
            <Button variant="secondary" className="w-full sm:w-auto px-8">
              View Our Fleet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
