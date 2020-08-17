const validadeParamLenght = (
      param: string,
      paramName: string,
      targetLenght: number
) => {
      if (!(param.length >= targetLenght))
            throw `Parâmetro ${paramName} deve ter mais de ${targetLenght} caracteres`;
};

export default validadeParamLenght;
