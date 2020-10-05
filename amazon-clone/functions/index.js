const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HXyD0GwgqTsovgj30gsctkmThurpg14GyiwstZgGvZQ1J0jZlSjkvcLnby0OwHy5eTOCJdVIisQbIX7fT62Ym7p00KyLXHzYs");

// This is all to set up an API

/// App config
const app = express();

/// Middlewares


app.use(cors({ origin: true }))
app.use(express.json()) //allows us to send data and pass in a json format

/// API routes
app.get('/', (request, response) => response.status(200).send('hello world')) //dummy route to see if things are working

app.post('/payments/create', async (request, response) => {
    const total = request.query.total; //used in URL on payments post method

    console.log('Payment request received! for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    })

    //Ok- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

/// Listen command
exports.api = functions.https.onRequest(app) //secure card functions

//example endpoint
//http://localhost:5001/clone-4c78a/us-central1/api