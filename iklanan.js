document.addEventListener("DOMContentLoaded", function() {
    // Cari SEMUA elemen yang memiliki class "iklanan"
    const semuaElemenIklan = document.querySelectorAll(".iklanan");

        // 1. Array khusus untuk iklan Horizontal
        const iklanHorizontal = [
			[`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/125x125/simple_v1.gif" alt="Advertise with Anonymous Ads" width="125px" height="125px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/200x200/simple_v1.gif" alt="Advertise with Anonymous Ads" width="200px" height="200px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/250x250/simple_v1.gif" alt="Advertise with Anonymous Ads" width="250px" height="250px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/300x250/simple_v1.gif" alt="Advertise with Anonymous Ads" width="300px" height="250px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/320x50/simple_v1.gif" alt="Advertise with Anonymous Ads" width="320px" height="50px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/320x100/simple_v1.gif" alt="Advertise with Anonymous Ads" width="320px" height="100px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/336x280/simple_v1.gif" alt="Advertise with Anonymous Ads" width="336px" height="280px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/468x60/simple_v1.gif" alt="Advertise with Anonymous Ads" width="468px" height="60px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/728x90/simple_v1.gif" alt="Advertise with Anonymous Ads" width="728px" height="90px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/970x90/simple_v1.gif" alt="Advertise with Anonymous Ads" width="970px" height="90px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/970x250/simple_v1.gif" alt="Advertise with Anonymous Ads" width="970px" height="250px" /></a>`,
			],
			[
			`<!-- BEGIN AADS AD UNIT 2450840 --> <div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 99998;"> <iframe data-aa='2450840' src='//acceptable.a-ads.com/2450840/?size=Adaptive' style='border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto'></iframe> </div> <!-- END AADS AD UNIT 2450840 -->`,
			]
        ];

        // 2. Array khusus untuk iklan Vertikal
        const iklanVertikal = [
			[`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/120x600/simple_v1.gif" alt="Advertise with Anonymous Ads" width="120px" height="600px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/125x125/simple_v1.gif" alt="Advertise with Anonymous Ads" width="125px" height="125px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/160x600/simple_v1.gif" alt="Advertise with Anonymous Ads" width="160px" height="600px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/200x200/simple_v1.gif" alt="Advertise with Anonymous Ads" width="200px" height="200px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/240x400/simple_v1.gif" alt="Advertise with Anonymous Ads" width="240px" height="400px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/250x250/simple_v1.gif" alt="Advertise with Anonymous Ads" width="250px" height="250px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/300x250/simple_v1.gif" alt="Advertise with Anonymous Ads" width="300px" height="250px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/300x600/simple_v1.gif" alt="Advertise with Anonymous Ads" width="300px" height="600px" /></a>`,
			`<a href="https://aads.com/advertise/?partner=1202019"><img src="https://aads.com/a_ads_banners/gif/english/336x280/simple_v1.gif" alt="Advertise with Anonymous Ads" width="336px" height="280px" /></a>`,
			],
			[
			`<!-- BEGIN AADS AD UNIT 2450840 --> <div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 99998;"> <iframe data-aa='2450840' src='//acceptable.a-ads.com/2450840/?size=Adaptive' style='border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto'></iframe> </div> <!-- END AADS AD UNIT 2450840 -->`,
			]
		];

    // 2. Jika ada elemen yang ditemukan, jalankan proses untuk masing-masing elemen
    if (semuaElemenIklan.length > 0) {
        semuaElemenIklan.forEach(function(elemen) {
            
            // Ambil format dari elemen yang sedang diproses
            const formatIklan = elemen.getAttribute("data-format");
            let arrayPilihan = [];

            // Tentukan array mana yang dipakai
            if (formatIklan === "horizontal") {
                arrayPilihan = iklanHorizontal;
            } else if (formatIklan === "vertikal") {
                arrayPilihan = iklanVertikal;
            } else {
                console.warn("Class 'iklanan' ditemukan, tapi data-format tidak valid/kosong.");
                return; // Lanjut ke elemen berikutnya
            }

            // Pilih iklan acak dan masukkan ke elemen tersebut
            if (arrayPilihan.length > 0) {
				const indeksAcak = Math.floor(Math.random() * arrayPilihan.length);
				const iklanPilihan = arrayPilihan[indeksAcak];
				const indeksAcak2 = Math.floor(Math.random() * iklanPilihan.length);
				elemen.innerHTML = iklanPilihan[indeksAcak2];
            }
        });
    } else {
        console.warn("Tidak ada elemen dengan class 'iklanan' di halaman ini.");
    }
});