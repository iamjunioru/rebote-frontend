import Image from 'next/image';
import { RefreshCw, CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlaybackScreenProps {
  onReset: () => void;
  videoUrl: string;
  posterUrl: string;
}

export function PlaybackScreen({ onReset, videoUrl, posterUrl }: PlaybackScreenProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(videoUrl)}&bgcolor=ffffff&color=000000`;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
      
      <div className="w-full lg:w-2/3 aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
        <video
          src={videoUrl}
          controls
          autoPlay
          loop
          className="w-full h-full object-cover"
          poster={posterUrl}
          data-ai-hint="volleyball match"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white/20 text-5xl lg:text-8xl font-black select-none uppercase">
            rebote
          </span>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col items-center text-center space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-success">
            <CheckCircle className="h-7 w-7" />
            <h2 className="text-2xl font-bold">replay salvo!</h2>
          </div>
          <p className="text-sm text-muted-foreground px-4">
            o replay contém os 30 segundos de ação que antecederam o acionamento do botão.
          </p>
        </div>

        <div className="w-full max-w-xs space-y-4">
            <div className="bg-card border rounded-lg p-4 flex flex-col items-center gap-4">
                <div className="bg-white p-2 rounded-md">
                    <Image
                        src={qrCodeUrl}
                        width={120}
                        height={120}
                        alt="QR Code para download do vídeo"
                        className="rounded-sm"
                    />
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium">baixar no celular</p>
                    <p className="text-xs text-muted-foreground">escaneie o QR code com a câmera</p>
                </div>
            </div>
          
            <Button asChild variant="secondary" className="w-full">
              <a href={videoUrl} download="replay-rebote.mp4">
                  <Download className="mr-2 h-4 w-4" />
                  baixar neste dispositivo
              </a>
            </Button>
        </div>
        
        <Button onClick={onReset} variant="outline" size="lg" className="w-full max-w-xs">
          <RefreshCw className="mr-2 h-5 w-5" />
          gravar Novamente
        </Button>
      </div>

    </div>
  );
}
