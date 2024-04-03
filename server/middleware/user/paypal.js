const {default: axios} = require("axios")

async function handlePayPal(request, response) {
  try {
    const {body} = request;

    const IGNORED_EVENTS = [
      "PAYMENT.CAPTURE.PENDING",
      "RISK.DISPUTE.CREATED",
      "CUSTOMER.DISPUTE.CREATED",
      "CUSTOMER.DISPUTE.UPDATED",
    ];

    if (IGNORED_EVENTS.includes(body.event_type)) {
      return response.status(200).send();
    }

    if (
      body.event_type !== "PAYMENT.CAPTURE.COMPLETED" &&
      body.event_version !== "1.0" &&
      body.resource_type !== "capture" &&
      body.resource_version !== "2.0"
    ) {
      return response.status(200).send();
    }

    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");

    if (body.event_type === "PAYMENT.CAPTURE.COMPLETED") {
      const url = body.resource.links.find((link) => link.rel === "up").href;
      const paymentData = await axios({
        method: "GET",
        url: url,
        headers: {Authorization: `Basic ${auth}`, "Content-Type": "application/json"},
      })
        .then((res) => res.data)
        .catch((e) => e);

      if (paymentData instanceof Error) {
        return response.status(501).send();
      }

      // Payment Inforamtion
      const payment = paymentData.purchase_units[0];
      const paymentDescription = payment.description;
      const paymentTotal = Number(payment.amount.value);
      const paymentID = paymentData.id;

      // Payer information
      const payer = paymentData.payer;
      const payerName = payer.name;
      const payerEmail = payer.email_address;
      const payerID = payer.payer_id;
      const userID = payment.custom_id;
      // switch statement here, check paymentTotal, 10 etc, hit em with a heavy switch statement, let them know who did it.
      // do your update balance after that
      let balanceAdd = 0;
      
      // use the custom_id to check the user exists in the database and then use paymentTotal to give the user that many coins
    }
    response.status(200).send();
  } catch (error) {
    console.log("ERROR", error);
    response.status(500).send();
  }
}

module.exports = handlePayPal;