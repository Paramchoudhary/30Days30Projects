//creating a const input which takes all inputs with querySelectorsALL

const inputs = document.querySelectorAll('.controls input');
//this fuction changing the styleswith the help of name, value
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
// changing the value in realtime
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
// changing the value in realtime with mousemove
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));