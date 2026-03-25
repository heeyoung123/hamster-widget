"use client";

import { useState, useEffect, useRef } from "react";

type HamsterState = "running" | "eating" | "sleeping" | "bowing";

interface Acorn {
  id: number;
  x: number;
  y: number;
  falling: boolean;
}

export default function Home() {
  const [hamsterState, setHamsterState] = useState<HamsterState>("running");
  const [acorns, setAcorns] = useState<Acorn[]>([]);
  const [feederPulse, setFeederPulse] = useState(false);
  const acornIdRef = useRef(0);
  const bowTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // restore running after bow
  useEffect(() => {
    if (hamsterState === "bowing") {
      if (bowTimeoutRef.current) clearTimeout(bowTimeoutRef.current);
      bowTimeoutRef.current = setTimeout(() => {
        setHamsterState("running");
      }, 1800);
    }
    return () => {
      if (bowTimeoutRef.current) clearTimeout(bowTimeoutRef.current);
    };
  }, [hamsterState]);

  function handleFeederClick() {
    setFeederPulse(true);
    setTimeout(() => setFeederPulse(false), 300);

    const id = acornIdRef.current++;
    const x = 172 + (Math.random() * 20 - 10);
    setAcorns((prev) => [...prev, { id, x, y: 20, falling: true }]);

    setTimeout(() => {
      setAcorns((prev) => prev.filter((a) => a.id !== id));
      setHamsterState("bowing");
    }, 700);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50">
      <h1 className="text-2xl font-bold text-amber-800 mb-2">🐹 햄스터 위젯</h1>
      <p className="text-sm text-amber-600 mb-8">먹이통을 눌러보세요!</p>

      <div className="relative" style={{ width: 300, height: 220 }}>

        {/* Hamster SVG */}
        <div style={{ position: "absolute", top: 30, left: 0 }}>
          <HamsterDisplay state={hamsterState} />
        </div>

        {/* Acorns on top of hamster */}
        {acorns.map((acorn) => (
          <div
            key={acorn.id + "-top"}
            className="absolute pointer-events-none"
            style={{
              left: acorn.x,
              top: 0,
              zIndex: 10,
              animation: "acornFall 0.65s cubic-bezier(0.4,0,1,1) forwards",
            }}
          >
            <svg width="20" height="24" viewBox="0 0 20 24">
              <rect x="5" y="6" width="10" height="5" rx="2.5" fill="#A07830"/>
              <ellipse cx="10" cy="6" rx="7" ry="3" fill="#B89040"/>
              <line x1="10" y1="3" x2="10" y2="0" stroke="#8B6520" strokeWidth="2" strokeLinecap="round"/>
              <ellipse cx="10" cy="16" rx="7" ry="8" fill="#D4A844"/>
            </svg>
          </div>
        ))}

        {/* Feeder button — heart-shaped bowl, bottom right */}
        <button
          onClick={handleFeederClick}
          className="absolute bottom-0 right-0 flex flex-col items-center gap-1 group"
          style={{ right: 10, bottom: 10 }}
        >
          <span className="text-xs text-amber-700 font-medium opacity-70 group-hover:opacity-100 transition-opacity">
            먹이주기
          </span>
          <div
            className="transition-transform duration-150"
            style={{ transform: feederPulse ? "scale(1.2)" : "scale(1)" }}
          >
            <FeederBowl />
          </div>
        </button>
      </div>

      {/* State selector for preview */}
      <div className="flex gap-3 mt-8">
        {(["running", "eating", "sleeping"] as HamsterState[]).map((s) => (
          <button
            key={s}
            onClick={() => setHamsterState(s)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              hamsterState === s
                ? "bg-amber-500 text-white"
                : "bg-amber-100 text-amber-700 hover:bg-amber-200"
            }`}
          >
            {s === "running" ? "💃 춤추기" : s === "eating" ? "🌰 먹기" : "😴 자기"}
          </button>
        ))}
      </div>

      <p className="text-xs text-amber-400 mt-6">
        GitHub README용:{" "}
        <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-700">
          /api/hamster
        </code>
      </p>

      <style>{`
        @keyframes acornFall {
          0%   { transform: translateY(0px) rotate(0deg); opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(140px) rotate(180deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function HamsterDisplay({ state }: { state: HamsterState }) {
  if (state === "bowing") return <BowingHamster />;
  return (
    <img
      src={`/api/hamster/${state}`}
      alt="hamster"
      width={300}
      height={160}
    />
  );
}

function BowingHamster() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="300" height="160">
      <style>{`
        @keyframes bow {
          0%   { transform: rotate(0deg); }
          30%  { transform: rotate(30deg); }
          70%  { transform: rotate(30deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes bowArm {
          0%   { transform: rotate(0deg); }
          30%  { transform: rotate(40deg); }
          70%  { transform: rotate(40deg); }
          100% { transform: rotate(0deg); }
        }
        .bow-body { transform-origin: 128px 130px; animation: bow 1.6s ease-in-out forwards; }
        .bow-arm-l { transform-origin: 108px 107px; animation: bowArm 1.6s ease-in-out forwards; }
        .bow-arm-r { transform-origin: 148px 107px; animation: bowArm 1.6s ease-in-out forwards; }
      `}</style>
      <rect width="300" height="160" rx="20" fill="#FFF5E6"/>
      <g className="bow-body">
        <g className="bow-arm-l">
          <ellipse cx="108" cy="112" rx="7" ry="13" fill="#E8A870"/>
          <circle cx="108" cy="124" r="7" fill="#E8A870"/>
        </g>
        <g className="bow-arm-r">
          <ellipse cx="148" cy="112" rx="7" ry="13" fill="#E8A870"/>
          <circle cx="148" cy="124" r="7" fill="#E8A870"/>
        </g>
        <ellipse cx="128" cy="114" rx="32" ry="25" fill="#F4C48E"/>
        <ellipse cx="128" cy="119" rx="20" ry="16" fill="#FDE8C8"/>
        <ellipse cx="114" cy="133" rx="8" ry="13" fill="#D4956A"/>
        <ellipse cx="142" cy="133" rx="8" ry="13" fill="#D4956A"/>
        <path d="M96 116 Q81 110 83 122 Q85 132 96 128" stroke="#F4C48E" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <circle cx="128" cy="78" r="30" fill="#F4C48E"/>
        <circle cx="109" cy="84" r="13" fill="#FDE8C8"/>
        <circle cx="147" cy="84" r="13" fill="#FDE8C8"/>
        <circle cx="109" cy="54" r="13" fill="#F4C48E"/>
        <circle cx="109" cy="54" r="8" fill="#FFCFBF"/>
        <circle cx="147" cy="54" r="13" fill="#F4C48E"/>
        <circle cx="147" cy="54" r="8" fill="#FFCFBF"/>
        <circle cx="118" cy="72" r="4.5" fill="#2C1A0E"/>
        <circle cx="119" cy="71" r="1.5" fill="white"/>
        <circle cx="136" cy="72" r="4.5" fill="#2C1A0E"/>
        <circle cx="137" cy="71" r="1.5" fill="white"/>
        <ellipse cx="128" cy="82" rx="4" ry="3" fill="#E8829A"/>
        <path d="M124 86 Q128 90 132 86" stroke="#D06880" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>
      <text x="160" y="60" fontSize="22" textAnchor="middle">✨</text>
      <text x="140" y="40" fontSize="14" textAnchor="middle" fill="#E8829A" fontWeight="bold">감사합니다!</text>
    </svg>
  );
}

function FeederBowl() {
  return (
    <svg width="64" height="60" viewBox="0 0 64 60">
      <path
        d="M32 52 C10 52 4 34 4 26 C4 14 12 8 20 8 C24 8 28 10 32 14 C36 10 40 8 44 8 C52 8 60 14 60 26 C60 34 54 52 32 52 Z"
        fill="#FF8FA3"
        stroke="#E8607A"
        strokeWidth="2"
      />
      <path
        d="M32 46 C14 46 10 32 10 26 C10 18 16 14 20 14 C24 14 28 16 32 20 C36 16 40 14 44 14 C48 14 54 18 54 26 C54 32 50 46 32 46 Z"
        fill="#FFB3C1"
      />
      <ellipse cx="24" cy="30" rx="5" ry="4" fill="#D4A844" opacity="0.8"/>
      <ellipse cx="36" cy="34" rx="4" ry="3.5" fill="#D4A844" opacity="0.7"/>
      <ellipse cx="42" cy="28" rx="3.5" ry="3" fill="#D4A844" opacity="0.6"/>
    </svg>
  );
}
