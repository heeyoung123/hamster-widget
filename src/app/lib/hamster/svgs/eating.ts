export const eatingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160" width="300" height="160">
  <style>
    @keyframes chew {
      0%, 100% { transform: translateY(0px); }
      45% { transform: translateY(3px); }
    }
    @keyframes puff {
      0%, 100% { transform: scale(1); }
      45% { transform: scale(1.1); }
    }
    @keyframes bob {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-3px); }
    }
    @keyframes blink {
      0%, 88%, 100% { transform: scaleY(1); }
      93% { transform: scaleY(0.08); }
    }
    @keyframes armL {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes armR {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .mouth   { transform-origin: 150px 88px; animation: chew 0.45s ease-in-out infinite; }
    .cheek-l { transform-origin: 112px 86px; animation: puff 0.45s ease-in-out infinite; }
    .cheek-r { transform-origin: 188px 86px; animation: puff 0.45s ease-in-out infinite; }
    .everything { animation: bob 0.45s ease-in-out infinite; }
    .eye-l   { transform-origin: 134px 68px; animation: blink 2.8s ease-in-out infinite; }
    .eye-r   { transform-origin: 166px 68px; animation: blink 2.8s ease-in-out infinite; }
    .arm-l   { animation: armL 0.45s ease-in-out infinite; }
    .arm-r   { animation: armR 0.45s ease-in-out infinite; }
  </style>

  <rect width="300" height="160" rx="20" fill="#FFF5E6"/>

  <g class="everything">

    <ellipse cx="150" cy="122" rx="44" ry="29" fill="#F4C48E"/>
    <ellipse cx="150" cy="127" rx="28" ry="19" fill="#FDE8C8"/>

    <g class="arm-l">
      <circle cx="106" cy="116" r="9" fill="#E8A870"/>
    </g>
    <g class="arm-r">
      <circle cx="194" cy="116" r="9" fill="#E8A870"/>
    </g>

    <circle cx="133" cy="149" r="9" fill="#D4956A"/>
    <circle cx="167" cy="149" r="9" fill="#D4956A"/>

    <circle cx="150" cy="74" r="36" fill="#F4C48E"/>

    <g class="cheek-l">
      <circle cx="112" cy="84" r="20" fill="#FDE8C8"/>
    </g>
    <g class="cheek-r">
      <circle cx="188" cy="84" r="20" fill="#FDE8C8"/>
    </g>

    <circle cx="120" cy="46" r="14" fill="#F4C48E"/>
    <circle cx="120" cy="46" r="9"  fill="#FFCFBF"/>
    <circle cx="180" cy="46" r="14" fill="#F4C48E"/>
    <circle cx="180" cy="46" r="9"  fill="#FFCFBF"/>

    <g class="eye-l">
      <circle cx="134" cy="68" r="6"  fill="#2C1A0E"/>
      <circle cx="135" cy="67" r="2"  fill="white"/>
    </g>
    <g class="eye-r">
      <circle cx="166" cy="68" r="6"  fill="#2C1A0E"/>
      <circle cx="167" cy="67" r="2"  fill="white"/>
    </g>

    <ellipse cx="150" cy="79" rx="4" ry="3" fill="#E8829A"/>

    <g class="mouth">
      <path d="M143 84 Q150 90 157 84" stroke="#D06880" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </g>

    <ellipse cx="150" cy="143" rx="14" ry="11" fill="#D4A844"/>
    <ellipse cx="146" cy="139" rx="4"  ry="3"  fill="white" opacity="0.22"/>
    <rect    x="138" y="131"  width="24" height="7" rx="3.5" fill="#A07830"/>
    <ellipse cx="150" cy="131" rx="13" ry="4" fill="#B89040"/>

  </g>
</svg>`;
