export const sleepingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="300" height="160">
  <style>
    @keyframes breathe {
      0%, 100% { transform: scaleX(1) scaleY(1); }
      50%       { transform: scaleX(1.04) scaleY(1.02); }
    }
    @keyframes floatZ1 {
      0%   { opacity: 0; transform: translate(0px,   0px) scale(0.6); }
      20%  { opacity: 1; }
      80%  { opacity: 1; }
      100% { opacity: 0; transform: translate(14px, -34px) scale(1); }
    }
    @keyframes floatZ2 {
      0%   { opacity: 0; transform: translate(0px,   0px) scale(0.6); }
      20%  { opacity: 1; }
      80%  { opacity: 1; }
      100% { opacity: 0; transform: translate(20px, -48px) scale(1.2); }
    }
    @keyframes floatZ3 {
      0%   { opacity: 0; transform: translate(0px,   0px) scale(0.6); }
      20%  { opacity: 1; }
      80%  { opacity: 1; }
      100% { opacity: 0; transform: translate(26px, -62px) scale(1.4); }
    }
    @keyframes starPulse {
      0%, 100% { opacity: 0.4; }
      50%       { opacity: 1; }
    }
    @keyframes drool {
      0%, 100% { ry: 4; opacity: 0.7; }
      50%       { ry: 7; opacity: 0.9; }
    }
    .blob {
      transform-origin: 150px 115px;
      animation: breathe 2.6s ease-in-out infinite;
    }
    .z1 { animation: floatZ1 3.2s ease-out infinite 0s; }
    .z2 { animation: floatZ2 3.2s ease-out infinite 1.07s; }
    .z3 { animation: floatZ3 3.2s ease-out infinite 2.14s; }
    .s1 { animation: starPulse 2s ease-in-out infinite 0.2s; }
    .s2 { animation: starPulse 2.5s ease-in-out infinite 0.8s; }
    .s3 { animation: starPulse 1.7s ease-in-out infinite 1.4s; }
  </style>

  <!-- Night BG -->
  <rect width="300" height="160" rx="20" fill="#1C2038"/>

  <!-- Moon (crescent) -->
  <circle cx="258" cy="32" r="22" fill="#FFE87C"/>
  <circle cx="267" cy="26" r="17" fill="#1C2038"/>

  <!-- Stars -->
  <circle class="s1" cx="228" cy="22" r="2.5" fill="#FFE87C"/>
  <circle class="s2" cx="246" cy="54" r="2"   fill="#FFE87C"/>
  <circle class="s3" cx="210" cy="46" r="1.8" fill="#FFE87C"/>
  <circle cx="40"  cy="24" r="1.5" fill="#FFE87C" opacity="0.5"/>
  <circle cx="60"  cy="14" r="1"   fill="#FFE87C" opacity="0.4"/>
  <circle cx="28"  cy="44" r="1.2" fill="#FFE87C" opacity="0.4"/>
  <circle cx="190" cy="18" r="1.3" fill="#FFE87C" opacity="0.45"/>
  <circle cx="80"  cy="32" r="1"   fill="#FFE87C" opacity="0.35"/>

  <!-- Hamster: flat blob sleeping face-forward, sitting/slumped -->
  <g class="blob">
    <!-- Body: big round blob slumped down -->
    <ellipse cx="150" cy="125" rx="55" ry="32" fill="#F4C48E"/>
    <!-- Belly -->
    <ellipse cx="150" cy="130" rx="36" ry="21" fill="#FDE8C8"/>

    <!-- Tail peeking out on side -->
    <path d="M200 128 Q218 120 214 136 Q210 148 198 144" stroke="#F4C48E" stroke-width="8" fill="none" stroke-linecap="round"/>

    <!-- Head: big round, sitting on top of body, centered -->
    <circle cx="150" cy="90" r="36" fill="#F4C48E"/>

    <!-- Cheeks: very puffy, wide -->
    <circle cx="116" cy="98" r="20" fill="#FDE8C8"/>
    <circle cx="184" cy="98" r="20" fill="#FDE8C8"/>

    <!-- Ears: droopy/flat to sides -->
    <ellipse cx="118" cy="62" rx="14" ry="12" fill="#F4C48E"/>
    <ellipse cx="118" cy="62" rx="9"  ry="7"  fill="#FFCFBF"/>
    <ellipse cx="182" cy="62" rx="14" ry="12" fill="#F4C48E"/>
    <ellipse cx="182" cy="62" rx="9"  ry="7"  fill="#FFCFBF"/>

    <!-- Sleeping eyes: both closed, simple curved lines -->
    <!-- left eye: normal closed -->
    <path d="M134 87 Q140 93 146 87" stroke="#2C1A0E" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- right eye: one slightly uneven / droopy for dumb look -->
    <path d="M154 88 Q160 93 166 89" stroke="#2C1A0E" stroke-width="3" fill="none" stroke-linecap="round"/>

<!-- Nose: small, centered -->
    <ellipse cx="150" cy="100" rx="4" ry="3" fill="#E8829A"/>

    <!-- Mouth: slightly open, one side up one side down (goofy) -->
    <path d="M143 106 Q147 110 150 108 Q153 106 158 109" stroke="#C06878" stroke-width="2.5" fill="none" stroke-linecap="round"/>

    <!-- Drool drop (static shape, breathe animation carries it) -->
    <ellipse cx="145" cy="115" rx="3.5" ry="5" fill="#A8D8F0" opacity="0.8"/>
    <ellipse cx="145" cy="120" rx="2.5" ry="3" fill="#A8D8F0" opacity="0.6"/>

    <!-- Paws: two small lumps at bottom -->
    <ellipse cx="126" cy="148" rx="16" ry="8" fill="#E8A870"/>
    <ellipse cx="174" cy="148" rx="16" ry="8" fill="#E8A870"/>
  </g>

  <!-- Floating Z's (anchored near head) -->
  <text class="z1" x="192" y="76" font-family="Georgia, serif" font-size="17" font-weight="bold" fill="#7BA7D4">z</text>
  <text class="z2" x="202" y="61" font-family="Georgia, serif" font-size="22" font-weight="bold" fill="#5B87C4">Z</text>
  <text class="z3" x="215" y="44" font-family="Georgia, serif" font-size="27" font-weight="bold" fill="#3B67A4">Z</text>
</svg>`;
