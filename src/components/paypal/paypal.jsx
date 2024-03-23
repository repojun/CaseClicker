import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import createPayment from "./createpayment";

export default function PayPal({total, userId, openModal, closeModal}) {
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

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{layout: "vertical"}}
        forceReRender={[total, userId]}
        createOrder={(_, actions) => {
          const p = createPayment({
            total: total,
            user: userId,
          });
          return actions.order.create(p);
        }}
        onApprove={(_, actions) => onApprove(actions)}
      />
    </PayPalScriptProvider>
  );
}