import { useId, type ReactNode } from "react";
import { serviceIcon } from "@/components/icons";

/**
 * Original line-art chart marks. Decorative contours stay aria-hidden.
 * The coast chart names the real service areas and is one image for assistive tech.
 */

const PINS = [
  { name: "Palm Beach", x: 278, y: 294, labelY: 292, primary: false },
  { name: "Pompano Beach", x: 288, y: 336, labelY: 330, primary: false },
  { name: "Fort Lauderdale", x: 292, y: 366, labelY: 366, primary: true },
  { name: "Dania Beach", x: 290, y: 392, labelY: 402, primary: false },
  { name: "Hollywood", x: 282, y: 416, labelY: 436, primary: false },
  { name: "Miami", x: 266, y: 448, labelY: 470, primary: false },
] as const;

function compassMarks() {
  return (
    <>
      <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.85" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
      <circle cx="60" cy="60" r="3" fill="currentColor" />
      <path d="M60 10 L66 60 L60 52 L54 60 Z" fill="currentColor" />
      <path d="M60 110 L66 60 L60 68 L54 60 Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M10 60 L60 54 L52 60 L60 66 Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M110 60 L60 54 L68 60 L60 66 Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M24.6 24.6 L58 52 L52 58 Z M95.4 24.6 L68 52 L62 58 Z M24.6 95.4 L52 62 L58 68 Z M95.4 95.4 L68 68 L62 62 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.8"
      />
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontFamily="inherit"
        fontWeight="700"
      >
        N
      </text>
    </>
  );
}

export function CompassRose({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden>
      {compassMarks()}
    </svg>
  );
}

export function CoastChart({ className = "" }: { className?: string }) {
  const titleId = useId();
  return (
    <figure className={`coast-chart ${className}`.trim()}>
      <svg viewBox="0 0 520 640" role="img" aria-labelledby={titleId}>
        <title id={titleId}>
          Line chart of the South Florida coast. Service areas, north to south: Palm Beach, Pompano
          Beach, Fort Lauderdale (primary), Dania Beach, Hollywood, and Miami.
        </title>
        <g fill="none" stroke="#d4b15a" strokeWidth="0.8" opacity="0.28">
          <path d="M20 70 C 90 40, 160 110, 240 64 S 380 30, 470 96" />
          <path d="M10 130 C 100 90, 180 170, 270 120 S 400 80, 480 150" />
          <path d="M8 200 C 110 160, 190 240, 290 188 S 410 150, 478 214" />
          <path d="M12 270 C 120 230, 200 310, 300 258 S 420 220, 476 286" />
          <path d="M16 350 C 130 310, 210 390, 310 338 S 420 300, 472 366" />
          <path d="M20 430 C 140 390, 220 470, 320 418 S 420 380, 468 446" />
          <path d="M30 510 C 150 470, 230 550, 330 498 S 420 460, 460 520" />
          <path d="M48 580 C 160 548, 250 610, 340 568 S 420 540, 455 590" />
        </g>
        <g fill="none" stroke="#e2c56a" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
          <path d="M36 108 L34 86 L78 74 L128 64 L176 58 L214 62 L248 78 L262 108 L258 142 L272 168 L296 196 L284 224 L274 256 L278 292 L286 326 L292 358 L290 390 L280 422 L262 452 L236 478 L204 500 L170 518 L138 532 L112 542 L98 528 L118 514 L148 496 L162 474 L150 450 L134 424 L122 392 L132 360 L118 328 L128 296 L112 264 L124 232 L108 204 L118 172 L104 146 L118 124 L86 118 L48 122 Z" />
          <path d="M156 516 C140 530 122 540 104 548" strokeWidth="1.15" />
          <ellipse cx="206" cy="372" rx="30" ry="22" strokeWidth="0.9" opacity="0.75" />
        </g>
        <g fill="#e8d08a" fontFamily="inherit">
          {PINS.map((pin) => (
            <g key={pin.name}>
              <circle
                cx={pin.x}
                cy={pin.y}
                r={pin.primary ? 8 : 5.5}
                fill="none"
                stroke="#e2c56a"
                strokeWidth={pin.primary ? 1.6 : 1.15}
              />
              <circle cx={pin.x} cy={pin.y} r={pin.primary ? 3 : 2} fill="#e2c56a" />
              <line
                x1={pin.x + (pin.primary ? 9 : 7)}
                y1={pin.y}
                x2={pin.x + 16}
                y2={pin.labelY}
                stroke="#e2c56a"
                strokeWidth="0.8"
              />
              <text
                x={pin.x + 20}
                y={pin.labelY + 4}
                fontSize={pin.primary ? 16 : 14}
                fontWeight={pin.primary ? 700 : 600}
                letterSpacing="0.08em"
                style={{ textTransform: "uppercase" }}
              >
                {pin.name}
              </text>
            </g>
          ))}
        </g>
        <svg x="442" y="16" width="64" height="64" viewBox="0 0 120 120" aria-hidden style={{ color: "#e2c56a" }}>
          {compassMarks()}
        </svg>
      </svg>
    </figure>
  );
}

function contourPaths(seed: number): string[] {
  const shift = (seed % 9) * 6;
  return [0, 1, 2, 3, 4, 5].map((i) => {
    const y = 18 + i * 34 + (shift % 5);
    const bend = 16 + ((seed + i * 3) % 22);
    return `M -20 ${y} C 60 ${y - bend}, 130 ${y + bend}, 200 ${y - bend / 2} S 300 ${y + bend}, 340 ${y - 6}`;
  });
}

export function ChartPlate({
  seed = 1,
  icon,
  className = "",
}: {
  seed?: number;
  icon?: string;
  className?: string;
}) {
  const mark: ReactNode = icon ? (
    <span className="chart-plate__mark">{serviceIcon(icon, "h-8 w-8")}</span>
  ) : (
    <span className="chart-plate__pin" aria-hidden />
  );

  return (
    <div className={`chart-plate ${className}`.trim()} aria-hidden>
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="200" fill="#0c1e36" />
        <g fill="none" stroke="#d4b15a" strokeWidth="0.9" opacity="0.45">
          {contourPaths(seed).map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <rect x="8" y="8" width="304" height="184" fill="none" stroke="#d4b15a" strokeWidth="0.6" opacity="0.45" />
      </svg>
      {mark}
    </div>
  );
}
