let toggler = document.getElementById("toggle_price");

toggler.addEventListener("change", togglePrice);

function togglePrice() {
  console.log(toggler.checked);

  let price = document.querySelectorAll(".pricing");

  if (toggler.checked == true) {
    for (let i = 0; i < price.length; i++) {
      const element = price[i].innerHTML;

      const amount = parseInt(element, 10);

      const pricing = amount * 10;

      const annualPrice = pricing + 9.99;

      price[i].innerHTML = annualPrice;
    }
  } else {
    for (let index = 0; index < price.length; index++) {
      const element = price[index].innerHTML;

      const amount = parseInt(element, 10);

      const pricing = amount / 10;

      const monthlyPrice = pricing + 0.09;

      price[index].innerHTML = monthlyPrice;
    }
  }
}

let card = document.querySelectorAll(".card");

for (let j = 0; j < card.length; j++) {
  card[j].addEventListener("click", function (e) {
    // console.log(e.target)

    for (let k = 0; k < card.length; k++) {
      if (card[k] !== e.target) {
        card[k].classList.remove("active");
      }
    }

    card[j].classList.add("active");
  });
}
