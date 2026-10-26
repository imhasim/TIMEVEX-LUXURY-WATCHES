"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/validators";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    toast.success("Inquiry received!", {
      description: "Our concierge will respond within 24 hours.",
    });
    reset();
  };

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block">
            Customer Support
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
            Speak with our <span className="italic gold-gradient-text">Watch Experts</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8A8A8F]">
            Whether you seek advice on selecting a watch, custom strap sizing, or order support, our dedicated team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Boutique */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#141416] border border-white/10 space-y-6">
              <h2 className="font-serif text-2xl text-[#F5F1E8]">Support Channels</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#8A8A8F] uppercase block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:concierge@timevex.com"
                      className="text-[#F5F1E8] hover:text-[#C9A66B] transition-colors font-medium"
                    >
                      concierge@timevex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#8A8A8F] uppercase block">
                      Support Hotline & WhatsApp
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-[#F5F1E8] hover:text-[#C9A66B] transition-colors font-medium font-mono"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#8A8A8F] uppercase block">
                      Flagship Boutique
                    </span>
                    <p className="text-[#F5F1E8]">
                      TimeVex Luxury Watches, 42 Indiranagar 100ft Road, Bengaluru, Karnataka 560038
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#8A8A8F] uppercase block">
                      Operating Hours
                    </span>
                    <p className="text-[#F5F1E8]">Monday to Saturday: 10:00 AM – 7:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#161619] to-[#121215] border border-[#C9A66B]/20 space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A66B]">
                Immediate Assistance
              </span>
              <h3 className="font-serif text-lg text-[#F5F1E8]">WhatsApp Instant Support</h3>
              <p className="text-xs text-[#8A8A8F]">
                Need high-resolution wrist wrist-shots or video unboxing of any watch? Message us directly on WhatsApp.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141416] border border-white/10 space-y-6 shadow-xl">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl text-[#F5F1E8]">Send Us a Message</h2>
                <p className="text-xs text-[#8A8A8F]">
                  Fill out the form below and a watch expert will reach out.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-white/[0.02] rounded-2xl border border-emerald-500/30 p-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F1E8]">Message Received</h3>
                  <p className="text-xs text-[#8A8A8F] max-w-sm mx-auto">
                    Thank you. We have received your message and will contact you via email or phone within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-wider text-[#C9A66B] hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-[#8A8A8F] uppercase">Your Name *</label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="e.g. Vikramaditya"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                      />
                      {errors.name && <p className="text-xs text-rose-400">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-[#8A8A8F] uppercase">Email Address *</label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="vikram@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                      />
                      {errors.email && <p className="text-xs text-rose-400">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">Subject *</label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="e.g. Question about watch details"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.subject && <p className="text-xs text-rose-400">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">Your Message *</label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      placeholder="Describe your question, order status, or specific watch requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.message && <p className="text-xs text-rose-400">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
