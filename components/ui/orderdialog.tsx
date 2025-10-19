'use client' 

import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface OrderDialogProps {
  doorDashUrl: string
  uberEatsUrl: string
  triggerClassName?: string
  triggerText?: string
}

export function OrderDialog({ 
  doorDashUrl, 
  uberEatsUrl,
  triggerClassName = "bg-brand-primary text-primary-foreground font-bold",
  triggerText = "Order Now"
}: OrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Button className={triggerClassName}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Choose Your Delivery Service</DialogTitle>
          <DialogDescription>
            Select your preferred delivery platform to place your order
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center gap-4 py-4 ">
          <Button
            variant="default"
            size="lg"
            className="flex-1 h-20 md:h-40 flex flex-col gap-2 bg-white hover:bg-white/90 cursor-pointer"
            onClick={() => window.open(doorDashUrl, '_blank')}
          >
            <Image
              src="/DoorDash_Logo.svg"
              alt="DoorDash"
              width={180}
              height={180}
            />
          </Button>
          
          <Button
            variant="default"
            size="lg"
            className="flex-1 h-20 md:h-40 flex flex-col gap-2 bg-white hover:bg-white/90 cursor-pointer"
            onClick={() => window.open(uberEatsUrl, '_blank')}
          >
            
              <Image
                src="/ubereats.svg"
                alt="Uber Eats"
                width={180}
                height={180}
              />
            
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}