import Layout from '../components/Layout.server';


import CartClient from '../components/PageCart.client';

export default function PageCart() {
  return (
    <Layout>
      <div>
        <CartClient />
      </div>
    </Layout>
  )
}