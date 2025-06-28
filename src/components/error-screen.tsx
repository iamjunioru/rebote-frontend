import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ErrorScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center space-y-6 p-4">
      <AlertTriangle className="h-16 w-16 text-destructive" />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">falha ao gerar o replay</h2>
        <p className="text-muted-foreground">
          ocorreu um erro e não foi possível salvar sua jogada.
        </p>
      </div>
      <Button onClick={onReset} variant="outline" size="lg" className="w-full max-w-xs">
        <RefreshCw className="mr-2 h-5 w-5" />
        tentar Novamente
      </Button>
    </div>
  );
}
