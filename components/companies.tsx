"use client";
import { CardData } from "@/types/type";
import Image from "next/image";
import { PdfViewerDialog } from "./PdfViewerDialog";
import { useState } from "react";

type Props = {
  selectedCard: CardData | null;
};

export default function Companies({ selectedCard }: Props) {
  const [pdfDialogOpen, setPdfDialogOpen] = useState<boolean>(false)
  const [currentPdfUrl, setCurrentPdfUrl] = useState<string>("")

  const handleImageClick = (pdfUrl: string) => {
    setCurrentPdfUrl(pdfUrl)
    setPdfDialogOpen(true)
  }
  return (
    <div className="flex flex-row justify-center py-30">
      <div className="w-[1052px] h-[900px] relative bg-white py-10">
        <div className="w-[247px] h-16 left-[206px] top-[3px] absolute bg-white rounded border-2 border-black" />
        <div
          className={`w-[100px] h-16 left-[459px] top-[3px] absolute bg-white rounded border-2  ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-[61px] h-16 left-[645px] top-[3px] absolute bg-white rounded border-2 border-black" />
        <div className="w-[91px] h-16 left-[954px] top-[3px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[55px] h-[82px] left-[990px] top-[68px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        {/* E19 */}
        <div
          className={`w-[55px] h-[54px] left-[990px] top-[151px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        {/* E52 */}
        <div
          className={`w-[136px] h-[114px] left-[349px] top-[118px] absolute bg-white rounded-[7.20px] border-2  ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        {/* E52bis */}
        <div
          className={`w-[76px] h-28 left-[517px] top-[118px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        {/* E53 */}
        <div
          className={`w-[146px] h-28 left-[594px] top-[118px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div className="w-[166px] h-[55px] left-[771px] top-[121px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        <div className="w-[166px] h-[57px] left-[771px] top-[178px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        <div className="w-[62px] h-[135px] left-0 top-[3px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[62px] h-[91px] left-0 top-[141px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[29px] h-[18px] left-[4px] top-[5px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E02
        </div>
        <div className="w-[133.96px] h-[17.76px] left-[22px] top-[105.96px] absolute origin-top-left -rotate-90 text-black text-[13px] font-bold font-['Inter']">
          AMININOX{" "}
        </div>
        <div className="w-[63px] h-[154px] left-[982px] top-[742px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[442px] h-[345px] left-[298px] top-[305px] absolute bg-white rounded-[7.20px] border-2 border-black" />
        <div className="w-[178px] h-[114px] left-[118px] top-[118px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        {/* E62 */}
        <div
          className={`w-32 h-[104px] left-[118px] top-[343px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "algues"
            ? "border-[#978a1a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "algues" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#978a1a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#978a1a]"></span>
            </span>
          )}
        </div>
        <div className="w-32 h-[91px] left-[118px] top-[509px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        {/* E60 */}
        <div
          className={`w-32 h-[99px] left-[118px] top-[603px] absolute bg-white rounded-[7.20px] border-2  ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[15px] left-[125px] top-[608px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E60
        </div>
        <div className="w-7 h-[13px] left-[125px] top-[348px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E62
        </div>
        <div className="w-7 h-[13px] left-[306px] top-[312px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E63
        </div>
        <div className="w-7 h-[13px] left-[124px] top-[122px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E51
        </div>
        <div className="w-7 h-[13px] left-[212px] top-[51px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E05
        </div>
        <div className="w-7 h-[13px] left-[356px] top-[124px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E52
        </div>
        <div className="w-7 h-[13px] left-[464px] top-[51px] absolute text-[#8a1156] text-[10px] font-bold font-['Inter']">
          E52
        </div>
        <div className="w-7 h-[13px] left-[599px] top-[123px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E15
        </div>
        <div className="w-7 h-[13px] left-[660px] top-[53px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E13
        </div>
        <div className="w-[61px] h-16 left-[707px] top-[3px] absolute bg-white rounded border-2 border-black" />
        <div className="w-7 h-[13px] left-[719px] top-[53px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E10
        </div>
        {/* E14 */}
        <div
          className={`w-[61px] h-16 left-[769px] top-[3px] absolute bg-white rounded border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[13px] left-[778px] top-[53px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E14
        </div>
        {/* E15 */}
        <div
          className={`w-[61px] h-16 left-[831px] top-[3px] absolute bg-white rounded border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div
          className={`w-[61px] h-16 left-[893px] top-[3px] absolute bg-white rounded border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[13px] left-[897px] top-[53px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E16
        </div>
        <div className="w-7 h-[13px] left-[995px] top-[93px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E18
        </div>
        <div className="w-7 h-[13px] left-[995px] top-[153px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E19
        </div>
        <div
          className={`w-[55px] h-[67px] left-[990px] top-[206px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[18px] left-[995px] top-[208px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E20
        </div>
        {/* E35 */}
        <div
          className={`w-[55px] h-[54px] left-[990px] top-[329px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        <div
          className={`w-[55px] h-[54px] left-[990px] top-[274px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[11px] left-[995px] top-[276px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E22
        </div>
        <div className="w-7 h-[11px] left-[995px] top-[332px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E23
          <br />
        </div>
        <div
          className={`w-[55px] h-[55px] left-[990px] top-[384px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-3 left-[995px] top-[386px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E24
        </div>
        <div
          className={`w-[55px] h-[54px] left-[990px] top-[440px] absolute bg-white rounded-[7.20px]  border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-3 left-[995px] top-[441px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E25
        </div>
        <div
          className={`w-[55px] h-[60px] left-[990px] top-[496px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[13px] left-[995px] top-[497px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E26
        </div>
        <div
          className={`w-[55px] h-20 left-[990px] top-[557px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        <div className="w-7 h-[17px] left-[995px] top-[560px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E27
        </div>
        <div className="w-7 h-[13px] left-[838px] top-[53px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E15
        </div>
        <div className="w-[37px] h-[13px] left-[522px] top-[123px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E53 bis
        </div>
        {/* E59 */}
        <div
          className={`w-[196px] h-[92px] left-[309px] top-[681px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-[190px] h-[101px] left-[6px] top-[796px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        {/* E56-a */}
        <div
          className={`w-[81px] h-[118px] left-[775px] top-[466px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        {/* E56 */}
        <div
          className={`w-[81px] h-[118px] left-[857px] top-[466px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>
        {/* E55 */}
        <div
          className={`w-[166px] h-28 left-[771px] top-[299px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "conchylicoles"
            ? "border-[#d5b88e] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "conchylicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b88e] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#d5b88e]"></span>
            </span>
          )}
        </div>
        <div className="w-[33px] h-5 left-[777px] top-[304px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E55
        </div>
        {/* E56-b */}
        <div
          className={`w-40 h-[68px] left-[775px] top-[585px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "piscicoles"
            ? "border-[#1b869a] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "piscicoles" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b869a] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#1b869a]"></span>
            </span>
          )}
        </div>{" "}
        <div className="w-8 h-[13px] left-[779px] top-[589px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E56-b
        </div>
        {/* E57-a */}
        <div
          className={`w-[97px] h-14 left-[776px] top-[686px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "social"
            ? "border-[#0a3643] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "social" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a3643] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#0a3643]"></span>
            </span>
          )}
        </div>
        <div className="w-8 h-[11px] left-[786px] top-[688px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E57-a
        </div>
        <div className="w-8 h-[11px] left-[316px] top-[684px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E59
        </div>
        <div
          className={`w-[66px] h-14 left-[874px] top-[686px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "social"
            ? "border-[#0a3643] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "social" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a3643] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#0a3643]"></span>
            </span>
          )}
        </div>
        <div className="w-5 h-[11px] left-[883px] top-[688px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E57
        </div>
        <div className="w-5 h-[11px] left-[987px] top-[746px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E29
        </div>
        {/* E57-b */}
        <div
          className={`w-[97px] h-14 left-[776px] top-[744px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "social"
            ? "border-[#0a3643] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "social" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a3643] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#0a3643]"></span>
            </span>
          )}
        </div>
        <div className="w-8 h-[10px] left-[784px] top-[746px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E57-b
        </div>
        {/* E57-c */}
        <div
          className={`w-[66px] h-14 left-[874px] top-[744px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "social"
            ? "border-[#0a3643] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "social" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0a3643] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#0a3643]"></span>
            </span>
          )}
        </div>
        <div className="w-[30px] h-[11px] left-[882px] top-[746px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E57-c
        </div>
        <div className="w-[33px] h-5 left-[779px] top-[470px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E56-a
        </div>
        <div className="w-[33px] h-5 left-[861px] top-[470px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E56
        </div>
        <div className="w-[22px] h-2 left-[757px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[29px] h-2 left-[757px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[22px] h-2 left-[757px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[81px] h-[54px] left-[751px] top-[842px] absolute bg-white rounded-[7.20px] border-2 border-black" />
        <div className="w-[19px] h-[9px] left-[339px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[26px] h-[9px] left-[339px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        {/* E39 */}
        <div
          className={`w-[87px] h-14 left-[324px] top-[843px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-[15px] h-[9px] left-[429px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[21px] h-[9px] left-[429px] top-[843px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        {/* E39 */}
        <div
          className={`w-[70px] h-14 left-[412px] top-[843px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-[15px] h-[9px] left-[648px] top-[844px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[21px] h-[9px] left-[648px] top-[844px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-[19px] h-[9px] left-[632px] top-[844px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        {/* E34 */}
        <div
          className={`w-16 h-14 left-[632px] top-[843px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-3.5 h-[9px] left-[591px] top-[844px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        <div className="w-5 h-[9px] left-[593px] top-[844px] absolute text-black text-[10px] font-normal font-['Inter']">
          E02
        </div>
        {/* E35 */}
        <div
          className={`w-[62px] h-14 left-[569px] top-[843px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-[149px] h-[54px] left-[833px] top-[842px] absolute bg-white rounded-[7.20px] border-2 border-black" />
        <div className="w-[68px] h-2 left-[840px] top-[845px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E32
        </div>
        <div className="w-[68px] h-2 left-[757px] top-[845px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E33
        </div>
        <div className="w-[68px] h-2 left-[640px] top-[845px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E34
        </div>
        <div className="w-[68px] h-2 left-[577px] top-[845px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E35
        </div>
        <div className="w-[68px] h-2 left-[419px] top-[847px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E38
        </div>
        <div className="w-[68px] h-2 left-[333px] top-[847px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E39
        </div>
        <div className="w-[30px] h-4 left-[5px] top-[144px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E01
        </div>
        <div className="w-[62px] h-[79px] left-[2px] top-[352px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[29px] h-[13px] left-[5px] top-[355px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E50
        </div>
        <div className="w-[62px] h-[59px] left-[2px] top-[433px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[29px] h-[13px] left-[5px] top-[434px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E48
        </div>
        <div className="w-[61px] h-[72px] left-[2px] top-[494px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[29px] h-[13px] left-[6px] top-[496px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E46
        </div>
        <div className="w-[61px] h-[82px] left-[2px] top-[568px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[29px] h-4 left-[8px] top-[568px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E45
        </div>
        <div className="w-[62px] h-[67px] left-[2px] top-[651px] absolute bg-[#d9d9d9] rounded" />
        <div className="w-[30px] h-[11px] left-[5px] top-[652px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E44
        </div>
        <div className="w-[30px] h-[11px] left-[11px] top-[800px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E43
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
          className="w-[19px] h-[19px] left-0 top-[255px] absolute"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[19px] h-[22px] left-0 top-[300px] absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[24.71px] h-[20.56px] left-[268.03px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[24.71px] h-[20.56px] left-[288.58px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[24.71px] h-[20.56px] left-[702.03px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[24.71px] h-[20.56px] left-[722.58px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[19px] h-[21px] left-[7px] top-[742px] absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[19px] h-[19px] left-[7px] top-[769px] absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[77.07px] h-[42.42px] left-[1063.81px] top-[733.68px] absolute origin-top-left rotate-[-179.92deg]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[77.07px] h-[42.42px] left-[1063.81px] top-[693.79px] absolute origin-top-left -rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[58.95px] h-[31.46px] left-[592.46px] top-[-13.95px] absolute origin-top-left rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[58.95px] h-[31.46px] left-[620.96px] top-[-13.97px] absolute origin-top-left rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <svg
          className="w-[78.11px] h-[41.85px] left-[199.85px] top-[-21.96px] absolute origin-top-left rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="play"
        >
          <path
            fill="#000000"
            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
          ></path>
        </svg>
        <div className="w-[58.41px] h-[17.93px] left-[17px] top-[589.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          CARE
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[17px] top-[589.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          CARE
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[13px] top-[667.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          WEIHAI
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[23px] top-[677.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          FLY
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[13px] top-[688.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          YOUNG
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[11px] top-[699.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          SPORTS
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[6px] top-[519.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          COFRIGOB
        </div>
        <div className="w-[58.41px] h-[17.93px] left-[5px] top-[534.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          BOUJDOUR
        </div>
        <div className="w-[58.41px] h-[26.53px] left-[13px] top-[604.18px] absolute text-black text-[10px] font-bold font-['Inter']">
          MARINE
        </div>
        <div className="w-[133.96px] h-[17.76px] left-[10px] top-[188.28px] absolute text-black text-[15px] font-bold font-['Inter']">
          FOOD{" "}
        </div>
        <div className="w-[133.96px] h-[14.99px] left-[6px] top-[396.97px] absolute text-black text-[13px] font-bold font-['Inter']">
          DU FLOT{" "}
        </div>
        <div className="w-[58.41px] h-[30.49px] left-[15px] top-[619.21px] absolute text-black text-[10px] font-bold font-['Inter']">
          PAINTS
        </div>
        <div className="w-[60.05px] h-[17.76px] left-[6px] top-[169.12px] absolute text-black text-[15px] font-bold font-['Inter']">
          TOUFA{" "}
        </div>
        <div className="w-[60.05px] h-[14.99px] left-[12px] top-[380.80px] absolute text-black text-[15px] font-bold font-['Inter']">
          JEAN{" "}
        </div>
        <div className="w-[72.63px] h-[11.64px] left-[5px] top-[454.10px] absolute text-black text-[13px] font-bold font-['Inter']">
          POLYTEL{" "}
        </div>
        <div className="w-[218.91px] h-[17.76px] left-[228px] top-[25.45px] absolute text-black text-base font-bold font-['Inter']">
          Projets Sociaux Aquacoles
        </div>
        <div className="w-[140.97px] h-[28.80px] left-[34px] top-[834.29px] absolute text-black text-2xl font-bold font-['Inter']">
          HALLE ONP
        </div>
        <div className="w-[124.83px] h-[28.80px] left-[120px] top-[534.29px] absolute text-black text-xl font-bold font-['Inter']">
          MERVEILLES
        </div>
        <div className="w-[124.83px] h-[28.80px] left-[146px] top-[158.26px] absolute text-black text-2xl font-bold font-['Inter']">
          PETROBIG
        </div>
        <div className="w-[83px] h-14 left-[484px] top-[843px] absolute bg-[#d9d9d9] rounded-[7.20px]" />
        <div className="w-7 h-[13px] left-[486px] top-[845px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E51
        </div>
        <div className="w-[64.17px] h-[14.70px] left-[496px] top-[864.13px] absolute text-black text-xs font-bold font-['Inter']">
          MAGRIZER
        </div>
        <div className="w-[124.83px] h-[28.80px] left-[804px] top-[132.26px] absolute text-black text-sm font-bold font-['Inter']">
          EQUIPE FADIA
        </div>
        <div className="w-[176.60px] h-[28.80px] left-[781px] top-[151.37px] absolute text-black text-xs font-bold font-['Inter']">
          PLASTIQUE ET SCABACK
        </div>
        <div className="w-[46.42px] h-[18px] left-[995px] top-[109.10px] absolute text-black text-xs font-bold font-['Inter']">
          OMEGA
        </div>
        <div className="w-[46.42px] h-[18px] left-[997px] top-[122.10px] absolute text-black text-xs font-bold font-['Inter']">
          FLUIDE
        </div>
        <div className="w-[147.27px] h-[28.80px] left-[786px] top-[196.31px] absolute text-black text-sm font-bold font-['Inter']">
          SOLIDUS VIDECART
        </div>
        <div className="w-[140.97px] h-[28.80px] left-[130px] top-[557.29px] absolute text-black text-xl font-bold font-['Inter']">
          DES MERS
        </div>
        <div className="w-[70.55px] h-[17.76px] left-[1034.76px] top-[795px] absolute origin-top-left rotate-[89.87deg] text-black text-[13px] font-bold font-['Inter']">
          AYLUS
        </div>
        <div className="w-[114.70px] h-[17.76px] left-[1013.76px] top-[773px] absolute origin-top-left rotate-[89.87deg] text-black text-[13px] font-bold font-['Inter']">
          REFRIGERATION
        </div>
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[344px] h-[311px] left-[339px] top-[322px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[125px] h-[79px] left-[792px] top-[318px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[123px] h-[77px] left-[599px] top-[137px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[67px] h-[67px] left-[522px] top-[147px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[122px] h-[83px] left-[356px] top-[142px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[62px] h-[55px] left-[486px] top-[6px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[652px] top-[8px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[716px] top-[8px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[779px] top-[8px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[51px] h-10 left-[346px] top-[856px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[55px] h-10 left-[422px] top-[856px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[577px] top-[857px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[640px] top-[857px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[838px] top-[9px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[45px] h-10 left-[901px] top-[9px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[34px] h-[34px] left-[1001px] top-[164px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[41px] h-11 left-[999px] top-[221px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[43px] h-[34px] left-[996px] top-[287px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[39px] h-[34px] left-[998px] top-[347px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[42px] h-[33px] left-[995px] top-[401px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[42px] h-[34px] left-[995px] top-[453px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[46px] h-[29px] left-[993px] top-[518px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[71px] h-[60px] left-[780px] top-[500px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-16 h-[60px] left-[865px] top-[500px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[68px] h-[60px] left-[820px] top-[588px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[58px] h-[42px] left-[796px] top-[698px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[58px] h-[42px] left-[797px] top-[755px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[108px] h-[79px] left-[361px] top-[688px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        {/* E58 */}
        <div
          className={`w-[196px] h-[92px] left-[538px] top-[680px] absolute bg-white rounded-[7.20px] border-2 ${selectedCard?.value == "equipementiers"
            ? "border-[#8a1156] animate-wiggle"
            : "border-black"
            }`}
        >
          {selectedCard?.value == "equipementiers" && (
            <span className="relative flex size-3 top-[-6px] left-[-6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
            </span>
          )}
        </div>
        <div className="w-8 h-[11px] left-[547px] top-[683px] absolute text-[#d5b88e] text-[10px] font-bold font-['Inter']">
          E58
        </div>
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[92px] h-[79px] left-[587px] top-[688px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[103px] h-[73px] left-[129px] top-[621px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-24 h-[82px] left-[130px] top-[361px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[42px] h-[38px] left-[771px] top-[855px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[70px] h-12 left-[871px] top-[845px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-12 h-[38px] left-[882px] top-[699px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-12 h-[38px] left-[882px] top-[757px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <Image
          alt="Image"
          width={1000}
          height={1000}
          className="w-[42px] h-[46px] left-[995px] top-[577px] absolute"
          onClick={() => handleImageClick("/pdfs/E63.pdf")}
          src="/Logo/E63.jpg"
        />
        <PdfViewerDialog isOpen={pdfDialogOpen} onClose={() => setPdfDialogOpen(false)} pdfUrl={currentPdfUrl} />
      </div>
    </div>
  );
}

{
  /* DOOR */
}
{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
className="w-[19px] h-[19px] left-0 top-[255px] absolute"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[19px] h-[22px] left-0 top-[300px] absolute"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[24.71px] h-[20.56px] left-[268.03px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[24.71px] h-[20.56px] left-[288.58px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[24.71px] h-[20.56px] left-[702.03px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[24.71px] h-[20.56px] left-[722.58px] top-[896.75px] absolute origin-top-left rotate-[-90.07deg]"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[19px] h-[21px] left-[7px] top-[742px] absolute"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[19px] h-[19px] left-[7px] top-[769px] absolute"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[77.07px] h-[42.42px] left-[1063.81px] top-[733.68px] absolute origin-top-left rotate-[-179.92deg]"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[77.07px] h-[42.42px] left-[1063.81px] top-[693.79px] absolute origin-top-left -rotate-180"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[58.95px] h-[31.46px] left-[592.46px] top-[-13.95px] absolute origin-top-left rotate-90"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[58.95px] h-[31.46px] left-[620.96px] top-[-13.97px] absolute origin-top-left rotate-90"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<svg
className="w-[78.11px] h-[41.85px] left-[199.85px] top-[-21.96px] absolute origin-top-left rotate-90"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
id="play"
>
<path
  fill="#000000"
  d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"
></path>
</svg>

<div
className={`w-[100px] h-16 left-[459px] top-[3px] absolute bg-white rounded border-2  ${
  selectedCard?.value == "equipementiers"
    ? "border-[#8a1156] animate-wiggle"
    : "border-black"
}`}
>
{selectedCard?.value == "equipementiers" && (
  <span className="relative flex size-3 top-[-6px] left-[-6px]">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8a1156] opacity-75"></span>
    <span className="relative inline-flex size-3 rounded-full bg-[#8a1156]"></span>
  </span>
)}
</div> */
}

// <div className="relative w-full max-w-7xl mx-auto p-8 bg-white border-4 border-gray-300">
//   {/* Header Section */}
//   <div className="flex justify-between items-center mb-8">
//     <div className="flex-1 relative">
//       <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm font-semibold">ANNUAIRE</span>
//     </div>
//     <div className="border-2 border-black px-6 py-2 relative">
//       <h1 className="text-xl font-bold">Projets Sociaux Aquacoles</h1>
//       <div className="absolute -top-3 left-4 bg-white px-1 text-xs">E11</div>
//     </div>
//     <div className="flex-1 flex justify-end gap-2">
//       {["MOBEDIT", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6"].map((logo, index) => (
//         <div key={index} className="w-16 h-8 border border-gray-300 flex items-center justify-center text-xs">
//           {logo}
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Main Grid Layout */}
//   <div className="grid grid-cols-12 gap-4">
//     {/* Left Column */}
//     <div className="col-span-2 space-y-2 border-r-2 border-l-2 border-gray-200 px-1">
//       <Card title="TOUFA FOOD" isGray />
//       <Card title="Setexam" borderColor="yellow" className="flex flex-col items-center justify-center" />
//       <Card title="POLYTEL" isGray className="flex flex-col items-center justify-center" />
//       <Card title="CONVOIR AQUACOLE" isGray className="flex flex-col items-center justify-center" />
//       <Card title="CARE MARINE PARTS" isGray className="flex flex-col items-center justify-center" />
//       <Card title="ironforama" borderColor="orange" className="flex flex-col items-center justify-center" />
//     </div>

//     {/* Center Content */}
//     <div className="col-span-8 space-y-4">
//       {/* Top Row */}
//       <div className="grid grid-cols-3 gap-4">
//         <Card title="PETROBIG" isGray />
//         <Card number="E52" title="O.O.S" borderColor="purple" />
//         <div className="grid grid-cols-2 gap-2">
//           <Card number="E53 bis" title="Logo" borderColor="orange" />
//           <Card number="E53" title="Logo" borderColor="orange" />
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-4">
//         <Card number="E54" title="EQUIPE FAIMA PLASTIQUE ET SOUPLACK" isGray className="col-span-2" />
//         <Card number="E55-a" title="SOUDAX VISCART" />
//         <Card number="E55" title="AQUA TYPE" />
//       </div>

//       {/* Center ANDA Logo */}
//       <div className="aspect-[2/1] relative border-2 border-gray-300 p-8 flex items-center justify-center">
//         <Image
//           src=""
//           alt="ANDA Logo"
//           width={500}
//           height={250}
//           className="object-contain"
//         />
//       </div>

//       {/* Bottom Row */}
//       <div className="grid grid-cols-3 gap-4">
//         <Card number="E59" title="JICHICOLINO" borderColor="purple" />
//         <Card number="E58" title="MapMar" borderColor="purple" />
//         <div className="grid grid-cols-2 gap-2">
//           <Card number="E57-a" title="Arade" />
//           <Card number="E57" title="Logo" />
//         </div>
//       </div>
//     </div>

//     {/* Right Column */}
//     <div className="col-span-2 space-y-2 border-r-2 border-l-2 border-gray-200 px-1">
//       <Card number="E11" title="OMEGA ELIXIR" isGray />
//       <Card number="E23" title="AOZP" isGray />
//       <Card number="E24" title="SAFAMAR" isGray />
//       <Card number="E25" title="RAMA FISHERIES" isGray />
//       <Card number="E27" title="Logo" isGray />
//     </div>
//   </div>

//   {/* Bottom Section */}
//   <div className="mt-4 grid grid-cols-12 gap-4">
//     <div className="col-span-2">
//       <Card title="HALLE ONP" isGray className="h-full" />
//     </div>
//     <div className="col-span-10 grid grid-cols-6 gap-2">
//       <Card number="E39" title="SATROMAR" borderColor="purple" />
//       <Card number="E38" title="AQUAMAR" borderColor="purple" />
//       <Card number="E37" title="AQUA MADRIZER" borderColor="purple" />
//       <Card number="E35" title="FRANCE NAISSAIN" />
//       <Card number="E34" title="INTERQUIP" />
//       <div className="grid grid-cols-2 gap-1">
//         <Card number="E33" title="Logo" />
//         <Card number="E32" title="BADINA FISH" />
//       </div>
//       <Card number="E31" title="Logo" />
//       <Card number="E30" title="Logo" />
//       <Card number="E29" title="Logo" />
//       <Card number="E28" title="Logo" />
//     </div>
//   </div>
// </div>
// function Card({ number, title, borderColor = "gray", isGray = false, className = "" }: CardProps) {
//   const borderClass = borderColor === "gray" ? "border-gray-300" : `border-${borderColor}-500`
//   const bgClass = isGray ? "bg-gray-200" : "bg-white"

//   return (
//     <div
//       className={`h-16 ${bgClass} flex items-center justify-center p-2 relative border-2 ${borderClass} ${className}`}
//     >
//       {number && <div className="absolute -top-3 left-2 bg-white px-1 text-xs">{number}</div>}
//       <span className="text-xs text-center">{title}</span>
//     </div>
//   )
// }
