  let forms = document.querySelectorAll('.form');

  for(let form of forms) {
   form.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    form.firstChild.onclick = () => form.remove();
  }


  let form = document.forms.form;

    form.count.oninput = calculate;
    form.switch.onchange = calculate;
    form.switch2.onchange = calculate;

    function calculate() {
      let initial = +form.count.value;
      if (!initial) return;

      let interest = form.switch.value * 100;

      if (!interest) return;

      let years = form.switch2.value * 200;
      if (!years) return;

      let result = Math.round(initial * (1 + interest) ** years);

      let height = result / form.count.value * 100 + 'px';
      document.getElementById('height-after').style.height = height;
      document.getElementById('total').innerHTML = form.count.value;
      document.getElementById('total').innerHTML = result;
    }

    calculate();