const products={
 'after-hours':{title:'After Hours Oversized Tee',price:'₹1,199',image:'assets/product-after-hours.png',desc:'Quiet streetwear built around late-night movement. Oversized fit, considered graphics, everyday wearability.'},
 'night-shift':{title:'Night Shift Tee',price:'₹1,199',image:'assets/product-late-night.png',desc:'A minimal everyday tee inspired by the hours when the city goes quiet.'},
 'hoodie':{title:'TZCP Heavy Hoodie',price:'₹2,499',image:'assets/product-hoodie.png',desc:'A heavyweight everyday layer with restrained TZCP branding.'},
 'crewneck':{title:'TZCP Crewneck',price:'₹1,899',image:'assets/product-crewneck.png',desc:'Clean silhouette, premium feel, understated identity.'}
};
let cart=JSON.parse(localStorage.getItem('tzcp-cart')||'[]');
function updateCart(){document.querySelectorAll('#cart-count').forEach(x=>x.textContent=cart.length);const el=document.getElementById('cart-items');if(!el)return;if(!cart.length){el.innerHTML='<p>Your cart is empty.</p>';return}el.innerHTML=cart.map((p,i)=>`<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #ddd"><img src="${p.image}" style="width:70px;height:84px;object-fit:cover"><div><strong style="font-size:11px">${p.title}</strong><div style="color:#777;margin-top:6px">${p.price}</div><button onclick="removeItem(${i})" style="border:0;background:none;padding:0;margin-top:8px;font-size:10px;text-decoration:underline;cursor:pointer">REMOVE</button></div></div>`).join('')}
function addToCart(p){cart.push(p);localStorage.setItem('tzcp-cart',JSON.stringify(cart));updateCart();document.getElementById('cart')?.classList.add('open')}
function removeItem(i){cart.splice(i,1);localStorage.setItem('tzcp-cart',JSON.stringify(cart));updateCart()}
function toggleCart(){document.getElementById('cart')?.classList.toggle('open');updateCart()}
function openSearch(){document.getElementById('search-overlay')?.classList.add('open');setTimeout(()=>document.getElementById('search-input')?.focus(),50)}
function closeSearch(e){if(!e||e.target===document.getElementById('search-overlay'))document.getElementById('search-overlay')?.classList.remove('open')}
function subscribe(e){e.preventDefault();alert('You are on the list.');e.target.reset()}
function contactSubmit(e){e.preventDefault();alert('Message received.');e.target.reset()}
function loadProduct(){const id=new URLSearchParams(location.search).get('id')||'after-hours';const p=products[id]||products['after-hours'];const im=document.getElementById('product-image');if(im){im.src=p.image;im.alt=p.title}const t=document.getElementById('product-title');if(t)t.textContent=p.title;const pr=document.getElementById('product-price');if(pr)pr.textContent=p.price;const d=document.getElementById('product-description');if(d)d.textContent=p.desc}
function addCurrentProduct(){const id=new URLSearchParams(location.search).get('id')||'after-hours';addToCart(products[id]||products['after-hours'])}
document.addEventListener('DOMContentLoaded',()=>{updateCart();loadProduct();document.querySelectorAll('.sizes button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.sizes button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')})});
