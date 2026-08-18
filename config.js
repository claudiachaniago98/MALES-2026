const MALES_CONFIG = {

  /* =====================================================
     MALES — BRAND
     ===================================================== */

  brand: {
    name: "MALES",
    logo: "assets/brand/logo.png",
    favicon: "assets/brand/favicon.png"
  },


  /* =====================================================
     HERO / MAIN VISUAL
     ===================================================== */

  hero: {
    eyebrow: "MALES — NEW SEASON",
    title: "STAY MALES. STAY CONSCIOUS.",
    description:
      "Fashion untuk mereka yang memiliki gaya, karakter, dan kesadaran.",
    image: "assets/brand/hero.jpg",

    button: {
      text: "EXPLORE COLLECTION",
      target: "#collection"
    }
  },


  /* =====================================================
     RUNNING MESSAGE
     ===================================================== */

  ticker: [
    "MALES itu gaya, tapi tetap produktif",
    "MALES itu perbedaan bukan penyimpangan",
    "StayMALES, StayCONSCIOUS",
    "Μια ζωή χωρίς σκοπό είναι κενό"
  ],


  /* =====================================================
     PHILOSOPHY
     ===================================================== */

  philosophy: {
    eyebrow: "THE PHILOSOPHY",

    title: "Gaya adalah bahasa. Kesadaran adalah arah.",

    description:
      "MALES bukan sekadar pakaian. MALES adalah sebuah cara untuk mengekspresikan karakter, pemikiran, dan kesadaran dalam menjalani kehidupan."
  },


  /* =====================================================
     COLLECTION
     ===================================================== */

  collection: {

    title: "FIND YOUR MALES",

    genders: [
      "Pria",
      "Wanita"
    ],

    categories: [
      "Kaos / T-Shirt",
      "Polo Shirt",
      "Jaket",
      "Celana",
      "Topi",
      "Sepatu"
    ]
  },


  /* =====================================================
     PRICE SYSTEM
     ===================================================== */

  price: {

    currency: "IDR",

    sizes: {
      "S": 300000,
      "M": 300000,
      "L": 300000,
      "XL": 300000,
      "XXL": 300000,
      "3XL": 325000,
      "4XL": 325000,
      "5XL": 350000
    }
  },


  /* =====================================================
     SIZE RECOMMENDATION
     ===================================================== */

  sizeRecommendation: {

    title: "FIND MY MALES RECOMMENDED SIZE",

    description:
      "Gunakan ukuran tubuh kamu sebagai patokan untuk menemukan ukuran MALES yang paling sesuai.",

    measurement: {
      chest: true,
      height: true
    },

    guide: [
      {
        size: "S",
        chest: 88,
        heightMin: 155,
        heightMax: 168
      },
      {
        size: "M",
        chest: 96,
        heightMin: 160,
        heightMax: 173
      },
      {
        size: "L",
        chest: 104,
        heightMin: 165,
        heightMax: 178
      },
      {
        size: "XL",
        chest: 112,
        heightMin: 170,
        heightMax: 183
      },
      {
        size: "XXL",
        chest: 120,
        heightMin: 175,
        heightMax: 188
      },
      {
        size: "3XL",
        chest: 128,
        heightMin: 178,
        heightMax: 193
      },
      {
        size: "4XL",
        chest: 136,
        heightMin: 180,
        heightMax: 198
      },
      {
        size: "5XL",
        chest: 144,
        heightMin: 183,
        heightMax: 205
      }
    ]
  },


  /* =====================================================
     PRODUCTS
     ===================================================== */

  products: [

    /*
      CONTOH PRODUK.
      Nanti seluruh katalog MALES dimasukkan di sini.
    */

    {
      id: "MALES-M001",

      name: "MALES Oversize Essential",

      gender: "Pria",

      category: "Kaos / T-Shirt",

      description:
        "MALES signature oversize streetwear.",

      image:
        "assets/products/men/males-m001.jpg",

      availableSizes: [
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL",
        "5XL"
      ],

      featured: true,
      newSeason: true,
      limited: false
    },


    {
      id: "MALES-F001",

      name: "MALES Oversize Essential",

      gender: "Wanita",

      category: "Kaos / T-Shirt",

      description:
        "MALES signature oversize streetwear for women.",

      image:
        "assets/products/women/males-f001.jpg",

      availableSizes: [
        "S",
        "M",
        "L",
        "XL",
        "XXL",
        "3XL",
        "4XL",
        "5XL"
      ],

      featured: true,
      newSeason: true,
      limited: false
    }

  ],


  /* =====================================================
     STORY
     ===================================================== */

  story: {

    eyebrow: "THE STORY",

    title:
      "Tiga anak muda. Satu kegelisahan.",

    paragraphs: [

      "MALES lahir dari kegelisahan tiga orang anak muda yang memiliki pandangan terhadap kehidupan sosial di dunia, terutama di Indonesia.",

      "Kami melihat banyak anak muda Indonesia masih mencari jati diri dan belum memiliki tujuan hidup yang jelas. Banyak yang memilih hidup bebas tanpa benar-benar memahami arah yang ingin mereka tuju.",

      "Kami percaya bahwa menjadi berbeda bukan berarti menyimpang.",

      "Perbedaan bukan penyimpangan.",

      "MALES hadir untuk mengajak anak muda Indonesia mulai menilai setiap titik kehidupan yang akan mereka lalui dengan kesadaran, karakter, dan tujuan.",

      "MALES hadir untuk anak muda Indonesia."
    ]
  },


  /* =====================================================
     SOCIAL MEDIA
     ===================================================== */

  social: {

    instagram: {
      name: "Instagram",
      url: "#"
    },

    facebook: {
      name: "Facebook",
      url: "#"
    },

    tiktok: {
      name: "TikTok",
      url: "#"
    },

    youtube: {
      name: "YouTube",
      url: "#"
    }
  },


  /* =====================================================
     CONTACT / CHECKOUT
     ===================================================== */

  contact: {

    whatsapp: {
      number: "6285371610334",
      display: "+62 853-7161-0334"
    },

    label: "WhatsApp Admin",

    checkoutMessage:
      "Halo MALES, saya ingin melakukan pemesanan."
  },


  /* =====================================================
     FOOTER
     ===================================================== */

  footer: {

    tagline:
      "MALES — Fashion, identity, consciousness.",

    copyright:
      "MALES"
  }

};
