"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CapturingScreen } from '@/components/capturing-screen';
import { ProcessingScreen } from '@/components/processing-screen';
import { PlaybackScreen } from '@/components/playback-screen';
import { Confetti } from '@/components/confetti';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Mail, Phone } from 'lucide-react';
import { ErrorScreen } from '@/components/error-screen';
import { generateMockVideo } from '@/lib/mocks/video';
import { DeveloperInfo } from '@/components/developer-info';

type AppState = 'capturing' | 'triggered' | 'playing' | 'error';

export default function HomePage() {
  const [state, setState] = useState<AppState>('capturing');
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | undefined>();
  const [posterUrl, setPosterUrl] = useState<string | undefined>();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
    };
    
    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleTrigger = async () => {
    setShowConfetti(true);
    setState('triggered');
    
    const result = await generateMockVideo();

    setShowConfetti(false);
    
    if (result.success) {
      setVideoUrl(result.url);
      setPosterUrl(result.poster);
      setState('playing');
    } else {
      setState('error');
    }
  };

  const handleReset = () => {
    setState('capturing');
    setVideoUrl(undefined);
    setPosterUrl(undefined);
  };

  const renderState = () => {
    switch (state) {
      case 'capturing':
        return <CapturingScreen onTrigger={handleTrigger} currentDate={currentDate} currentTime={currentTime} />;
      case 'triggered':
        return <ProcessingScreen />;
      case 'playing':
        return <PlaybackScreen onReset={handleReset} videoUrl={videoUrl!} posterUrl={posterUrl!} />;
      case 'error':
        return <ErrorScreen onReset={handleReset} />;
      default:
        return <CapturingScreen onTrigger={handleTrigger} currentDate={currentDate} currentTime={currentTime} />;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
        <button onClick={handleReset} className="text-left transition-opacity hover:opacity-80">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">rebote</h1>
          <p className="text-sm text-muted-foreground">replay instantâneo para suas jogadas.</p>
        </button>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">sobre</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>🏐 sobre</SheetTitle>
              <SheetDescription>
                o "rebote" é um sistema de replay instantâneo, criado com muito carinho pelo junior(eu), direto de Cedro, no coração do Ceará! a ideia é levar tecnologia de forma prática e acessível para quadras esportivas, permitindo que atletas e equipes revejam suas melhores jogadas.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 text-center space-y-6">
              <div className="space-y-4">
                  <p className="font-medium">entre em contato</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">escaneie para entrar em contato</p>
                    <Image
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5588994953035"
                      width={150}
                      height={150}
                      alt="QR Code para Contato"
                      className="rounded-md mx-auto bg-white p-2"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>iamjunioru@gmail.com</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>(88) 99495-3035</span>
                      </div>
                  </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-muted-foreground">
              <p>versão 0.0.1</p>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      
      {showConfetti && <Confetti />}
      <main className="flex-grow flex items-center justify-center w-full max-w-6xl p-4 pt-24 pb-20">
        {renderState()}
      </main>

      <footer className="absolute bottom-0 w-full p-6 text-center text-sm text-muted-foreground">
        <DeveloperInfo />
      </footer>
    </div>
  );
}
