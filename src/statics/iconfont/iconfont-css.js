import { createGlobalStyle } from 'styled-components';

export const GlobalIconStyles = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1613899548934'); /* IE9 */
  src: url('./iconfont.eot?t=1613899548934#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAh8AAsAAAAADogAAAgwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqPUIxRATYCJAMcCxAABCAFhG0HZhsvDKOilI92yP6ZYNOpK3gRHTqM8equjW0uArEspkso/pMnx3+y4uG//Wj3zcz/viKOJc529HTRkDbRqZuQtI0QKZVUyOKJ/A+n7Z4ZtjArCtUtX7GWmpauS/6atOmG7d6jHMoshQThEJoJ3LQEqgFKJTRQM9qtJhKpibE52Rypy8SF3ZB/n6ik+RXS/N/7078H0B4ub62/dm0aa1iBdKKAA7q3vbHwZ1lcVFTMocRZmFdnTwoK8nW5nUBvl2Xw8ODsEpiCcYFxr0lGwAJ5JcMc2lSdcGpZj1fK2vQhXcOV9fHxy+1gJFXGDn10sZ/C1leVxy31cuqVaRSJm6viCiPjFlCuybeJmUvg422d1IOVPANmtZIaX/hojbsUBx+z378JLmbrwyzfiSRktaqrX16N+BHyV1y9kIQMkviKBAm+ugfJfE3BiwoHEaTimxp5uPjGOGUW+yC9AcjPgCXPra5KUuRr6PTb4/ywsrvJ2MrgdINxvps5Jg/r0xkMRz09OtNbid2Gi3R3KkC5HJdKUZkMIxU+QhY2T3JTFifaFQoijMY2QC6vWiomWX6+/iJRXqKAr4sHYEKgt1gkgKVSV0Ffv5BGIrNXl94mxKIOiC9CMgp2pQn7IKjkEdJ7+PRBZLssSqYgTtY3h/Cr02TYZZnTPmt4h9xbjkNS9JLUkUYK4dR6wemiQRoTwukoVEFL8z2jETTETs07SiMBAAKhUxD/BsgjCB7E98X2zQG98zTyLAhWYPihWCnyFR8DztkOyVgoIVT4jDqY2b0uQC3V2YAjbysCRHdK+TP6f7/n7nsj6WNDe4NPvL1mYYmsp4+R4vM2svWEYnkaKtDFCUzYi6NJi7eX5vLlrGGEWEwKAanMT0YSCh4u56MCvoiHKNZjsmWoRFrMh0QiZFBfjIjFQiEsgPvYgib+EpyoAO2FUUxILvJ0cRFvZoZh872S5vGONeYTn2jAhPO9czAuWuAtIoSvWsLiDKmZLZj6XQFDFApc1xWWohaYsA+GBTP1HTmIiBEFcZDLFU+XYtPD7DFARAODsyzWYQWBfNpBULy4Itn9rPzs1BUdFrppQ7D+uQN68g05pEA8O90PtwqmZgYQXOx29k1NwbehgzdLyHkW0BMOyp/ts+7DfNepOfaQLI5FS4TxdeVy89GzPj5iBMMQSDSgC/YSCAEDi5wHAIFQyOKQ6eFDViJd0cKAfsrVvN8YAvhCUtQwZ5jjRt106vRmyibK6dP6IzefPrWJ6pZtyOfiN16BjkwnEHBzmqd2zsx2UrooF5ZyMc/MdCF4Y/QeFzP1kOV9XmZq8EVTF1Vncvyf8fXaVGXW6OavHDgqP0RlS23gIVUlk6Jtf/KYkZwRwPnO3TJoNJKkprPT+WDkZlqpcXRdbYzxVg+9/IQ1Op7PryWGKGVbnDaPDmsmqw3DSitDTRIsCAAawM+XpSa+1ynXGogOOhdsFAmoBwQZcRNixksb+7OAU8URt6xDbxVp/I5D5OX+CRglOL/MX6H03b+h8bynA6gcZF9jg5cxsmgxgd4PsonGqxzWdz3Lt5ZGwMtxrXTruJfKnJVeVdmFhlv9Gpu7zPdGrNm5xT52Z5ptWm7IrmMM8LNyG7DRQXh6NTjrcepFGzjkGhyXDrRb52TnB5VRLe/e106mXsuHl28xcvoLuLI7iLpm397VVI6cJlHWUFbv27eaAgSXM8aKegNydf5LwvDk/7Rz/dWw/CxAgDPzAdGXtPSUkP0HCgtlm5bKwSPWo7TvudqmNIbxXEpLXVcAUaoLmgPqQJB986u8zF9kysz7ZcrL+BWFMRc0Q6tKDJ68pNKgpCqE57J2gUKtr0SwFTU97vfl/lZd2fXJftthi8NCUV0dxjzKxAi8o+PXEn7J37FxGHNRMywubjGyKDybnR0dAYQDRoaNyGo4EOGAgGdl75kSbUMzySdzuI6B9h3vhPd2k5nkc9yJeRPK/qqJtAVOSosNbewxI/nfcI3mrR2mvl45mO55FkcSbdVMUd/VB0zOtWbY1scUzf6hyPEoNvCSTUlyrsa/YuY/ulNTJ0+Mcp6N+izcbxrF48b6rRqFJFoaVIaWxGD6iPJ6n02xfaS4kptjzl/bntwc8Z9ORMi2smQkPe5HBo++9QRf0J2WYbN1rH2quqzi5Z37VR0X/xixiCWPzMWJtdTtGU70Wg3KrXGqGld5MK/Y5jzjSL95EjeCk7KfYWqgxKDcOk9fFeHpW7UWP1N7f7mzVrM1DI7fgUq83PHQPuu+vUwXDTW6fTnm3KCOwJzzh6/aV1EYGi6BvABMlM+k10zv+VPmgOk/n8pJ7Jcl9rR95+ms3TcuG3OnarKbex99g5sV3/+M9n/Z9CW1VcpPVIwHJUFQmFA7FpQZAOXqRjG2+a5NCp+qDtf4B/ROPQm9l56oddFvc8mVwoTylFzxXEljx5W1jsVFfstVGZy7aq07rt5Nh2cPltQmRelww1hzhXlvrmTWZzYnyT/YAvmPq7Lqj6mhj0lX70XoXHJwGjQfUmPUYsrje06JKYQotfP2+HOUnY5qos77XWPdkCm473i//kMssG7iiKaXQdsKLmqT8wPtENTa8LI2GSatM0JfOXRdcT/SSUwO8x6ooUhr+Ka42H0iSRgFsXFrPvL+55DU0SJ1xrLvxGuo1qCtcz6HV0B8yBeFlh3K1EZPCrRUFbjsqhm5kzw4VZHmPQZXJu+UQYmWY1ShqzTk0mqiKO90n8z3c9JOXIFdvokUOUpUUUcTreEiKmQaZWR8kz/VlFRMBEULiVg0910emZjms5Kz4RwA') format('woff2'),
  url('./iconfont.woff?t=1613899548934') format('woff'),
  url('./iconfont.ttf?t=1613899548934') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1613899548934#iconfont') format('svg'); /* iOS 4.1- */
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

