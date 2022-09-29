// export default function nFormatter(num:number) {
//   if (num >= 1000000000) {
//      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
//   }
//   if (num >= 1000000) {
//      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
//   }
//   if (num >= 1000) {
//      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
//   }
//   return num;
// }

const numberFormat = (num: number): string => {
   if (num >= 1000000000) {
      let temp = (num / 100000000).toFixed(1);
      return temp + "B";
   } else if (num >= 1000000) {
      let temp = (num / 1000000).toFixed(1);
      return temp + "M";
   } else if (num >= 100000) {
      let temp = (num / 1000).toFixed(1);
      return temp + "K";
   } else {
      return String(num.toLocaleString());
   }
}

export default numberFormat;