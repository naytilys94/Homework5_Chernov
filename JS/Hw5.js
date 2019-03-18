var bm = document.querySelector('.burger-menu'),
	mn = document.querySelector('.navigation'),
	bmc = document.querySelector('.bm-close');
bm.onclick = function () {
		bm.classList.add('bm-active');
		mn.classList.add('nav-bm');
		bmc.classList.add('nav-bm');
		}
bmc.onclick = function () {
		bm.classList.toggle('bm-active');
		mn.classList.toggle('nav-bm');
		bmc.classList.toggle('nav-bm');
		bm.classList.add('nav-bm');
		}
