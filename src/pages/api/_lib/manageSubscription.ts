import { fauna } from "../../../services/fauna";
import { query as Q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionID: string,
  customerId: string,
  createAction = false
) {
  // Buscar o usuário no banco do faunadb com o ID customer.
  const userRef = await fauna.query(
    Q.Select(
      "ref",
      Q.Get(Q.Match(Q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  // salvar dados da subscription no faunaDB
  const subscription = await stripe.subscriptions.retrieve(subscriptionID)

  const subscriptionData = {
      id: subscription.id,
      userId: userRef,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id
  }

if(createAction) { await fauna.query(
      Q.Create(
          Q.Collection('subscriptions'),
          { data: subscriptionData }
      )
  )} else {
      await fauna.query(
          Q.Replace(
              Q.Select(
                  'ref',
                  Q.Get(
                      Q.Match(
                          Q.Index('subscription_by_id'),
                          subscriptionID,
                      )
                  )
              ),
              {data: subscriptionData}
          )
      )
  }
}
