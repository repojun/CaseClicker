import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import createPayment from "./createpayment";

export default function PayPal({ total, userId, openModal, closeModal }) {
  const onApprove = (actions) => {
    return actions.order
      .capture()
      .then(() => {
        openModal();
      })
      .catch(() => {
        openModal();
      });
  };
  console.log("CLIENT_ID IS HERE: " + process.env.REACT_APP_PAYPAL_CLIENT_ID);

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AfYO-NUinS8gZluLLm0YTGcP9CzOqxp2lgoIRcuFl81cLGqK1rNYi5uATNaxYUVu9RACsJHcDmqlM119",
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        forceReRender={[total, userId]}
        createOrder={(_, actions) => {
          const p = createPayment({
            total: total,
            user: userId,
          });
          console.log("P IS HERE: " + p);
          return actions.order.create(p);
        }}
        onApprove={(_, actions) => onApprove(actions)}
      />
    </PayPalScriptProvider>
  );
}
