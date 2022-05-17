import styles from "./styles.module.scss";
import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: Session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!Session) {
      signIn("github");
      return;
    }

    if (Session.activeSubscription) {
      router.push('/posts')
      return;
    }

    // criação da checkout session
    try {
        const response = await api.post('/subscribe')

        const { sessionId } = response.data

        const stripe = await getStripeJs()

        await stripe.redirectToCheckout({sessionId})
    }
    catch (err) {
        alert(err.message);
    }
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe Now
    </button>
  );
}
