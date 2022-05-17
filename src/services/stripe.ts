import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51KnUZoANb2mcr5s0UoSOZLKeG16dc182rZtO0uLntIvP4LyBt5L1ogM3R1XHrJNxVRNW9u6knZJfkmhNcomCInWJ00icbVGVgo",
  {
    apiVersion: "2020-08-27",
    appInfo: {
      name: "ignews",
      version: "0.0.1",
    },
  }
);
