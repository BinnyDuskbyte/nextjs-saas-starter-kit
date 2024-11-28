import Stripe from 'stripe';

let stripe: Stripe | null = null;

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables.');
}


stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15', // Use the latest API version or as per your requirements
});

export default stripe;