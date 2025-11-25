import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <Button size="lg" className="text-lg px-8 py-6">
            Apply
          </Button>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-black md:text-5xl">
            What to Expect
          </h2>
          <div className="space-y-12">
            <div className="group">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                use <span className="font-semibold text-black">demo day</span> to prove your skills to potential collaborators, employees, and investors
              </p>
            </div>

            <div className="group">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                stay <span className="font-semibold text-black">clear minded and accountable</span> with weekly syncs and coaching sessions.
              </p>
            </div>

            <div className="group">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                <span className="font-semibold text-black">connect</span> with someone who will 10x your trajectory through intros and fireside chats.
              </p>
            </div>

            <div className="group">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                most of all, expect <span className="font-semibold text-black">spontaneous adventures and late night conversations</span> with your fellow residents...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Community Card */}
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Community</CardTitle>
                <CardDescription className="text-base">
                  Join a vibrant community of builders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with like-minded founders and developers who are
                  passionate about building products. Collaborate, share ideas,
                  and grow together in a supportive environment designed for
                  makers.
                </p>
              </CardContent>
            </Card>

            {/* Exclusive Events Card */}
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Exclusive Events</CardTitle>
                <CardDescription className="text-base">
                  Access to unique opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participate in pitch events, get introductions to potential
                  customers for pilot programs, and attend regular fireside
                  chats with successful founders and industry leaders.
                </p>
              </CardContent>
            </Card>

            {/* Company Card */}
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-black">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Build Your Company</CardTitle>
                <CardDescription className="text-base">
                  From idea to customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build an idea from scratch and take it to the next level.
                  Walk in with an idea and walk out with a company that has
                  actual customers. Our goal is to help each other succeed.
                </p>
              </CardContent>
            </Card>
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
            <Button size="lg" className="text-lg px-8 py-6">
              Apply Now
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
