const cards = [
  {
    name: "Standard",
    shadow:
      "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
    vanillaCSS: `box-shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08);`,
  },
  {
    name: "Aesthetic",
    shadow: "shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
    vanillaCSS: `box-shadow: 0 3px 10px rgb(0,0,0,0.2);`,
  },
  {
    name: "Demure",
    shadow: "shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]",
    vanillaCSS: `box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;`,
  },
  {
    name: "Jubilation",
    shadow: "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
    vanillaCSS: `box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;`,
  },

  {
    name: "Sprightly",
    shadow: "shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]",
    vanillaCSS: `box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;`,
  },
  {
    name: "Vigorous",
    shadow: "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",
    vanillaCSS: `box-shadow: 0 20px 50px rgba(8, 112, 184, 0.7);`,
  },
  {
    name: "Euphonious",
    shadow:
      "shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]",
    vanillaCSS: `box-shadow: 0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1);`,
  },
  {
    name: "Crescendo",
    shadow:
      "shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]",
    vanillaCSS: `box-shadow: -10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15);`,
  },
  {
    name: "Mondegreen",
    shadow:
      "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]",
    vanillaCSS: `box-shadow: 5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05);`,
    customCSS: "border",
  },
  {
    name: "Nimble",
    shadow: "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]",
    vanillaCSS: `box-shadow: 4.0px 8.0px 8.0px rgba(0,0,0,0.38);`,
  },
  {
    name: "Next.js",
    shadow: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
    vanillaCSS: `box-shadow: 0 8px 30px rgb(0,0,0,0.12);`,
  },
  {
    name: "Champagne",
    shadow: "shadow-[inset_-12px_-8px_40px_#46464620]",
    vanillaCSS: `box-shadow: inset -12px -8px 40px #46464620;`,
  },
  {
    name: "India",
    shadow: "shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]",
    vanillaCSS: `box-shadow: 0 20px 50px rgba(240, 46, 170, 0.7);`,
  },
  {
    name: "Warm",
    shadow:
      "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]",
    vanillaCSS: `box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;`,
  },
  {
    name: "Intense",
    shadow: "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]",
    vanillaCSS: `box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;`,
  },
  {
    name: "Subtle",
    shadow: "shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]",
    vanillaCSS: `box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;`,
  },
  {
    name: "TailwindCSS",
    shadow: "shadow-2xl shadow-blue-500/20",
    vanillaCSS: `box-shadow: 0 25px 50px -12px #3b82f620;`,
  },
  {
    name: "Ragnarok",
    shadow:
      "shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]",
    vanillaCSS: `box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)`,
  },
  {
    name: "Sleek",
    shadow: "shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]",
    vanillaCSS: `box-shadow: rgba(13, 38, 76, 0.19) 0px 9px 20px;`,
  },
  {
    name: "Gondor",
    shadow: "shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]",
    vanillaCSS: `box-shadow: rgba(7, 65, 210, 0.1) 0px 9px 30px`,
  },
  {
    name: "Studydesk",
    shadow:
      "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]",
    vanillaCSS: `box-shadow: 0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1);`,
  },
  {
    name: "PurpleStamp",
    shadow: "shadow-[5px_5px_0px_0px_rgba(109,40,217)]",
    vanillaCSS: `box-shadow: 5px 5px 0px 0px rgba(109,40,217);`,
    customCSS: "text-purple-700 rotate-1 border-2 border-purple-700 rounded-md",
  },
  {
    name: "Stiglitz",
    shadow: `shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]`,
    vanillaCSS: `box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;`,
  },
  {
    name: "Brutal",
    vanillaCSS: `box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;`,
    shadow:
      "shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]",
  },
  {
    name: "Intense",
    vanillaCSS: `box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;`,
    shadow: "shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]",
  },
];

export default cards;
