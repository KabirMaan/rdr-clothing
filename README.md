# rdr-clothing

<h3>Demo</h3>
https://rdr-clothing-live.herokuapp.com/

<h3>What is it?</h3>

<p>An Ecommerce Site for RDR Clothing with authentication. Users can add items to a cart, checkout and pay via Stripe</p>

<h3>What technologies are used?</h3>
<p>React, Redux, Node, Express, Firebase, SCSS and Jest</p>

<h3>How to run it</h3>

```bash
# Install dependencies for server
npm install

# cd into client directory
cd client
# Install dependencies for client
npm install

# cd back into root directory
cd ..

# Run the client & server with concurrently
npm run dev



# Server runs on http://localhost:5000 and client on http://localhost:3000
You will need to create a stripe secret key environment variable to use checkout payment.

STRIPE_SECRET_KEY=INSERT_KEY_HERE
```

<h3>How to use it</h3>

Register with any email or use a Google Account to login.
Create Your profile by filling in the required fields.

<img src="https://github.com/KabirMaan/rdr-clothing/blob/master/readme-images/signin.jpg" width="1100" title="Sign In">

Click on one of the clothing categories on the Home page

<img src="https://github.com/KabirMaan/rdr-clothing/blob/master/readme-images/home.jpg" width="1100" title="Home">

Hover over items to reveal Add To Cart button. Items in the cart can be viewed by clicking the bag icon in the top right of the page.

<img src="https://github.com/KabirMaan/rdr-clothing/blob/master/readme-images/clothing.jpg" width="1100" title="Clothing">

Checkout using Stripe payment.

<img src="https://github.com/KabirMaan/rdr-clothing/blob/master/readme-images/checkout.jpg" width="1100" title="Checkout">
