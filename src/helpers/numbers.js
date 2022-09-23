export const parseFloatNumber = (num, dec) => {
    const resul = parseFloat(num).toFixed(dec)
    return resul === 'NaN' ? "-" : resul
};
