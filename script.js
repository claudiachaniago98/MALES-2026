/* =========================================================
   MALES — MAIN WEBSITE ENGINE
   Semua data website dibaca dari config.js
   ========================================================= */

(() => {

  "use strict";


  /* =======================================================
     CONFIG
     ======================================================= */

  const C = window.MALES_CONFIG;

  if (!C) {
    console.error("MALES_CONFIG tidak ditemukan.");
    return;
  }


  /* =======================================================
     HELPERS
     ======================================================= */

  const $ = (selector) =>
    document.querySelector(selector);


  const $$ = (selector) =>
    document.querySelectorAll(selector);


  const escapeHTML = (value) => {

    if (value === null || value === undefined) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };


  const formatPrice = (price) => {

    return new Intl.NumberFormat(
      "id-ID",
      {
        style: "currency",
        currency: C.price.currency || "IDR",
        maximumFractionDigits: 0
      }
    ).format(price);

  };


  const getPriceBySize = (size) => {

    return C.price.sizes[size] || 0;

  };


  /* =======================================================
     BRAND
     ======================================================= */

  const setupBrand = () => {

    const logo = $("#brandLogo");

    if (logo) {
      logo.src = C.brand.logo;
      logo.alt = C.brand.name;
    }


    const footerLogo = $("#footerLogo");

    if (footerLogo) {
      footerLogo.src = C.brand.logo;
      footerLogo.alt = C.brand.name;
    }


    document.title =
      `${C.brand.name} — StayMALES, StayCONSCIOUS`;

  };


  /* =======================================================
     HERO
     ======================================================= */

  const setupHero = () => {

    const image = $("#heroImage");

    if (image) {

      image.src = C.hero.image;

      image.alt =
        escapeHTML(C.hero.title);

    }


    const eyebrow =
      $("#heroEyebrow");

    if (eyebrow) {
      eyebrow.textContent =
        C.hero.eyebrow;
    }


    const title =
      $("#heroTitle");

    if (title) {
      title.textContent =
        C.hero.title;
    }


    const description =
      $("#heroDescription");

    if (description) {
      description.textContent =
        C.hero.description;
    }


    const button =
      $("#heroButton");

    if (button) {

      button.textContent =
        C.hero.button.text;

      button.href =
        C.hero.button.target;

    }

  };


  /* =======================================================
     NAVIGATION
     ======================================================= */

  const setupNavigation = () => {

    const navigation =
      $("#mainNavigation");

    if (!navigation) {
      return;
    }


    const links = [

      {
        label: "Philosophy",
        target: "#philosophy"
      },

      {
        label: "Collection",
        target: "#collection"
      },

      {
        label: "Story",
        target: "#story"
      },

      {
        label: "Find My Size",
        target: "#size"
      },

      {
        label: "Contact",
        target: "#contact"
      }

    ];


    navigation.innerHTML =
      links.map(link => `

        <a href="${link.target}">
          ${escapeHTML(link.label)}
        </a>

      `).join("");


    navigation
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            navigation.classList.remove(
              "active"
            );

          }
        );

      });

  };


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const setupMobileMenu = () => {

    const button =
      $("#menuButton");

    const navigation =
      $("#mainNavigation");

    if (!button || !navigation) {
      return;
    }


    button.addEventListener(
      "click",
      () => {

        navigation.classList.toggle(
          "active"
        );

      }
    );

  };


  /* =======================================================
     TICKER
     ======================================================= */

  const setupTicker = () => {

    const track =
      $("#tickerTrack");

    if (!track) {
      return;
    }


    const messages =
      C.ticker || [];


    const createTickerItem =
      (message) => `

        <div class="ticker-item">

          <span>
            ${escapeHTML(message)}
          </span>

          <span class="ticker-dot"></span>

        </div>

      `;


    /*
      Digandakan agar animasi berjalan
      tanpa putus.
    */

    const tickerContent =
      messages
        .map(createTickerItem)
        .join("");


    track.innerHTML =
      tickerContent +
      tickerContent;

  };


  /* =======================================================
     PHILOSOPHY
     ======================================================= */

  const setupPhilosophy = () => {

    const eyebrow =
      $("#philosophyEyebrow");

    const title =
      $("#philosophyTitle");

    const description =
      $("#philosophyDescription");


    if (eyebrow) {
      eyebrow.textContent =
        C.philosophy.eyebrow;
    }


    if (title) {
      title.textContent =
        C.philosophy.title;
    }


    if (description) {
      description.textContent =
        C.philosophy.description;
    }

  };


  /* =======================================================
     COLLECTION FILTERS
     ======================================================= */

  const setupFilters = () => {

    const gender =
      $("#genderFilter");

    const category =
      $("#categoryFilter");


    if (gender) {

      gender.innerHTML = `

        <option value="">
          Semua Gender
        </option>

        ${(C.collection.genders || [])
          .map(item => `
            <option value="${escapeHTML(item)}">
              ${escapeHTML(item)}
            </option>
          `)
          .join("")}

      `;

    }


    if (category) {

      category.innerHTML = `

        <option value="">
          Semua Kategori
        </option>

        ${(C.collection.categories || [])
          .map(item => `
            <option value="${escapeHTML(item)}">
              ${escapeHTML(item)}
            </option>
          `)
          .join("")}

      `;

    }


    if (gender) {
      gender.addEventListener(
        "change",
        renderProducts
      );
    }


    if (category) {
      category.addEventListener(
        "change",
        renderProducts
      );
    }

  };


  /* =======================================================
     PRODUCTS
     ======================================================= */

  const renderProducts = () => {

    const grid =
      $("#productsGrid");

    if (!grid) {
      return;
    }


    const genderValue =
      $("#genderFilter")?.value || "";


    const categoryValue =
      $("#categoryFilter")?.value || "";


    const products =
      (C.products || []).filter(product => {

        const genderMatch =
          !genderValue ||
          product.gender === genderValue;


        const categoryMatch =
          !categoryValue ||
          product.category === categoryValue;


        return genderMatch &&
               categoryMatch;

      });


    if (!products.length) {

      grid.innerHTML = `

        <div class="empty-products">

          Collection untuk filter ini
          belum tersedia.

        </div>

      `;

      return;
    }


    grid.innerHTML =
      products
        .map(createProductCard)
        .join("");


    setupProductButtons();

  };


  /* =======================================================
     PRODUCT CARD
     ======================================================= */

  const createProductCard =
    (product) => {

      const badges = [];


      if (product.featured) {
        badges.push("Featured");
      }


      if (product.newSeason) {
        badges.push("New Season");
      }


      if (product.limited) {
        badges.push("Limited");
      }


      const badgeHTML =
        badges.length
          ? `

            <div class="product-badges">

              ${badges
                .map(badge => `

                  <span class="product-badge">
                    ${escapeHTML(badge)}
                  </span>

                `)
                .join("")}

            </div>

          `
          : "";


      const sizes =
        product.availableSizes || [];


      const sizeButtons =
        sizes
          .map(size => {

            const price =
              getPriceBySize(size);


            return `

              <button

                type="button"

                class="size-button"

                data-product-id="${escapeHTML(product.id)}"

                data-size="${escapeHTML(size)}"

              >

                ${escapeHTML(size)}

                <small>
                  ${formatPrice(price)}
                </small>

              </button>

            `;

          })
          .join("");


      return `

        <article
          class="product-card"
          data-product="${escapeHTML(product.id)}"
        >


          <div class="product-image">

            ${badgeHTML}

            <img

              src="${escapeHTML(product.image)}"

              alt="${escapeHTML(product.name)}"

              loading="lazy"

            >

          </div>


          <div class="product-info">


            <div class="product-meta">

              ${escapeHTML(product.gender)}

              ·

              ${escapeHTML(product.category)}

            </div>


            <h3 class="product-name">

              ${escapeHTML(product.name)}

            </h3>


            <p class="product-description">

              ${escapeHTML(product.description)}

            </p>


            <div class="product-price">

              Mulai

              <strong>
                ${formatPrice(
                  getPriceBySize("S")
                )}
              </strong>

            </div>


            <div class="product-sizes">

              ${sizeButtons}

            </div>


          </div>

        </article>

      `;

    };


  /* =======================================================
     PRODUCT CHECKOUT
     ======================================================= */

  const setupProductButtons = () => {

    $$(".size-button")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const productId =
              button.dataset.productId;


            const selectedSize =
              button.dataset.size;


            const product =
              (C.products || [])
                .find(
                  item =>
                    item.id === productId
                );


            if (!product) {
              return;
            }


            const price =
              getPriceBySize(
                selectedSize
              );


            const message =

              `${C.contact.checkoutMessage}

Produk: ${product.name}

Gender: ${product.gender}

Kategori: ${product.category}

Ukuran: ${selectedSize}

Harga: ${formatPrice(price)}

Kode Produk: ${product.id}`;


            const whatsappURL =

              `https://wa.me/` +

              `${C.contact.whatsapp.number}` +

              `?text=` +

              `${encodeURIComponent(message)}`;


            window.open(
              whatsappURL,
              "_blank"
            );

          }
        );

      });

  };


  /* =======================================================
     STORY
     ======================================================= */

  const setupStory = () => {

    const eyebrow =
      $("#storyEyebrow");

    const title =
      $("#storyTitle");

    const content =
      $("#storyContent");


    if (eyebrow) {

      eyebrow.textContent =
        C.story.eyebrow;

    }


    if (title) {

      title.textContent =
        C.story.title;

    }


    if (content) {

      content.innerHTML =

        (C.story.paragraphs || [])
          .map((paragraph, index) => {

            const highlight =
              paragraph
                .toLowerCase()
                .includes(
                  "perbedaan bukan penyimpangan"
                );


            return `

              <p
                class="${
                  highlight
                    ? "highlight"
                    : ""
                }"
              >

                ${escapeHTML(paragraph)}

              </p>

            `;

          })
          .join("");

    }

  };


  /* =======================================================
     SIZE RECOMMENDATION
     ======================================================= */

  const setupSizeRecommendation = () => {

    const description =
      $("#sizeDescription");


    if (description) {

      description.textContent =
        C.sizeRecommendation.description;

    }


    const guide =
      $("#sizeGuide");


    if (guide) {

      const rows =
        C.sizeRecommendation.guide
          .map(item => {

            const price =
              getPriceBySize(
                item.size
              );


            return `

              <tr>

                <td>
                  ${escapeHTML(item.size)}
                </td>

                <td>
                  ± ${item.chest} cm
                </td>

                <td>
                  ${item.heightMin}
                  –
                  ${item.heightMax}
                  cm
                </td>

                <td>
                  ${formatPrice(price)}
                </td>

              </tr>

            `;

          })
          .join("");


      guide.innerHTML = `

        <table>

          <thead>

            <tr>

              <th>Size</th>

              <th>Lingkar Dada</th>

              <th>Tinggi Badan</th>

              <th>Harga</th>

            </tr>

          </thead>


          <tbody>

            ${rows}

          </tbody>

        </table>

      `;

    }


    const button =
      $("#findSizeButton");


    if (button) {

      button.addEventListener(
        "click",
        calculateRecommendedSize
      );

    }

  };


  /* =======================================================
     SIZE CALCULATOR
     ======================================================= */

  const calculateRecommendedSize = () => {

    const chest =
      Number(
        $("#chestInput")?.value
      );


    const height =
      Number(
        $("#heightInput")?.value
      );


    const result =
      $("#sizeResult");


    if (!result) {
      return;
    }


    if (!chest || !height) {

      result.innerHTML = `

        <div class="size-result-box">

          Silakan masukkan
          lingkar dada dan tinggi badan
          terlebih dahulu.

        </div>

      `;

      return;
    }


    const guide =
      C.sizeRecommendation.guide || [];


    if (!guide.length) {
      return;
    }


    /*
      Algoritma mencari ukuran
      terdekat berdasarkan:

      1. Lingkar dada
      2. Tinggi badan
    */


    const scored =
      guide.map(item => {

        const chestDifference =
          Math.abs(
            chest - item.chest
          );


        let heightDifference = 0;


        if (
          height <
          item.heightMin
        ) {

          heightDifference =
            item.heightMin -
            height;

        }


        if (
          height >
          item.heightMax
        ) {

          heightDifference =
            height -
            item.heightMax;

        }


        const score =
          chestDifference +
          (heightDifference * 0.5);


        return {
          ...item,
          score
        };

      });


    scored.sort(
      (a, b) =>
        a.score - b.score
    );


    const recommended =
      scored[0];


    const price =
      getPriceBySize(
        recommended.size
      );


    result.innerHTML = `

      <div class="size-result-box">

        <span class="eyebrow">
          RECOMMENDED MALES SIZE
        </span>

        <strong
          style="
            display:block;
            font-size:48px;
            margin:8px 0;
          "
        >
          ${escapeHTML(
            recommended.size
          )}
        </strong>

        <div>

          Harga:

          <strong>
            ${formatPrice(price)}
          </strong>

        </div>

        <p
          style="
            color:#8d8b86;
            margin-top:10px;
            font-size:13px;
          "
        >

          Rekomendasi dibuat berdasarkan
          patokan ukuran MALES yang
          tersimpan di CONFIG.

        </p>

      </div>

    `;

  };


  /* =======================================================
     SOCIAL MEDIA
     ======================================================= */

  const setupSocial = () => {

    const container =
      $("#socialLinks");


    if (!container) {
      return;
    }


    const social =
      C.social || {};


    container.innerHTML =

      Object.values(social)
        .map(item => `

          <a

            href="${escapeHTML(item.url)}"

            target="_blank"

            rel="noopener noreferrer"

          >

            ${escapeHTML(item.name)}

          </a>

        `)
        .join("");

  };


  /* =======================================================
     WHATSAPP CONTACT
     ======================================================= */

  const setupContact = () => {

    const button =
      $("#whatsappButton");


    if (!button) {
      return;
    }


    const number =
      C.contact.whatsapp.number;


    const message =
      C.contact.checkoutMessage;


    button.href =
      `https://wa.me/${number}` +
      `?text=${encodeURIComponent(message)}`;

  };


  /* =======================================================
     FOOTER
     ======================================================= */

  const setupFooter = () => {

    const tagline =
      $("#footerTagline");


    const copyright =
      $("#footerCopyright");


    const year =
      $("#footerYear");


    if (tagline) {

      tagline.textContent =
        C.footer.tagline;

    }


    if (copyright) {

      copyright.textContent =
        C.footer.copyright;

    }


    if (year) {

      year.textContent =
        new Date().getFullYear();

    }

  };


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const setupRevealAnimation = () => {

    const elements =
      document.querySelectorAll(
        ".content-section"
      );


    elements.forEach(element => {

      element.classList.add(
        "reveal"
      );

    });


    if (
      !("IntersectionObserver" in window)
    ) {

      elements.forEach(
        element =>
          element.classList.add(
            "visible"
          )
      );

      return;

    }


    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },

        {
          threshold: 0.08
        }

      );


    elements.forEach(
      element =>
        observer.observe(element)
    );

  };


  /* =============================================
