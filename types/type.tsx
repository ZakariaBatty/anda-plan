export interface CardData {
  id: string;
  title: string;
  backgroundColor: string;
  value: string;
}

export interface CardProps {
  number?: string
  title: string
  borderColor?: "gray" | "purple" | "orange"
  isGray?: boolean
  height?: string
}

