# Stripe Integration TODO

Hosted Stripe Checkout is wired for the Shop (Scenario B — new Checkout Session endpoint). Use this file as the single source of truth for remaining setup.

## Values to Replace

The following values are placeholders and must be updated before going live.

**Files containing placeholders:**
- [server/checkout.js](server/checkout.js)
- [.env.example](.env.example)

| Field | Current Value | What to Set |
|-------|--------------|-------------|
| mode | payment | Keep `"payment"` for one-time print pre-orders, or change to `"subscription"` if you switch to recurring billing. |
| success_url | `${DOMAIN}/#/shop?checkout=success&session_id={CHECKOUT_SESSION_ID}` | Your real post-checkout success URL. Keep `{CHECKOUT_SESSION_ID}` if you want the session id on return. Update `DOMAIN` in `.env` for production (e.g. `https://cmckinney-59.github.io/chaz-mckinney`). |
| cancel_url | `${DOMAIN}/#/shop?checkout=cancel` | Your real cancel/return URL. Same `DOMAIN` note as above. |
| line_items[].price (Deseret) | `STRIPE_PRICE_PROCLAMATIONS_DESERET=price_...` | Real Stripe Price ID from [Dashboard → Prices](https://dashboard.stripe.com/prices). |
| line_items[].price (Aurebesh Canon) | `STRIPE_PRICE_PROCLAMATIONS_AUREBESH_CANON=price_...` | Real Stripe Price ID. |
| line_items[].price (Aurebesh Legends) | `STRIPE_PRICE_PROCLAMATIONS_AUREBESH_LEGENDS=price_...` | Real Stripe Price ID. |
| line_items[].price (Tagalog Baybayin) | `STRIPE_PRICE_PROCLAMATIONS_BAYBAYIN=price_...` | Real Stripe Price ID. |
| STRIPE_SECRET_KEY | `sk_test_...` | Your secret key from [API keys](https://dashboard.stripe.com/test/apikeys). Never expose this to the browser or commit it. |
| VITE_CHECKOUT_API_URL | `http://localhost:4242/api/create-checkout-session` | Local API URL for development. For production, point at your hosted checkout API. |

## Configured Parameters

These parameters were configured in Checkout Studio and are already set correctly.

**Files containing these parameters:**
- [server/checkout.js](server/checkout.js)

| Parameter | Value |
|-----------|-------|
| ui_mode | hosted_page (Stripe Node SDK ^23.1.0 ≥ 21.0.0) |
| billing_address_collection | auto |
| phone_number_collection | `{ enabled: false }` |
| automatic_tax | `{ enabled: false }` |
| allow_promotion_codes | false |
| submit_type | auto |
| integration_identifier | hosted_web_0002 |
| origin_context | web |

`payment_method_collection` is omitted because `mode` is `"payment"` (it only applies to `"subscription"`).

## Setup and next steps

### 1. Environment variables

```bash
cp .env.example .env
```

Fill in:

- `STRIPE_SECRET_KEY` — Dashboard → Developers → API keys (test mode first)
- `DOMAIN` — local: `http://localhost:5173/chaz-mckinney`; production site origin including the `/chaz-mckinney` base path
- Four `STRIPE_PRICE_*` values — create Products/Prices in Stripe for each print set
- `VITE_CHECKOUT_API_URL` — enable shop Pre-order buttons (Vite vars need the `VITE_` prefix)

Restart Vite after changing any `VITE_*` variable.

### 2. Dependencies

Already added: `stripe`, `express`, `dotenv`, `cors`, and `concurrently` (dev).

### 3. Project structure (new files)

| Path | Role |
|------|------|
| `server/checkout.js` | Creates Stripe Checkout Sessions |
| `.env.example` | Env template (copy to `.env`) |
| `STRIPE_INTEGRATION_TODO.md` | This checklist |

Shop UI updates: `src/data/shop.ts`, `src/pages/ShopPage/ShopPage.tsx`. Vite proxies `/api` → `localhost:4242` in development.

### 4. How the integration works

1. Customer clicks **Pre-order** on a shop product.
2. Browser `POST`s `{ productId }` to `VITE_CHECKOUT_API_URL`.
3. Server maps `productId` → Stripe Price ID, creates a Checkout Session with Checkout Studio settings, returns `{ url }`.
4. Browser redirects to Stripe-hosted Checkout (`ui_mode: hosted_page`).
5. After pay/cancel, Stripe sends the customer back to `success_url` / `cancel_url` on your site.

### 5. Local testing

```bash
# Terminal A + B, or:
npm run dev:all
```

Open `http://localhost:5173/chaz-mckinney/#/shop` with `.env` filled in.

Test cards (test mode): https://docs.stripe.com/testing

| Number | Result |
|--------|--------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Card declined |

Use any future expiry, any CVC, any postal code.

### 6. Production hosting (important)

This site deploys to **GitHub Pages** (static). The checkout server **cannot** run there.

You must host `server/checkout.js` somewhere that supports Node (Railway, Render, Fly.io, a VPS, Cloudflare Workers + Stripe SDK, etc.), set:

- Production `STRIPE_SECRET_KEY` / Price IDs / `DOMAIN`
- Production `VITE_CHECKOUT_API_URL` at **build time** to that public API URL
- CORS is already enabled on the Express app for cross-origin shop → API calls

Then rebuild and `npm run deploy`.

### 7. Next steps after keys/prices work

- [ ] Create the four Stripe Products/Prices (CAD, shipping if needed)
- [ ] Add a webhook endpoint (`checkout.session.completed`) for fulfillment / order tracking
- [ ] Switch from test keys to live keys when ready
- [ ] Optionally wire [the-baybayin-project](../the-baybayin-project) shop to the same API with its own `DOMAIN` / success URLs
- [ ] Confirm tax/shipping rules in the Stripe Dashboard if you enable `automatic_tax` later

### Resources

- https://support.stripe.com
- https://docs.stripe.com/mcp
- https://docs.stripe.com/checkout/quickstart
- https://docs.stripe.com/keys-best-practices
