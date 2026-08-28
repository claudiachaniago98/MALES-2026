const MALES_CONFIG={
 brand:{name:'MALES',logo:'assets/brand/logo-brand-males.png',favicon:'assets/brand/logo-brand-males.png',tagline:'Males itu gaya, tapi produktif saat perlu.'},
 hero:{eyebrow:'MALES / OVERSIZE STREETWEAR',title:'GAYA YANG PUNYA ARAH.',description:'Streetwear Indonesia yang tenang, berkarakter, dan dibuat untuk anak muda yang ingin tetap punya gaya tanpa kehilangan tujuan.',image:'assets/brand/MODEL UNTUK HERO.png'},
 ticker:['MALES itu gaya, tapi tetap produktif.','Bangkit. Berkarya. Berkontribusi.','Pakai yang kamu percaya. Kerjakan yang kamu mulai.','#MALESUntukIndonesia'],
 collection:{genders:['Pria','Wanita'],categories:['Kaos','Polo','Celana','Topi','Jaket','Sepatu']},
 price:{currency:'IDR',sizes:{S:300000,M:300000,L:300000,XL:300000,'2XL':325000,'3XL':325000,'4XL':350000}},
 defaults:{fabric:'Cotton Combed 24s Reguler',fit:'Oversize Streetwear',colors:['Putih','Hitam','Cream','Cokelat','Navy','Fuchsia'],sizes:['S','M','L','XL','2XL','3XL','4XL']},
 sizeGuide:[
  {s:'S',h:[155,168],w:[45,60],c:[82,90],b:[39,43],p:[70,78]},
  {s:'M',h:[160,173],w:[55,68],c:[88,98],b:[42,46],p:[76,84]},
  {s:'L',h:[165,178],w:[63,78],c:[96,106],b:[45,49],p:[82,92]},
  {s:'XL',h:[170,183],w:[72,88],c:[104,114],b:[48,52],p:[90,100]},
  {s:'2XL',h:[173,188],w:[82,100],c:[112,122],b:[51,55],p:[98,108]},
  {s:'3XL',h:[176,192],w:[92,112],c:[120,130],b:[54,58],p:[106,118]},
  {s:'4XL',h:[178,198],w:[104,128],c:[128,140],b:[57,62],p:[116,130]}
 ],
 products:[
 ['001','STAYMALES / Essential','STAYMALES','assets/produk/produk-1.png','Signature graphic dengan pesan MALES yang paling ikonik.'],
 ['002','MBG / Statement','MBG','assets/produk/produk-2.png','Graphic statement dengan karakter streetwear yang lebih berani.'],
 ['003','WILD / Graphic','WILD','assets/produk/produk-3.png','Artwork belakang menjadi pusat perhatian tanpa membuat keseluruhan tampak ramai.'],
 ['004','MONO / Archive','MONO','assets/produk/produk-4.png','Nuansa gelap dengan artwork belakang yang lebih editorial.'],
 ['005','ARCHIVE / 05','ARCHIVE','assets/produk/produk-5.png','Series visual untuk kolektor artwork MALES.'],
 ['006','NIGHT / 06','NIGHT','assets/produk/produk-6.png','Graphic dark yang tetap wearable untuk harian.'],
 ['007','BLACK / ARTWORK','BLACK','assets/produk/produk-7.png','Black-on-black mood dengan artwork besar di belakang.'],
 ['008','NOIR / 08','NOIR','assets/produk/produk-8.png','Silhouette minimal dengan artwork yang lebih dalam.'],
 ['009','NOIR / 09','NOIR','assets/produk/produk-9.png','Varian artwork dark untuk styling monokrom.'],
 ['010','KID / 10','KID','assets/produk/produk-10.png','Artwork karakter MALES yang playful namun tetap dewasa.'],
 ['011','INDONESIA / 11','INDONESIA','assets/produk/produk-11.png','Series dengan energi warna yang lebih ekspresif.'],
 ['012','INDONESIA / 12','INDONESIA','assets/produk/produk-12.png','Interpretasi lain dari semangat #MALESUntukIndonesia.']
 ].map((x,i)=>({id:'MALES-K'+x[0],name:x[1],motif:x[2],gender:'Pria',category:'Kaos',image:x[3],description:x[4],featured:i<2,colors:i<6?['Putih','Hitam','Cream','Cokelat','Navy','Fuchsia']:['Hitam','Cream','Navy','Fuchsia']})),
 story:{image:'assets/brand/MODEL UNTUK STORY.png'},
 contact:{whatsapp:{number:'',display:'Nomor admin belum diatur'},message:'Halo Admin MALES, saya ingin melakukan pemesanan.'},
 social:{instagram:'#',tiktok:'#',youtube:'#'}
};
