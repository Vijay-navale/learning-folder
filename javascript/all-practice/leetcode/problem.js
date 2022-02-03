let finalInt = 0;
const romanNumeralsArr = s.split("");
for (let i = 0; i < romanNumeralsArr.length; i++) {
  if ("I" === romanNumeralsArr[i]) {
    if ("V" === romanNumeralsArr[i + 1]) {
      finalInt += 4;
      continue;
    } else if ("X" === romanNumeralsArr[i + 1]) {
      finalInt += 9;
      continue;
    }
    finalInt += 1;
    continue;
  }
  if ("X" === romanNumeralsArr[i]) {
    if ("L" === romanNumeralsArr[i + 1]) {
      finalInt += 40;
      continue;
    } else if ("C" === romanNumeralsArr[i + 1]) {
      finalInt += 90;
      continue;
    }
    finalInt += 10;
    continue;
  }
  if ("C" === romanNumeralsArr[i]) {
    if ("D" === romanNumeralsArr[i + 1]) {
      finalInt += 400;
      continue;
    } else if ("M" === romanNumeralsArr[i + 1]) {
      finalInt += 500;
      continue;
    }
    finalInt += 100;
    continue;
  }
  if ("V" === romanNumeralsArr[i]) {
    finalInt += 5;
    continue;
  }
  if ("L" === romanNumeralsArr[i]) {
    finalInt += 50;
    continue;
  }
  if ("D" === romanNumeralsArr[i]) {
    finalInt += 500;
    continue;
  }
  if ("M" === romanNumeralsArr[i]) {
    finalInt += 1000;
    continue;
  }
}
return finalInt;
