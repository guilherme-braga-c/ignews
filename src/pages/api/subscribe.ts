import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import { query as reqFauna } from "faunadb";
import { stripe } from "../../services/stripe";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_customer_id: string;
  };
};

type Session = {
  user: {
    email: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST" || "GET") {
    const session = await getSession({ req }) as Session;

    const user = await fauna.query<User>(
      reqFauna.Get(
        reqFauna.Match(
          reqFauna.Index("user_by_email"),
          reqFauna.Casefold(session.user.email)
        )
      )
    );

    let customerId = user.data.stripe_customer_id;

    if (!customerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
      });

      await fauna.query(
        reqFauna.Update(
          reqFauna.Ref(reqFauna.Collection("users"), user.ref.id),
          {
            data: { stripe_customer_id: stripeCustomer.id },
          }
        )
      );

      customerId = stripeCustomer.id 
    }

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [
        {
          price: "price_1KnXQEANb2mcr5s033F5dSWd",
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: "http://localhost:3000/posts",
      cancel_url: "http://localhost:3000/",
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
