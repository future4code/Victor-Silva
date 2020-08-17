const checkForMissingParams = (...args: any) => {
      for (const item of args) {
            if (!item) {
                  throw `Um parâmetro está ausente.`;
            }
      }
};

export default checkForMissingParams;
