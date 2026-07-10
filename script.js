  const root = document.documentElement;
  const headline = document.getElementById('headline');
  const blob1 = document.getElementById('blob1');
  const blob2 = document.getElementById('blob2');
  const blob3 = document.getElementById('blob3');

  const defaults = { a:'#6d5dfc', b:'#ff5da2', c:'#00d4ff' };
  let resetTimer = null;

  function hexToRgba(hex, alpha){
    const h = hex.replace('#','');
    const bigint = parseInt(h.length===3 ? h.split('').map(x=>x+x).join('') : h, 16);
    const r = (bigint>>16)&255, g=(bigint>>8)&255, b=bigint&255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  function applyTheme(a,b,c){
    blob1.style.background = a;
    blob2.style.background = b;
    blob3.style.background = c;
    headline.style.setProperty('--live-a', a);
    headline.style.setProperty('--live-b', b);
  }

  function resetTheme(){
    applyTheme(defaults.a, defaults.b, defaults.c);
  }

  document.querySelectorAll('.card').forEach(card => {
    const a = card.dataset.a, b = card.dataset.b, c = card.dataset.c;
    const glow = hexToRgba(a, 0.55);
    const shadow = hexToRgba(a, 0.35);
    card.style.setProperty('--glow', glow);
    card.style.setProperty('--glow-shadow', shadow);
    card.style.setProperty('--icon-bg', card.dataset.icon);

    const activate = () => {
      clearTimeout(resetTimer);
      applyTheme(a,b,c);
    };
    const deactivate = () => {
      resetTimer = setTimeout(resetTheme, 250);
    };

    card.addEventListener('mouseenter', activate);
    card.addEventListener('mouseleave', deactivate);
    card.addEventListener('touchstart', activate, {passive:true});
    card.addEventListener('touchend', deactivate);
    card.addEventListener('focus', activate);
    card.addEventListener('blur', deactivate);

    // 3D tilt on mouse move
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateY = ((x - cx) / cx) * 10;
      const rotateX = -((y - cy) / cy) * 10;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });
  });