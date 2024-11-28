"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const SubscriptionForm = () => {
  const { data: session } = useSession();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card element not found.");
      setLoading(false);
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setError(error.message || "Payment method creation failed.");
        setLoading(false);
        return;
      }

      // Replace with your actual price IDs from Stripe Dashboard
      const priceId = "price_1QPlAsKtF9JswSRS4a8tBWPa";

      const response = await axios.post("/api/subscriptions", {
        paymentMethodId: paymentMethod.id,
        priceId,
      });

      if (response.data.subscription) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Subscription failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form  onSubmit={handleSubmit} className="max-w-md p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-blue-300 text-xl font-bold">Subscribe to Pro Plan</h2>
      <CardElement className="p-2 border rounded" />
      {error && <div className="mt-2 text-red-600">{error}</div>}
      {success && <div className="mt-2 text-green-600">Subscription successful!</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {loading ? "Processing..." : "Subscribe"}
      </button>
    </form>
  );
};

const Dashboard = () => {
  const { data: session } = useSession();
  const [userSubscription, setUserSubscription] = useState<any>(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      if (session?.user?.email) {
        const response = await axios.get("/api/subscriptions");
        setUserSubscription(response.data.subscription);
      }
    };
    fetchSubscription();
  }, [session]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Welcome, {session?.user?.name}</h1>
      {!userSubscription && (
        <Elements stripe={stripePromise}>
          <SubscriptionForm />
        </Elements>
      )}
      {userSubscription && (
        <div className="p-4 bg-green-100 text-green-800  rounded">
          <h2 className="text-xl font-semibold">Your Subscription</h2>
          <p>Plan: {userSubscription.stripePriceId}</p>
          <p>Status: {userSubscription.status}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
