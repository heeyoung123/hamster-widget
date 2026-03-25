export const runningSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="300" height="160">
  <style>
    @keyframes bodyBop {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25%  { transform: translateY(-7px) rotate(-4deg); }
      75%  { transform: translateY(-7px) rotate(4deg); }
    }
    @keyframes armL {
      0%, 100% { transform: translateY(0px); }
      25%  { transform: translateY(-10px); }
      75%  { transform: translateY(6px); }
    }
    @keyframes armR {
      0%, 100% { transform: translateY(0px); }
      25%  { transform: translateY(6px); }
      75%  { transform: translateY(-10px); }
    }
    @keyframes legL {
      0%, 100% { transform: translateY(0px); }
      25%  { transform: translateY(-6px); }
      75%  { transform: translateY(4px); }
    }
    @keyframes legR {
      0%, 100% { transform: translateY(0px); }
      25%  { transform: translateY(4px); }
      75%  { transform: translateY(-6px); }
    }
    @keyframes earWiggle {
      0%, 100% { transform: rotate(0deg); }
      25%  { transform: rotate(-10deg); }
      75%  { transform: rotate(10deg); }
    }
    @keyframes noteBob1 {
      0%, 100% { transform: translate(0px, 0px); opacity: 0.85; }
      50%  { transform: translate(-3px, -9px); opacity: 1; }
    }
    @keyframes noteBob2 {
      0%, 100% { transform: translate(0px, 0px); opacity: 0.75; }
      50%  { transform: translate(3px, -11px); opacity: 1; }
    }
    @keyframes noteBob3 {
      0%, 100% { transform: translate(0px, 0px); opacity: 0.65; }
      50%  { transform: translate(-2px, -7px); opacity: 0.95; }
    }
    .body-bop { transform-origin: 150px 112px; animation: bodyBop 0.6s ease-in-out infinite; }
    .arm-l    { animation: armL 0.6s ease-in-out infinite; }
    .arm-r    { animation: armR 0.6s ease-in-out infinite; }
    .leg-l    { animation: legL 0.6s ease-in-out infinite; }
    .leg-r    { animation: legR 0.6s ease-in-out infinite; }
    .ear-l    { transform-origin: 122px 56px; animation: earWiggle 0.6s ease-in-out infinite; }
    .ear-r    { transform-origin: 178px 56px; animation: earWiggle 0.6s ease-in-out infinite 0.3s; }
    .note1    { animation: noteBob1 0.6s ease-in-out infinite; }
    .note2    { animation: noteBob2 0.6s ease-in-out infinite 0.2s; }
    .note3    { animation: noteBob3 0.6s ease-in-out infinite 0.4s; }
  </style>

  <rect width="300" height="160" rx="20" fill="#FFF5E6"/>

  <g class="body-bop">
    <g class="ear-l">
      <circle cx="122" cy="56" r="14" fill="#F4C48E"/>
      <circle cx="122" cy="56" r="9"  fill="#FFCFBF"/>
    </g>
    <g class="ear-r">
      <circle cx="178" cy="56" r="14" fill="#F4C48E"/>
      <circle cx="178" cy="56" r="9"  fill="#FFCFBF"/>
    </g>

    <!-- arms: small circle stuck to body side, moves up/down only -->
    <g class="arm-l">
      <circle cx="114" cy="114" r="9" fill="#E8A870"/>
    </g>
    <g class="arm-r">
      <circle cx="186" cy="114" r="9" fill="#E8A870"/>
    </g>

    <!-- body -->
    <ellipse cx="150" cy="114" rx="34" ry="26" fill="#F4C48E"/>
    <ellipse cx="150" cy="119" rx="21" ry="17" fill="#FDE8C8"/>

    <!-- legs: small circles at bottom of body, move up/down -->
    <g class="leg-l">
      <circle cx="137" cy="138" r="9" fill="#D4956A"/>
    </g>
    <g class="leg-r">
      <circle cx="163" cy="138" r="9" fill="#D4956A"/>
    </g>

    <!-- head -->
    <circle cx="150" cy="80" r="32" fill="#F4C48E"/>
    <circle cx="128" cy="88" r="15" fill="#FDE8C8"/>
    <circle cx="172" cy="88" r="15" fill="#FDE8C8"/>

    <!-- eyes -->
    <circle cx="138" cy="73" r="5"   fill="#2C1A0E"/>
    <circle cx="139" cy="72" r="1.8" fill="white"/>
    <circle cx="162" cy="73" r="5"   fill="#2C1A0E"/>
    <circle cx="163" cy="72" r="1.8" fill="white"/>

    <!-- nose + mouth -->
    <ellipse cx="150" cy="83" rx="4.5" ry="3" fill="#E8829A"/>
    <path d="M143 88 Q150 95 157 88" stroke="#D06880" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </g>

  <g class="note1">
    <text x="58"  y="52" font-size="20" fill="#FF8FA3" font-family="serif">♪</text>
  </g>
  <g class="note2">
    <text x="214" y="44" font-size="26" fill="#A78BFA" font-family="serif">♫</text>
  </g>
  <g class="note3">
    <text x="38"  y="90" font-size="15" fill="#FBB040" font-family="serif">♩</text>
  </g>
</svg>`;
