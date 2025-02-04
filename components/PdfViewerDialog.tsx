import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PdfViewerDialogProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
}

export const PdfViewerDialog: React.FC<PdfViewerDialogProps> = ({ isOpen, onClose, pdfUrl }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>PDF Viewer</DialogTitle>
        </DialogHeader>
        <iframe src={`${pdfUrl}#toolbar=0`} className="w-full h-[70vh]" title="PDF Viewer" />
      </DialogContent>
    </Dialog>
  )
}

