# Ecoyaan Checkout Flow Assignment

This project is a simplified checkout flow built as part of the **Frontend Engineering Assignment for Ecoyaan**.
The application demonstrates **Next.js Server-Side Rendering (SSR), form validation, state management, and responsive UI design**.

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **React Hook Form**
- **Zod**
- **Context API**

---

## Features

### Cart / Order Summary
- Cart data fetched using **Server-Side Rendering**
- Displays product image, name, price, and quantity
- Calculates subtotal, shipping fee, discount, and total price

### Shipping Address
- Address form with validation using **React Hook Form + Zod**
- Fields include:
  - Full Name
  - Email
  - Phone Number
  - PIN Code
  - City
  - State

### Checkout & Payment
- Displays order summary and shipping address
- Allows user to select a payment method
- Simulated payment processing
- Order confirmation dialog after payment

### UI / UX
- Responsive layout
- Clean component-based architecture
- Simple Navbar and Footer
- Modal dialog for order confirmation

---

## Project Structure

```text
src
├── app
│   ├── api
│   ├── cart
│   ├── checkout
│   ├── shipping
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── ui
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── OrderSummary.tsx
│   ├── ShippingForm.tsx
│   ├── CheckoutButton.tsx
│   └── OrderDetailsDialog.tsx
│
├── context
│   └── checkout-context.tsx
│
├── schema
│   └── addressSchema.ts
│
├── types
│   ├── cart.ts
│   └── address.ts
```

---

## Getting Started

First, make sure to install all dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
