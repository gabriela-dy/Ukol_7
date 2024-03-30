/*Newsletter, kontrola
Pokračujte v příkladu Newsletter z lekce. V tomto cvičení zařidíme, aby uživatel při zadávání e-mailu dostal zpětnou vazbu, pokud zadává neplatný vstup.

V CSS si vytvořte třídu, která dělá výrazný červený rámeček kolem textového políčka.
Přidejte na textové políčko posluchač události input.
Během toho, jak uživatel píše, kontrolujte, jestli náhodou políčko není prázdné. V takovém případě na políčko přidejte třídu s červeným rámečkem. Pokud je vstup v pořádku, rámeček odeberte.
Zobrazte červený rámeček i v případě, že zadaný e-mail neobsahuje zavináč. K tomu můžete použít metodu indexOf nebo includes.*/


/*button.addEventListener('click', () => {
  document.body.innerHTML = '<p>Děkujeme za Váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${setEmail.value} </p>';
  const setEmail= document.querySelector("#buttonOdesilat")
});*/

const formEmail = document.querySelector('#buttonSend');
formEmail.addEventListener('submit', (event) => {
  event.preventDefault() 
  const setEmailInput = document.querySelector('#email');
  const setEmail = setEmailInput.value;
  alert(`Děkujeme za Váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${setEmail}, jste přihlášeni`);
});

document.getElementById('email').addEventListener('input', function() {
  var inputValue = this.value;
  var isValidEmail = true;

  if (inputValue.trim() === '') {
      this.classList.add('chyba');
      return;
  } else {
      this.classList.remove('chyba');
  }

  if (this.type === 'email' && inputValue.indexOf('@') === -1) {
      isValidEmail = false;
  }

  if (!isValidEmail) {
      this.classList.add('chyba');
  } else {
      this.classList.remove('chyba');
  }
});