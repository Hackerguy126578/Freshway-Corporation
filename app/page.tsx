import { motion } from "framer-motion";
import { ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Freshway PLC
        </motion.h1>
        <p className="text-lg max-w-2xl mb-8">
          Your trusted Roblox supermarket – bringing freshness and value to the community.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-blue-100">
          Visit Our Store
        </Button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Shop with Freshway?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl shadow bg-blue-50">
            <Store className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Community-Focused</h3>
            <p>
              We’re more than a supermarket – we’re part of the Roblox community,
              offering a fun and immersive shopping experience.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-blue-50">
            <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Affordable & Fresh</h3>
            <p>
              From fresh produce to household essentials, Freshway delivers quality at great prices.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Freshway PLC. All rights reserved.</p>
      </footer>
    </main>
  );
}

