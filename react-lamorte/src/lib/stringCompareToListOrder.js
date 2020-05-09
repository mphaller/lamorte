const stringCompareToListOrder = (list, a, b) => {
  if (!(typeof a === "string") || !(typeof b === "string")) return 0;
  const ai = list.indexOf(a);
  const bi = list.indexOf(b);
  if (ai === -1 && bi > -1) return -1;
  else if (bi === -1 && ai > -1) return 1;
  else return bi - ai;
};

export { stringCompareToListOrder as default };
