import Image from "next/image";
import purchase from "../styles/page.module.css";
import bookImg from "../public/images/photo-book.jpg";
import moonImg from "../public/images/logo-moontower.png";

const Checkout = () => {
  return (
    <div className="page">
      <h2 className="page-title yellow">Checkout</h2>
      <div className="flex-col-section">
        <figure className={purchase.purchaseFigure}>
          <Image
            src={moonImg}
            width={300}
            height={220}
            layout="responsive"
            alt="moontower books"
          />
        </figure>
        <section className="photo-book-section">
          <a className="buy-btn self">
            <span>Buy</span>
            <span>Now</span>
          </a>

          <div className="self">
            <figure className="flex-col">
              <Image src={bookImg} alt="photo-book" className="" />
            </figure>
            <article>
              <h2>Photo Book</h2>
              <p>Appreciating New Vrindaban-dhama</p>
            </article>
          </div>
        </section>
        <section className={purchase.purchaseSection}>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            className={purchase.purchaseForm}
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="K3Y7QM7RTBLCN"
            />
            <input type="hidden" name="on0" value="Quantity" />
            Quantity:&nbsp;
            <select name="os0">
              <option value="1 Copy">1 Copy $20.00 USD</option>
              <option value="2 Copies">2 Copies $35.00 USD</option>
              <option value="3 Copies">3 Copies $50.00 USD</option>
            </select>
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
          </form>

          <footer className={purchase.purchaseFooter}>
            <p className={purchase.purchaseHighlight}>
              The price includes shipping costs
            </p>
            <div>
              <p>For international orders or other inquiries, please contact</p>
              <p>madri801@gmail.com</p>
              <p>304-843-0122</p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
