import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  const stripeJs = await loadStripe(
    "pk_test_51KnUZoANb2mcr5s0ySxD5JOVtdOHbe06KnKpOqKdzyEgT6ReYVV2O05ViNvVwpIWD8PNOmwb8xDWyL8iec61URPz000x1ne2Mh"
  );

  return stripeJs;
}
