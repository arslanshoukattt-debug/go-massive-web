(() => {
  const slider = document.querySelector('#acos');
  const money = n => (n < 0 ? '−' : n > 0 ? '+' : '') + '$' + Math.abs(n).toFixed(2);
  function update() {
    const acos = Number(slider.value), spend = 40 * acos / 100;
    const a = 16 - spend, b = 8 - spend, x = 44 + acos / 60 * 370;
    document.querySelector('#acos-value b').textContent = acos;
    slider.setAttribute('aria-valuetext', acos + ' percent ACoS');
    for (const [key,value] of [['a',a],['b',b]]) {
      document.querySelector('#value-'+key).textContent = money(value);
      document.querySelector('#point-'+key).setAttribute('cx',x);
      document.querySelector('#point-'+key).setAttribute('cy',110-value/8*43);
    }
    document.querySelector('#cursor-line').setAttribute('x1',x);
    document.querySelector('#cursor-line').setAttribute('x2',x);
    document.querySelector('#chart-description').textContent = `At ${acos}% ACoS, each product spends $${spend.toFixed(2)} on advertising. Product A contribution is ${money(a)}, Product B is ${money(b)}. Fixed overhead excluded. Product A breaks even at 40%, Product B at 20%.`;
  }
  slider.addEventListener('input',update);
  document.querySelector('#reset-example').addEventListener('click',()=>{slider.value=25;update();});
  update();
})();
