import { helper } from '@ember/component/helper';

export function formatCurrency(params) {
  const amount = (parseFloat(Math.round(params[0] * 100) / 100).toFixed(2)).toString();
  let amtString = '',
      counter = -3;

  // loop reverses and formats string at the same time
  for(let i = amount.length - 1; i >= 0; i--) {
    // insert comma before every third character
    if(counter === 3) {
      amtString = `,${amtString}`;
      // set to 0 to restart counting characters
      counter = 0;
    }
    // build string from the end forward
    amtString = amount[i] + amtString;
    counter++;
  }

  // add dollar sign on returning value
  return `$${amtString}`;
}

export default helper(formatCurrency);
