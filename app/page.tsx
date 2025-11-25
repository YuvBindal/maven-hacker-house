import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Card3D } from "@/components/ui/card-3d";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Calendar, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/singapore-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
            Turn ideas into reality.
            <br />
            Join Singapore&apos;s first hacker house.
          </h1>
          <p className="mb-8 text-xl text-white md:text-2xl drop-shadow-md">
            Maven Hacker House
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScJJtA9pEUUlmjTh99r4QjD2eelLtNHi7VVElr4ya3UFL3avw/viewform" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6">
              Apply
            </Button>
          </a>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative floating orbs */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

        <div className="mx-auto max-w-5xl relative z-10">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-black md:text-5xl">
            What to Expect
          </h2>
          <div className="space-y-12">
            <div className="group transform transition-all duration-300 hover:translate-x-2">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed hover:text-gray-900 transition-colors">
                use <span className="font-semibold text-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">demo day</span> to prove your skills to potential collaborators, employees, and investors
              </p>
            </div>

            <div className="group transform transition-all duration-300 hover:translate-x-2">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed hover:text-gray-900 transition-colors">
                stay <span className="font-semibold text-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">clear minded and accountable</span> with weekly syncs and coaching sessions.
              </p>
            </div>

            <div className="group transform transition-all duration-300 hover:translate-x-2">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed hover:text-gray-900 transition-colors">
                <span className="font-semibold text-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">connect</span> with someone who will 10x your trajectory through intros and fireside chats.
              </p>
            </div>

            <div className="group transform transition-all duration-300 hover:translate-x-2">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed hover:text-gray-900 transition-colors">
                most of all, expect <span className="font-semibold text-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">spontaneous adventures and late night conversations</span> with your fellow residents...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 md:py-24 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Community Card */}
            <div className="group">
              <Card3D
                gradientFrom="rgb(147, 51, 234)"
                gradientTo="rgb(236, 72, 153)"
                iconBgFrom="rgb(147, 51, 234)"
                iconBgTo="rgb(236, 72, 153)"
                icon={<Users className="h-7 w-7 text-white" />}
                title="Community"
                description="Join a vibrant community of builders"
                content="Connect with like-minded founders and developers who are passionate about building products. Collaborate, share ideas, and grow together in a supportive environment designed for makers."
              />
            </div>

            {/* Exclusive Events Card */}
            <div className="group">
              <Card3D
                gradientFrom="rgb(37, 99, 235)"
                gradientTo="rgb(6, 182, 212)"
                iconBgFrom="rgb(37, 99, 235)"
                iconBgTo="rgb(6, 182, 212)"
                icon={<Calendar className="h-7 w-7 text-white" />}
                title="Exclusive Events"
                description="Access to unique opportunities"
                content="Participate in pitch events, get introductions to potential customers for pilot programs, and attend regular fireside chats with successful founders and industry leaders."
              />
            </div>

            {/* Company Card */}
            <div className="group">
              <Card3D
                gradientFrom="rgb(234, 88, 12)"
                gradientTo="rgb(239, 68, 68)"
                iconBgFrom="rgb(234, 88, 12)"
                iconBgTo="rgb(239, 68, 68)"
                icon={<Rocket className="h-7 w-7 text-white" />}
                title="Build Your Company"
                description="From idea to customers"
                content="Build an idea from scratch and take it to the next level. Walk in with an idea and walk out with a company that has actual customers. Our goal is to help each other succeed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-black md:text-5xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Who can join?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Anybody can join, as long as they&apos;re serious about building
                a product. You have to be 18+.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Where is the Hacker House located?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Still confirming the details, but it&apos;s going to be
                somewhere near Jurong East to Clementi area, and we will try to
                keep it central near NUS and SMU so everything is near you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                When can I hear back?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Expect to hear back within a week or two of applying.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                How long is this program?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                It&apos;s six months long, starting from January till June.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold text-black">
                Maven Hacker House 
              </h3>
              <p className="text-gray-600">Contact us</p>
              <a
                href="mailto:yuv2bindal@theridgeemail.com"
                className="text-black underline hover:text-gray-700"
              >
                yuv2bindal@gmail.com
              </a>
            </div>
            <a href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
