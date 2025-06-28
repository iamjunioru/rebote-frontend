import { Loader2 } from 'lucide-react';

export function ProcessingScreen() {
  return (
    <div className="text-center flex flex-col items-center space-y-4">
      <Loader2 className="w-16 h-16 animate-spin text-primary" />
      <h2 className="text-2xl font-semibold">processando video...</h2>
    </div>
  );
}
