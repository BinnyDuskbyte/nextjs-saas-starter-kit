import Stripe from 'stripe';

let stripe: Stripe | null = null;

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables.');
}


stripe = new Stripe("sk_test_51MvdOmKtF9JswSRSvzsNdRtbT9Q3LrPnIlE2KKraXl7UVALVVdUqy8u6wFtlSFiFIGAI2XHwM6FsMM3vV8rjZBa900TX0oV1eI" as string, {
    apiVersion: '2022-11-15', // Use the latest API version or as per your requirements
});

export default stripe;