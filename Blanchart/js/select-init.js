  const element = document.querySelectorAll('.select-custom');
  element.forEach(element => {
      const choices = new Choices(element, {
          searchEnabled: false,
          searchChoices: false,
          placeholder: false,
          itemSelectText: '',
      });
  })
 
  
