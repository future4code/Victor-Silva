const checkDataAutenticity = (data1: any, data2: any, dataName: string) => {
      if (data1 !== data2) throw `${dataName} não confere`;
};

export default checkDataAutenticity;
