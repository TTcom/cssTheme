import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetWind,
    presetUno,
  } from 'unocss'
  import unocssThemes from "unocss-themes"
  import presetTheme from 'unocss-preset-theme'
  export default defineConfig({
    theme: {
      // spacing: {
      //   custom: 'var(--page-pa)',
      //   '2': '12px',
      //   '3': '16px',
      //   '4': '24px',
      //   '5': '32px',
      //   '6': '48px',
      // },  
      // fontSize: {
      //   custom: '30px',
      //   '2': '12px',
      //   '3': '16px',
      //   '4': '24px',
      //   '5': '32px',
      //   '6': '48px',
      // },  
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
      presetTheme({
        theme: {
          tank: {
            colors: {
              'primary': '#1668dc',
              'custom': 'green',
              'primary-border': '#1668dc',
            },
          },
          picker: {
            colors: {
              'primary': '#1668dc',
              'custom': 'rgba(254,202,202,1)',
              'primary-border': '#1668dc',
            },
            spacing: {
              custom: '22px',
              xs: '4px'
            },
          },
        },
      }),
    ],
    variants: [
      unocssThemes({
        themes: {
          wey: ".wey",
          purple: ".purple",
          red: ".red",
          indigo: ".indigo",
          orange: ".orange",
          green: ".green",
          blue: ".blue",
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