(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`form`),t=document.querySelector(`#task-input`),n=document.querySelector(`#task-list`),r=()=>{let e=t.value.trim();if(e.length>0){let n={text:e,completed:!1};c.push(n),i(),s(),t.value=``}},i=()=>{n.innerHTML=``,c.forEach((e,t)=>{let r=a(e,t);n.append(r)})},a=(e,t)=>{let n=`task-`+t,r=document.createElement(`li`),i=e.text;r.className=`task`,r.innerHTML=`
    <input id="${n}" type="checkbox" />
		<label class="custom-checkbox" for="${n}">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent">
				<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
			</svg>
		</label>

		<label class="task-text" for="${n}">${i}</label>

		<button class="remove-task">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
				<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
			</svg>
		</button>
  `,r.querySelector(`.remove-task`).addEventListener(`click`,()=>{o(t)});let a=r.querySelector(`input`);return a.addEventListener(`change`,()=>{c[t].completed=a.checked,s()}),a.checked=e.completed,r},o=e=>{c=c.filter((t,n)=>n!==e),s(),i()},s=()=>{let e=JSON.stringify(c);localStorage.setItem(`tasks`,e)},c=(()=>{let e=localStorage.getItem(`tasks`)||`[]`;return JSON.parse(e)})();i(),e.addEventListener(`submit`,e=>{e.preventDefault(),r()});