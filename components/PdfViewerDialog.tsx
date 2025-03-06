import type React from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface PdfViewerDialogProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
}

export const PdfViewerDialog: React.FC<PdfViewerDialogProps> = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-auto h-auto max-w-full max-h-full">
        <div className="relative">
          <DialogTitle />
          <Image
            src={pdfUrl}
            alt="pdfUrl"
            width={4000}
            height={3000}
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>

  )
}

