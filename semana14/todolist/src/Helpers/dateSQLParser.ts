const dateSQLParser = (date: string) => {
      if (!date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
            throw 'Formato de data inválido. Use DD/MM/YYYY';
      } else {
            return date.split('/').reverse().join('/');
      }
};

export default dateSQLParser;
