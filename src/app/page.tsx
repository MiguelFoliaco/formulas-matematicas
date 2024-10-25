import { Amplify } from 'aws-amplify'
import outputs from '../../amplify_outputs.json';
import { Home } from "@corde/modules/home";

Amplify.configure(outputs)

export default function Index() {
  return (
    <div >
      <Home />
    </div>
  );
}
