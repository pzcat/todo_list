import { createGlobalStyle } from 'styled-components';

export const GlobalIconStyles = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1610803647615'); /* IE9 */
  src: url('./iconfont.eot?t=1610803647615#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1610803647615') format('woff'),
  url('./iconfont.ttf?t=1610803647615') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1610803647615#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.iconAa:before {
  content: "\e636";
}

.iconPensyumaobi:before {
  content: "\e708";
}

.iconfangdajing:before {
  content: "\e6b7";
}

.iconyumaobi:before {
  content: "\e653";
}
`;
