import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function DeveloperInfo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer hover:text-primary transition-colors">
          feito com ❤️ by <span className="font-bold">@iamjunioru</span>.
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sobre o Desenvolvedor</DialogTitle>
        </DialogHeader>
        <div className="py-6 text-center space-y-6">
          <div className="space-y-4">
            <p className="font-medium">Entre em contato</p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">escaneie para ver o perfil no gitHub</p>
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5588994953035"
                width={150}
                height={150}
                alt="QR Code para GitHub"
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
      </DialogContent>
    </Dialog>
  );
}
