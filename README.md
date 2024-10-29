# Ecommerce App "Ecommerce"

Ecommerce is a basic template for an ecommerce storefront that uses [Stripe](https://stripe.com/) for payments. It features an admin dashboard where authorized users can create, update, and delete products. It also features an easy-to-navigate storefront for users to browse, purchase, and download products.

Built with [Next.js](https://nextjs.org), Ecommerce utilizes [Next.js caching](https://nextjs.org/docs/app/building-your-application/caching) to minimize server requests and significantly increase client responsiveness. User and Product data is stored locally in an [Sqlite](https://www.sqlite.org/) database using [Prisma](https://www.prisma.io/). For styling and UI components, Ecommerce uses [Tailwind](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/). For fast node package management, Puzzle List uses [pnpm](https://pnpm.io/).

## Todo

-   [x] Setup environment
-   [x] Setup initial database and schema
-   [x] Finish Prisma setup
-   [x] Add Admin Dashboard
-   [x] Add Admin Products
-   [x] Add Admin Authentication
-   [x] Add Basic Caching of data
-   [x] Add Customer Home, Products pages
-   [x] Add Customer Purchase page
-   [x] Add Stripe, Stripe Webhooks
-   [x] Add Admin Customers Page
-   [x] Add Admin Sales Page
-   [x] Add Customer Order History page

## Scripts

```bash
pnpm dev
# launch development server with live reloading, updates, and debugging.

pnpm build
# bundle project and create deployable app

pnpm prisma studio
# view local database in web browser

pnpm prisma db push
# push changes to schema from prisma to database

pnpm prisma generate
# regenerates prisma client (use after schema changes)

pnpm prisma db seed
# create default puzzle data

stripe listen --forward-to localhost:3000/webhooks/stripe
# stripe listen to local webhooks e.g., stripe trigger payment_intent.succeeded
```

## Dev Notes

stripe dashboard: cb

http://localhost:3000/admin
login: admin, password
