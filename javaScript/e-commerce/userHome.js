let adminStore = JSON.parse(localStorage.getItem("adminStorage")) || [];
let userDatas = JSON.parse(localStorage.getItem("E - commerce")) || []
let productsDiv = document.getElementById("products");
let userLoginIndex = sessionStorage.getItem("Login")
if (!userLoginIndex || userLoginIndex === null || userLoginIndex === "-1") {
    document.getElementById("userLoginName").innerHTML = "Welcome, Guest";
} else {
    document.getElementById("userLoginName").innerHTML = "Welcome, " + userDatas[userLoginIndex]?.userName || "Guest";
}


if (adminStore.length === 0) {
    // If no products are stored, display a message.
    productsDiv.innerHTML = '<p>No products found. Please add some products on the upload page.</p>';
} else {
    // Loop through the array and create product cards.
    adminStore.forEach((product, index) => {
        // console.log(product)
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
              <div class="homeDis">
                <div class="homeDisImage">
                    ${product.img ? `<img src="${product.img}" alt="${product.Product} Image" />` : ''}
                </div>
                <div class="homeDisbtn">
                    <p><strong>Name:</strong> ${product.Product}</p>
                    <button onclick="addCart(${index})">Add to Cart</button>
                    </div>
                <div class="homeDisbtn">
                    <p><strong>Price:</strong> ₦${product.price}</p>
                    <button onclick="buyNow(${index})">Buy Now</button>
                </div>
                <div class="homeDisDesc">
                    <!--<p><strong>Description:</strong> ${product.description}</p> -->
                </div>
              </div>
            `;
        productsDiv.appendChild(productDiv);
    });
}

function addCart(index) {
    let productObject = adminStore[index];
    let cartPush = userDatas[userLoginIndex].cart
    cartPush.push(productObject);
    localStorage.setItem("E - commerce", JSON.stringify(userDatas))
    window.onload()
    // console.log(userHistory)
}

window.onload = function cartNum(index) {
    document.getElementById("cartID").innerHTML = `<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2Z" fill="currentColor"/>
</svg>` + userDatas[userLoginIndex].cart.length

}

if (userLoginIndex && userLoginIndex !== null && userLoginIndex !== "-1") {
    function buyNow(index) {
        let paystack = PaystackPop.setup({
            key: 'pk_test_b3b7ed5537e0493365198ec73cb1d8094fecc7e3',
            email: userDatas[userLoginIndex]?.email || "guest@example.com",
            amount: parseInt((adminStore[index].price).replace(',', '')) * 100,

            callback: function (transaction) {
                alert("Payment successful");
                let userHistory = userDatas[userLoginIndex]?.history || [];
                userHistory.push(adminStore[index]);
                userDatas[userLoginIndex].history = userHistory;
                localStorage.setItem("E - commerce", JSON.stringify(userDatas));
            },
            onClose: function () {
                alert("Payment popup closed");
            }
        });

        paystack.openIframe();
    }
}


// if (displayLogs) {
//   let displayLog = document.querySelector(".innBtns")
//   displayLog.addEventListener('onclick', (e) => {
//     document.getElementById("logOutBtn").style.display = "none"
//     document.getElementById("delAcctBtn").style.display = "none"
//   })
// }
function displayLogs() {

    if (userLoginIndex <= -1 || userLoginIndex === "") {
        alert("Please log in or create a new account.")
        window.location.href = "logIn.html"
    } else {
        document.getElementById("logOutBtn").style.display = "block"
        document.getElementById("delAcctBtn").style.display = "block"
    }
}

function logOut(userLoginIndex) {
    document.getElementById("log").style.display = "block"
    document.getElementById("logWarn").style.display = "block"
    // document.getElementById("body").style.overflow = "hidden"
}

function yesLog(userLoginIndex) {
    let logMsg = (confirm(userDatas[userLoginIndex].fullName + " are you sure you want to log out?"));
    if (logMsg) {
        sessionStorage.removeItem("Login")
        window.location.href = "logIn.html"
        alert("You have successfully logged out.")
    } else {
        alert("You are still logged in!")
        window.location.reload()
    }
}

function noLog(userLoginIndex) {
    document.getElementById("logWarn").style.display = "none"
    document.getElementById("log").style.display = "none"
    window.onload()
}

function delAcctBtn(userLoginIndex) {
    document.getElementById("del").style.display = "block"
    document.getElementById("delWarn").style.display = "block"
    // document.getElementById("body").style.overflow = "hidden"
}

function yesDel(userLoginIndex) {
    let goodByeMsg = (confirm(userDatas[userLoginIndex].fullName + " are you sure you want to delete your account?"));
    if (goodByeMsg) {
        alert("Goodbye, " + userDatas[userLoginIndex].fullName + ", You have successfully deleted your account.");
        userDatas.splice(userLoginIndex, 1)
        window.location.href = "logIn.html"
        localStorage.setItem("E - commerce", JSON.stringify(userDatas))
    } else {
        alert("Account not deleted!")
        window.location.reload()
    }
}

function noDel(userLoginIndex) {
    document.getElementById("delWarn").style.display = "none"
    document.getElementById("del").style.display = "none"
    window.location.reload()
}

document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});