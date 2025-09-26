// Simple interactivity: mobile menu and year injection
document.addEventListener('DOMContentLoaded', function(){
  // Year
  var y = new Date().getFullYear();
  var ye = document.getElementById('year');
  if(ye) ye.textContent = y;

  // Burger
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if(burger && nav){
    burger.addEventListener('click', function(){
      if(nav.style.display === 'flex'){
        nav.style.display = '';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '12px';
        nav.style.background = 'rgba(2,6,23,0.9)';
        nav.style.padding = '12px';
        nav.style.position = 'absolute';
        nav.style.right = '20px';
        nav.style.top = '64px';
        nav.style.borderRadius = '10px';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        var el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});


// Copy contract address button
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('copyAddress');
  var addr = document.getElementById('contractAddress');
  if(btn && addr){
    btn.addEventListener('click', function(){
      var text = addr.textContent.trim();
      navigator.clipboard.writeText(text).then(function(){
        btn.textContent = 'Скопировано!';
        setTimeout(function(){ btn.textContent = 'Скопировать'; }, 2000);
      });
    });
  }
});
