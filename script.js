
document.getElementById('calculate-btn').addEventListener('click', () => {
    const input = document.getElementById('factorial-input').value;
    let result = 1;
    for (let i = 1; i <= input; i++) {
      result *= i;
    }
    document.getElementById('result-screen').innerText = `${input}! = ${result}`;
  });
  
  document.getElementById('dark-btn').addEventListener('click', () => {
    document.body.classList.add('bg-dark', 'text-white');
  });
  
  document.getElementById('light-btn').addEventListener('click', () => {
    document.body.classList.remove('bg-dark', 'text-white');
  });