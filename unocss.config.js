import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetWind,
    presetUno,
  } from 'unocss'
  import unocssThemes from "unocss-themes"
  export default defineConfig({
    theme: {
      spacing: {
        custom: 'var(--page-pa)',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },  
      fontSize: {
        custom: '30px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },  
   },
  
    shortcuts: [
      ['icon-btn', 'text-[16px] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-50 '],
    ],
    presets: [
      presetWind(),
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
    ],
    variants: [
      unocssThemes({
        themes: {
          wey: ".wey",
          purple: ".purple",
        },
      }),
      // add your custom variants here
    ],
    rules: [
        [/^abg-(\S+)$/, ([, d]) => ({ 'background-color': `#${d}` })],
        [/^ac-(\S+)$/, ([, d]) => ({ 'color': `#${d}` })],
        [/^hb-(\S+)$/, ([, d]) => ({ 'height': `${d}%` })],
        [/^rs-(\S+)$/, ([, d]) => ({ 'border-radius': `${d}%` })],
        [/^border-c-(\S+)$/, ([, d]) => ({ 'border-color': `#${d}` })]
      ]
  })