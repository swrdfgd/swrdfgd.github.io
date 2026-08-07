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
			],
			[`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_300x250.png" alt="" width="300" height="250"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_300x300.png" alt="" width="300" height="300"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_320x50.png" alt="" width="320" height="50"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_320x100.png" alt="" width="320" height="100"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_324x60.png" alt="" width="324" height="60"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_336x280.png" alt="" width="336" height="280"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_468x60.png" alt="" width="468" height="60"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_728x90.png" alt="" width="728" height="90"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_300x250.png" alt="" width="300" height="250"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_300x300.png" alt="" width="300" height="300"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_320x50.png" alt="" width="320" height="50"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_320x100.png" alt="" width="320" height="100"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_324x60.png" alt="" width="324" height="60"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_336x280.png" alt="" width="336" height="280"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_468x60.png" alt="" width="468" height="60"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_728x90.png" alt="" width="728" height="90"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/300x250.gif" alt="" width="300" height="250"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/300x300.gif" alt="" width="300" height="300"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/320x50.gif" alt="" width="320" height="50"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/320x100.gif" alt="" width="320" height="100"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/324x60.gif" alt="" width="324" height="60"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/336x280.gif" alt="" width="336" height="280"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/468x60.gif" alt="" width="468" height="60"/></a>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=234x60&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="234" height="60"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=300x250&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="300" height="250"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=300x300&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="300" height="300"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=320x50&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="320" height="50"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=320x100&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="320" height="100"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=336x280&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="336" height="280"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=468x60&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="468" height="60"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=728x90&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="728" height="90"></iframe>`,
			],
			[`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w200h200.gif" alt="200h200"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w200h200.gif" alt="200h200"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w250h250.gif" alt="250h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w250h250.gif" alt="250h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w300h250.gif" alt="300h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w300h250.gif" alt="300h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w320h50.gif" alt="320h50"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w320h50.gif" alt="320h50"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w320h100.gif" alt="320h100"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w320h100.gif" alt="320h100"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w320h320.gif" alt="320h320"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w320h320.gif" alt="320h320"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w460h60.gif" alt="460h60"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w460h60.gif" alt="460h60"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w728h90.gif" alt="728h90"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w728h90.gif" alt="728h90"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w970h90.gif" alt="970h90"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w970h90.gif" alt="970h90"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w970h250.gif" alt="970h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w970h250.gif" alt="970h250"/> </a> <!--End rollercoin.com code-->`,
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
			[
			`<!-- BEGIN AADS AD UNIT 2450840 --> <div id="frame" style="width: 100%;margin: auto;position: relative; z-index: 99998;"> <iframe data-aa='2450840' src='//acceptable.a-ads.com/2450840/?size=Adaptive' style='border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto'></iframe> </div> <!-- END AADS AD UNIT 2450840 -->`,
			],
			[`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_120x600.png" alt="" width="120" height="600"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_160x600.png" alt="" width="160" height="600"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_300x250.png" alt="" width="300" height="250"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_300x300.png" alt="" width="300" height="300"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/1_336x280.png" alt="" width="336" height="280"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_120x600.png" alt="" width="120" height="600"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_160x600.png" alt="" width="160" height="600"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_300x250.png" alt="" width="300" height="250"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_300x300.png" alt="" width="300" height="300"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/static/2_336x280.png" alt="" width="336" height="280"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/120x600.gif" alt="" width="120" height="600"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/160x600.gif" alt="" width="160" height="600"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/300x250.gif" alt="" width="300" height="250"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/300x300.gif" alt="" width="300" height="300"/></a>`,
			`<a href="https://faucetpay.io/?r=16364" target="_blank"><img src="https://cdn.faucetpay.io/banners/gif/336x280.gif" alt="" width="336" height="280"/></a>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=120x600&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="120" height="600"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=160x600&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="160" height="600"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=300x250&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="300" height="250"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=300x300&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="300" height="300"></iframe>`,
			`<iframe src="//api.fpadserver.com/referral-banners?size=336x280&clickTag=https://faucetpay.io/?r=16364" scrolling="no" frameborder="0" width="336" height="280"></iframe>`,
			],
			[`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w120h240.gif" alt="120h240"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w120h240.gif" alt="120h240"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w120h600.gif" alt="120h600"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w120h600.gif" alt="120h600"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w160h600.gif" alt="160h600"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w160h600.gif" alt="160h600"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w200h200.gif" alt="200h200"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w200h200.gif" alt="200h200"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w250h250.gif" alt="250h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w250h250.gif" alt="250h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w300h250.gif" alt="300h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w300h250.gif" alt="300h250"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w300h600.gif" alt="300h600"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w300h600.gif" alt="300h600"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen2/w300h1050.gif" alt="300h1050"/> </a> <!--End rollercoin.com code-->`,
			`<!--Start rollercoin.com code--> <a href="https://rollercoin.com/?r=jy4kc2py"> <img src="https://static.rollercoin.com/static/img/ref/gen3/w300h1050.gif" alt="300h1050"/> </a> <!--End rollercoin.com code-->`,
			
			],
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