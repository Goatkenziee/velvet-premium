"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Check, Star, Shield, Zap, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "$9.99",
    period: "/month",
    popular: false,
    features: ["Full HD streaming", "No ads", "Mobile access", "1 device"],
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    popular: true,
    features: ["4K Ultra HD", "No ads", "All devices", "VR content", "Download offline", "Priority support"],
  },
  {
    name: "Lifetime",
    price: "$199",
    period: " one-time",
    popular: false,
    features: ["Everything in Premium", "Lifetime access", "Exclusive content", "Early access", "VIP badge", "Gift cards"],
  },
];

export function PremiumCTA() {
  return (
    <section id="premium" className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <Badge variant="premium" className="text-xs tracking-widest uppercase px-3 py-1">
            <Crown className="h-3 w-3 mr-1" /> Go Premium
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Unlock the Full{" "}
            <span className="gradient-text">Velvet</span> Experience
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that fits your desires. Cancel anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? "border-primary/50 ring-1 ring-primary/20 bg-gradient-to-b from-primary/5 to-transparent"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="premium" className="text-[10px] px-3 py-1">
                    <Star className="h-3 w-3 mr-1 fill-current" /> Most Popular
                  </Badge>
                </div>
              )}

              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-0.5">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={`w-full mt-8 gap-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 glow"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.name === "Lifetime" ? "Get Lifetime" : "Subscribe Now"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> Secure Payment</span>
          <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> Instant Access</span>
          <span className="flex items-center gap-1.5"><Crown className="h-3.5 w-3.5" /> Cancel Anytime</span>
        </div>
      </div>
    </section>
  );
}
