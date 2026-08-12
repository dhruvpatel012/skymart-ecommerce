# SkyMart Agent Rules

Read this file before coding. Read `docs/PRD.md` only when product-level details are needed.

## Mission

Build SkyMart as a maintainable learning-focused e-commerce frontend.

Stack:
- React
- JavaScript ES6+
- Tailwind CSS
- React Router
- localStorage
- Vercel deployment

No backend. No real payments.

## Non-negotiable rules

1. Match the supplied SkyMart screenshots and Stitch design.
2. Use Stitch as the visual source of truth.
3. Business logic stays in React; Stitch-generated HTML is not the app architecture.
4. Keep data separate from UI.
5. Use `AuthContext` for authentication/session state.
6. Use `CartContext` for cart state.
7. Centralize localStorage access in `utils/storage.js`.
8. Never mutate the original products array.
9. Keep product data in `data/products.js`.
10. Use URL search params for shareable Shop filters, especially `category`.
11. Reuse components; do not duplicate product-card/cart logic.
12. Avoid Redux and unnecessary libraries.
13. Do not create abstractions before they are needed.
14. Handle empty, invalid, and error states.
15. Do not rewrite unrelated files.
16. Keep responsive behavior.
17. Keep accessibility in mind.
18. After each feature, run/build/check the affected flow.
19. Prefer small, focused changes.
20. Explain non-obvious logic briefly so the code remains learnable.

## State ownership

Auth:
- current user
- login/register/logout
- profile update

Cart:
- items
- add/remove
- quantity changes
- clear
- total/count

Local component state:
- search input
- drawer open/closed
- dropdowns
- password visibility
- toast UI

## Storage keys

```text
skymart_users
skymart_current_user
skymart_cart
skymart_orders
```

## Product/category behavior

Home category click must navigate to:

`/shop?category=<normalized-category>`

Shop reads the URL and initializes the category filter.

Categories:
`electronics`, `clothing`, `furniture`, `home`, `sports`, `accessories`

Sort:
`featured`, `price-asc`, `price-desc`, `rating`, `newest`

## Coding style

Prefer readable code over clever code.

Good:
```js
const filteredProducts = products.filter(...)
```

Avoid unnecessary:
- custom state libraries
- deep abstraction
- generic components with 20 props
- premature optimization
- duplicated localStorage calls
- duplicated business rules

Use `useMemo` only for useful derived values.

## AI workflow

For every task:

1. Read this file.
2. Inspect only relevant files.
3. State the plan briefly.
4. Implement the smallest complete change.
5. Reuse existing code.
6. Verify the affected flow.
7. Summarize changed files and behavior.

Never:
- rebuild the whole project for a small feature
- paste the entire PRD into context
- inspect every file when two files are enough
- change design tokens without a visual reason
