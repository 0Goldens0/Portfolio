let validation = new JustValidate('#form',{
  errorLabelStyle: {
    color: '#FF5C00'
  }
})

let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)-999-99-99")
im.mask(selector)

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели имя'
  },

  {
    rule: 'minLength',
    value: 2,
    errorMessage : 'Необходимо ввести 2 символа или более'
  }

])

.addField("#phone", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.lenght > 0)
    },
    errorMessage : 'Вы не ввели телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.lenght === 10)
    },
    errorMessage : 'Телефон должен состоять из 10 символов'
  }

])

.addField('#email', [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели e-mail'
  },

  {
    rule: 'email',
    errorMessage : 'Некорректный адрес электонной почты'
  }

])
