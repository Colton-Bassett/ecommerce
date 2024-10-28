# Ecommerce App "Ecommerce"

TBD

## Todo

-   [x] Setup environment
-   [x] Setup initial database and schema
-   [x] Finish Prisma setup
-   [x] Add Admin Dashboard
-   [x] Add Admin Products
-   [x] Add Admin Authentication
-   [x] Add Basic Caching of data
-   [x] Add Stripe

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
localhost admin login: admin, password
