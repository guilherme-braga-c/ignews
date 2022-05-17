import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button type="button"
      onClick={() => signOut()}
     className={styles.signInButton}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="white" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn("github")}
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in
    </button>
  );
}
