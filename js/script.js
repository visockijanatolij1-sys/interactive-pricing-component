const slider = document.querySelector(".pricing-slider");
const toggle = document.querySelector(".billing-toggle_input");

const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".block-top_price");

const pricing = [
    {
        pageviews: "10K",
        price: 8
    },
    {
        pageviews: "50K",
        price: 12
    },
    {
        pageviews: "100K",
        price: 16
    },
    {
        pageviews: "500K",
        price: 24
    },
    {
        pageviews: "1M",
        price: 36
    }
];

function updatePrice() {
    let sliderValue = +slider.value;
    const currentPlan = pricing[sliderValue];

    pageviews.textContent = `${currentPlan.pageviews} PAGEVIEWS`;
    if (toggle.checked){
        price.textContent = ` $${currentPlan.price * 0.75}.00`;
    }
    else {
        price.textContent = ` $${currentPlan.price}.00`;
    }

    const progress =  sliderValue * 25;
    slider.style.background = `linear-gradient(
        to right,
        #a5f3eb 0%,
        #a5f3eb ${progress}%,
        #eaeefb ${progress}%,
        #eaeefb 100%
    )`;

}


slider.addEventListener("input", updatePrice);

toggle.addEventListener("change", updatePrice);


updatePrice();