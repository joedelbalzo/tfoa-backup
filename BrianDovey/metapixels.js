// original code. doesn't work.

// document.addEventListener("DOMContentLoaded", function () {
//   /*  const buttonsToIds = [
//     { buttonName: 'block-e3681e3efc26accc9228', id: 'button-amazon-1234' },
//     { buttonName: 'block-a1328d5cf57b6a56ca03', id: 'button-barnes-1234' },
//     { buttonName: 'block-b1c32c78efa61198b375', id: 'button-booksamillion-1234' },
//     { buttonName: 'block-ae74500dac908e0b7cc1', id: 'button-bookshop-1234' },
//   ]; */

//   const anchorAmazon = document.querySelector("#block-e3681e3efc26accc9228 > div > div > a");
//   if (anchorAmazon) {
//     anchorAmazon.id = "button-amazon-1234";
//   }
//   const anchorBarnes = document.querySelector("#block-a1328d5cf57b6a56ca03> div > div > a");
//   if (anchorBarnes) {
//     anchorBarnes.id = "button-barnes-1234";
//   }
//   const anchorBooksAMillion = document.querySelector("#block-b1c32c78efa61198b375 > div > div > a");
//   if (anchorBooksAMillion) {
//     anchorBooksAMillion.id = "button-booksamillion-1234";
//   }
//   const anchorBookshop = document.querySelector("#block-ae74500dac908e0b7cc1 > div > div > a");
//   if (anchorBookshop) {
//     anchorBookshop.id = "button-bookshop-1234";
//   }
// });

// !(function (f, b, e, v, n, t, s) {
//   if (f.fbq) return;
//   n = f.fbq = function () {
//     n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
//   };
//   if (!f._fbq) f._fbq = n;
//   n.push = n;
//   n.loaded = !0;
//   n.version = "2.0";
//   n.queue = [];
//   t = b.createElement(e);
//   t.async = !0;
//   t.src = v;
//   s = b.getElementsByTagName(e)[0];
//   s.parentNode.insertBefore(t, s);
// })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
// fbq("init", "970563500935478");
// fbq("track", "PageView");
// document.getElementById("button-amazon-1234").addEventListener("click", function () {
//   fbq("track", "AmazonClick", {
//     button_id: "button-amazon-1234",
//     destination: "https://a.co/d/fwnNTU8",
//   });
// });
// document.getElementById("button-barnes-1234").addEventListener("click", function () {
//   fbq("track", "BarnesNobleClick", {
//     button_id: "button-barnes-1234",
//     destination: "https://www.barnesandnoble.com/w/the-idea-is-the-easy-part-brian-dovey/1142959963?ean=9781637744048",
//   });
// });
// document.getElementById("button-booksamillion-1234").addEventListener("click", function () {
//   fbq("track", "BooksAMillionClick", {
//     button_id: "button-booksamillion-1234",
//     destination: "https://www.booksamillion.com/p/Idea-Easy-Part/Brian-Dovey/9781637744048?id=8905133356192",
//   });
// });
// document.getElementById("button-bookshop-1234").addEventListener("click", function () {
//   fbq("track", "BookshopClick", {
//     button_id: "button-bookshop-1234",
//     destination:
//       "https://bookshop.org/p/books/the-idea-is-the-easy-part-myths-and-realities-of-the-startup-world-brian-dovey/19675725?ean=9781637744048",
//   });
// });

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
//remove comment to call this function to get rid of subscribedbuttoncall trackers
// fbq('set', 'autoConfig', 'false', 'FB_PIXEL_ID')
fbq("init", "970563500935478");
fbq("track", "PageView");

//button listeners
document.addEventListener("DOMContentLoaded", function () {
  const buttonsToIds = {
    "block-e3681e3efc26accc9228": "Amazon-button-1234",
    "block-a1328d5cf57b6a56ca03": "Barnes-button-1234",
    "block-b1c32c78efa61198b375": "Books-A-Million-button-1234",
    "block-ae74500dac908e0b7cc1": "Bookshop-button-1234",
  };

  Object.keys(buttonsToIds).forEach((block) => {
    const anchor = document.querySelector(`#${block} >div > div > a`);
    if (anchor) {
      anchor.id = buttonsToIds[block];
      let storeName = buttonsToIds[block].replace("-button-1234", "");
      document.getElementById(anchor.id).addEventListener("click", function () {
        console.log(anchor);
        console.log(`${anchor.id} clicked`);
        fbq("track", `${storeName} Click`, {
          button_id: anchor.id,
          destination: anchor.href,
        });
      });
    } else {
      console.log(`Element not found for block: ${block}`);
    }
  });
});

<img
  height="1"
  width="1"
  src="https://www.facebook.com/tr?id=970563500935478&ev=PageView
&noscript=1"
/>;
