import styles from "./page.module.css";
import { Amplify } from 'aws-amplify'
import outputs from '../../amplify_outputs.json';
import { Home } from "@corde/modules/home";

Amplify.configure(outputs)

export default function Index() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
