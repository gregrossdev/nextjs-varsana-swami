import Image from "next/image";
import PhotoBook from "../components/home-photo-book";
import purchase from "../styles/page-purchase.module.css";

const Checkout = () => {
  return (
    <div className="page">
      <h2 className="pageTitle yellow">Checkout</h2>
      <figure className={purchase.figure}>
        <img
          src="https://s3.amazonaws.com/varsanaswami.org/static/img/sidebar-store/logo_MoonTower-300x220.png"
          width={300}
          height={220}
          layout="responsive"
          alt="moontower books"
        />
      </figure>
      <PhotoBook />
      <section className={purchase.section}>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          className={purchase.form}
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="K3Y7QM7RTBLCN" />
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

        <footer className={purchase.footer}>
          <p className={purchase.green}>The price includes shipping costs</p>
          <div>
            <p>For international orders or other inquiries, please contact</p>
            <p>madri801@gmail.com</p>
            <p>304-843-0122</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Checkout;
