export const hungrySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="300" height="160">
  <style>
    @keyframes tummyRumble {
      0%, 100% { transform: translate(0px, 0px); }
      20% { transform: translate(-2px, 0px); }
      40% { transform: translate(2px, 0px); }
      60% { transform: translate(-1px, 0px); }
      80% { transform: translate(1px, 0px); }
    }
    @keyframes armHold {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-3px); }
    }
    @keyframes teardrop {
      0%   { opacity: 0; transform: translateY(0px); }
      20%  { opacity: 1; }
      80%  { opacity: 1; }
      100% { opacity: 0; transform: translateY(18px); }
    }
    @keyframes sweat {
      0%   { opacity: 0; transform: translateY(0px); }
      20%  { opacity: 0.9; }
      80%  { opacity: 0.9; }
      100% { opacity: 0; transform: translateY(14px); }
    }
    @keyframes starFloat {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.1); }
    }
    @keyframes mouthQuiver {
      0%, 100% { transform: translateY(0px); }
      30% { transform: translateY(1px); }
      60% { transform: translateY(-1px); }
    }
    @keyframes eyeWaver {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(0.85); }
    }
    .rumble { animation: tummyRumble 0.35s ease-in-out infinite; }
    .arm-l  { animation: armHold 1.2s ease-in-out infinite; }
    .arm-r  { animation: armHold 1.2s ease-in-out infinite 0.6s; }
    .tear   { animation: teardrop 2s ease-in infinite; }
    .sweat  { animation: sweat 1.5s ease-in infinite 0.75s; }
    .star1  { animation: starFloat 1.8s ease-in-out infinite 0s; }
    .star2  { animation: starFloat 2.1s ease-in-out infinite 0.6s; }
    .star3  { animation: starFloat 1.5s ease-in-out infinite 1.1s; }
    .mouth-q { animation: mouthQuiver 0.8s ease-in-out infinite; }
    .eye-l  { transform-origin: 134px 72px; animation: eyeWaver 2s ease-in-out infinite; }
    .eye-r  { transform-origin: 166px 72px; animation: eyeWaver 2s ease-in-out infinite 0.4s; }
  </style>

  <rect width="300" height="160" rx="20" fill="#FFF5E6"/>

  <ellipse cx="150" cy="122" rx="44" ry="29" fill="#F4C48E"/>
  <ellipse cx="150" cy="127" rx="28" ry="19" fill="#FDE8C8"/>

  <g class="arm-l">
    <circle cx="108" cy="118" r="9" fill="#E8A870"/>
  </g>
  <g class="arm-r">
    <circle cx="192" cy="118" r="9" fill="#E8A870"/>
  </g>

  <circle cx="133" cy="149" r="9" fill="#D4956A"/>
  <circle cx="167" cy="149" r="9" fill="#D4956A"/>

  <circle cx="150" cy="78" r="36" fill="#F4C48E"/>

  <circle cx="120" cy="50" r="14" fill="#F4C48E"/>
  <circle cx="120" cy="50" r="9"  fill="#FFCFBF"/>
  <circle cx="180" cy="50" r="14" fill="#F4C48E"/>
  <circle cx="180" cy="50" r="9"  fill="#FFCFBF"/>

  <circle cx="128" cy="88" r="15" fill="#FDE8C8"/>
  <circle cx="172" cy="88" r="15" fill="#FDE8C8"/>

  <g class="eye-l">
    <circle cx="134" cy="72" r="6"  fill="#2C1A0E"/>
    <circle cx="135" cy="71" r="2"  fill="white"/>
  </g>
  <g class="eye-r">
    <circle cx="166" cy="72" r="6"  fill="#2C1A0E"/>
    <circle cx="167" cy="71" r="2"  fill="white"/>
  </g>

  <ellipse cx="150" cy="83" rx="4" ry="3" fill="#E8829A"/>

  <g class="mouth-q">
    <path d="M143 91 Q147 87 150 89 Q153 91 157 88" stroke="#D06880" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </g>

  <g class="tear">
    <ellipse cx="128" cy="82" rx="2.5" ry="3.5" fill="#A8D8F0" opacity="0.85"/>
  </g>

  <g class="sweat">
    <ellipse cx="171" cy="60" rx="2" ry="3" fill="#A8D8F0" opacity="0.9"/>
  </g>

  <g class="rumble">
    <ellipse cx="150" cy="127" rx="16" ry="8" fill="#FDD0A0" opacity="0.5"/>
    <text x="150" y="131" text-anchor="middle" font-size="10" fill="#C87840" font-family="Georgia, serif" font-weight="bold">꼬르륵</text>
  </g>

  <g class="star1">
    <text x="60"  y="50" font-size="16" fill="#FFB830" font-family="serif">★</text>
  </g>
  <g class="star2">
    <text x="230" y="42" font-size="12" fill="#FFA0B4" font-family="serif">★</text>
  </g>
  <g class="star3">
    <text x="44"  y="84" font-size="10" fill="#A0C8FF" font-family="serif">★</text>
  </g>
</svg>`;
