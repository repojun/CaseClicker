export default function createPayment({total, user}) {
  const description = "Bar a bot"
  const softDescription = "Bar bot";

  return {
    purchase_units: [
      {
        amount: {
          value: Number(total).toFixed(2),
          currency_code: "USD",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: Number(total).toFixed(2),
            },
          },
        },
        description: description,
        custom_id: user,
        soft_descriptor: softDescription,
        items: [
          {
            name: softDescription,
            unit_amount: {
              currency_code: "USD",
              value: Number(total).toFixed(2),
            },
            quantity: "1",
            category: "DIGITAL_GOODS",
          },
        ],
      },
    ],
    application_context: {
      brand_name: "Gambling",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
    },
  };
}