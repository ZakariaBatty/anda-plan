"use client";

import { useEffect, useState } from "react";
import AquacultureHome from "@/components/home";
import QRCodePage from "@/components/qrcode";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showQRCodes, setShowQRCodes] = useState(true);
  const [autoSwitch, setAutoSwitch] = useState(true);

  useEffect(() => {
    if (!autoSwitch) return;

    const interval = setInterval(() => {
      setShowQRCodes((prev) => !prev);
    }, 60000); // Switch every 1 minute

    return () => clearInterval(interval);
  }, [autoSwitch]);

  const handleManualSwitch = () => {
    setShowQRCodes((prev) => !prev);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/Arriere.jpg')`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center h-full">
        <div className="fixed top-4 right-4 flex items-center gap-8 bg-white/80 backdrop-blur p-4 rounded-lg shadow-md z-50">
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-switch"
              checked={autoSwitch}
              onCheckedChange={setAutoSwitch}
            />
            <Label htmlFor="auto-switch">Commutation auto</Label>
          </div>
          <Button onClick={handleManualSwitch} variant="outline">
            Changer de section
          </Button>
        </div>
        <header className="w-full text-center pt-24">
          <Image
            src="/plan/Logo.svg"
            alt="ANDA Logo"
            width={700}
            height={146}
            className="mx-auto mb-20"
          />
        </header>
      </div>

      {/* Animated Section Switching */}
      <div className="relative w-full h-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          {showQRCodes ? (
            <motion.div
              key="aquaculture"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <AquacultureHome />
            </motion.div>
          ) : (
            <motion.div
              key="qrcode"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <QRCodePage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
