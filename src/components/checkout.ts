import { loadStripe } from "@stripe/stripe-js";

async function checkout({ lineItems }: any) {
  let stripePromoise: any = null;

  const getStripe = () => {
    if (!stripePromoise) {
      const apikey = process.env.NEXT_PUBLIC_API_KEY as string;
      stripePromoise = loadStripe(
        "pk_test_51MZohJSJnzQnh78OhxWEHfmERYiTftdO5Y6QdkRkJflwxnlxnUGdcNIiU9mqRiNtH3cApmFz96YKprY3SEXvr4J700YM2GspHG"
      );
    }
    return stripePromoise;
  };

  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id=[CHECKOUT_SESSION_ID]`,
    cancelUrl: window.location.origin,
  });
}

export default checkout;
