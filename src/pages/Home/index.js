// Components
import MenuHamburguer from '../../components/MenuHamburguer';

// Images
import headerImage from '../../Assets/hero-image-desktop.png';

// Styles
import { Container, Header } from './styles';

function Home() {
  return (
    <Container>
      <MenuHamburguer />

      <Header>
        <div className="container grid">
          <div id="texts">
            <h1>Share you unfiltered thoughts. Get paid.</h1>
            <p>Spense is an open platform for individuals to share their unfiltered thoughts.</p>
            <p>Discuss the topics you love, and gat paid for doing <i>just</i> that.</p>

            <ul>
              <li>Receive 99% off the earnings.</li>
              <li>Get paid via Debit Card, ACH, or PayPal.</li>
              <li>Withdraw your earnings anytime.</li>
            </ul>

            <div className="send-email">
              <input type="email" name="email" id="email" placeholder="john@example.com" />
              <button type="submit">Get Started</button>
            </div>
          </div>

          <div id="image">
            <img src={headerImage} alt="" />
          </div>
        </div>
      </Header>

    </Container>
  );
}

export default Home;
