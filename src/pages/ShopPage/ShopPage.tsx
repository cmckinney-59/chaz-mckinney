import PageTitle from "../../components/PageTitle/PageTitle";
import {
  SHOP_CHECKOUT_URL,
  SHOP_PRODUCTS,
  shopInterestMailto,
} from "../../data/shop";
import "./ShopPage.css";

export default function ShopPage() {
  const checkoutReady = Boolean(SHOP_CHECKOUT_URL);

  return (
    <article className="shop-page">
      <header className="shop-header">
        <PageTitle title="Shop" />
        <p className="shop-lead">
          Proclamation prints from ScriptWorks — open for pre-order. Production
          starts after the pre-order window; you&apos;ll get a ship estimate
          before anything goes to print.
        </p>
      </header>

      <section className="shop-banner" aria-label="Pre-order status">
        <p className="shop-banner-eyebrow">Pre-orders</p>
        <p className="shop-banner-text">
          {checkoutReady
            ? "Checkout is live. Reserve a print below and I'll confirm details by email."
            : "Checkout link coming soon. Email me to get on the waitlist and I'll notify you when pre-orders open."}
        </p>
        {checkoutReady ? (
          <a
            className="shop-cta"
            href={SHOP_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open checkout
          </a>
        ) : (
          <a className="shop-cta" href={shopInterestMailto()}>
            Join the waitlist
          </a>
        )}
      </section>

      <ul className="shop-grid">
        {SHOP_PRODUCTS.map((product) => (
          <li key={product.id} className="shop-card">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="shop-card-image"
              loading="lazy"
            />
            <div className="shop-card-body">
              <p className="shop-card-status">Pre-order</p>
              <h2 className="shop-card-title">{product.name}</h2>
              <p className="shop-card-script">{product.script}</p>
              <p className="shop-card-description">{product.description}</p>
              {checkoutReady ? (
                <a
                  className="shop-card-action"
                  href={SHOP_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pre-order
                </a>
              ) : (
                <a
                  className="shop-card-action"
                  href={shopInterestMailto(product.name)}
                >
                  Request this print
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
