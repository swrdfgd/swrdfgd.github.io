document.addEventListener("DOMContentLoaded", function() {
    const elemenIklan = document.getElementById("iklanan");

    if (elemenIklan) {
        // Ambil nilai format dari HTML (horizontal / vertikal)
        const formatIklan = elemenIklan.getAttribute("data-format");

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
		];

        // Variabel penampung array yang akan dipilih
        let arrayPilihan = [];

        // 3. Tentukan array mana yang dipakai berdasarkan atribut HTML
        if (formatIklan === "horizontal") {
            arrayPilihan = iklanHorizontal;
        } else if (formatIklan === "vertikal") {
            arrayPilihan = iklanVertikal;
        } else {
            // Jika atribut kosong atau salah ketik
            console.warn("Format iklan tidak valid atau tidak ditemukan.");
            return; // Hentikan proses
        }

        // 4. Pilih iklan secara acak dari array yang terpilih
        if (arrayPilihan.length > 0) {
            const indeksAcak = Math.floor(Math.random() * arrayPilihan.length);
			const iklanPilihan = arrayPilihan[indeksAcak];
			const indeksAcak2 = Math.floor(Math.random() * iklanPilihan.length);
            elemenIklan.innerHTML = iklanPilihan[indeksAcak2];
        }

    } else {
        console.warn("Elemen dengan id 'iklanan' tidak ditemukan.");
    }
});