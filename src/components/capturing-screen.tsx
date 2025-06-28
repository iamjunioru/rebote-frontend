import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CapturingScreen({
  onTrigger,
  currentDate,
  currentTime,
}: {
  onTrigger: () => void;
  currentDate: string;
  currentTime: string;
}) {
  return (
    <div className="text-center space-y-8 flex flex-col items-center">
      <div className="flex items-center text-muted-foreground">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive/75 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
        </span>
        <span className="ml-3 text-lg font-medium">gravando...</span>
      </div>
      
      <Button
        onClick={onTrigger}
        className="bg-success hover:bg-success/90 text-success-foreground rounded-full h-40 w-40 md:h-48 md:w-48 shadow-2xl shadow-success/20 transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center text-xl md:text-2xl font-bold"
        aria-label="Salvar Replay"
      >
        <Video className="w-12 h-12 md:w-16 md:h-16 mb-2"/>
        SALVAR
      </Button>

      <div className="text-center">
        {currentDate && currentTime ? (
          <>
            <p className="text-3xl md:text-4xl font-bold tracking-wider text-foreground">{currentTime}</p>
            <p className="text-sm md:text-base text-muted-foreground">{currentDate}</p>
          </>
        ) : (
          <p className="text-muted-foreground">carregando data e hora...</p>
        )}
      </div>
    </div>
  );
}
