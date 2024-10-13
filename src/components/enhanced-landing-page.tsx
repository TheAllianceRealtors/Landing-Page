"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Globe, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logo from "@/app/images/logo.png";
import longlogo from "@/app/images/long-logo.png";

export function LandingPageComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900 font-sans"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={longlogo}
                alt="The Alliance Africa Logo"
                width={200}
                height={50}
              />
            </motion.div>
            <motion.div
              className="hidden lg:flex space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                "About",
                "Services",
                "Why Choose Us",
                "Team",
                "FAQ",
                "Contact",
              ].map((item) => (
                <Button key={item} variant="ghost" asChild>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern building"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6">
            <motion.h1
              className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Welcome to The Alliance Africa
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Join Africa&apos;s fastest-growing real estate marketing group and
              transform the industry with us.
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-xl py-6 px-8"
              >
                <a href="#contact">
                  Join Us <ArrowRight className="ml-2 w-6 h-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-10 text-center"
              {...fadeInUp}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-xl mb-16 max-w-3xl mx-auto text-center text-gray-600"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              As Africa&apos;s fastest-growing real estate marketing group, we
              connect developers with genuine buyers and offer realtors
              unprecedented opportunities for wealth creation.
            </motion.p>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[
                  {
                    title: "Our Mission",
                    content:
                      "To provide cutting-edge sales and marketing solutions to reliable developers, enabling realtors to create wealth through access to genuine real estate products.",
                    image:
                      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Our Vision",
                    content:
                      "To become Africa's leading real estate marketing company by team size, sales volume, and impact.",
                    image:
                      "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Our Impact",
                    content:
                      "Empowering a network of realtors across the continent and fostering growth in Africa's booming real estate sector.",
                    image:
                      "https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_33.33%]"
                  >
                    <Card className="m-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-red-600">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="mr-2"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button variant="outline" size="icon" onClick={scrollNext}>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              {...fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                {
                  title: "Real Estate Sales & Marketing",
                  description:
                    "Tailored solutions to help developers achieve sales goals faster through digital and on-ground efforts.",
                  image:
                    "https://images.unsplash.com/photo-1616587894417-b93dfd1f700a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Training & Development",
                  description:
                    "Extensive programs equipping realtors with skills to thrive in the competitive African market.",
                  image:
                    "https://images.unsplash.com/photo-1573496358773-bdcdbd984982?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Access to Genuine Properties",
                  description:
                    "Partnerships with reputable developers ensure access to high-quality real estate products.",
                  image:
                    "https://images.unsplash.com/photo-1527665830090-864a163d49ab?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Global Market Reach",
                  description:
                    "Extending marketing efforts beyond local markets to reach global investors.",
                  image:
                    "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Wealth Creation Opportunities",
                  description:
                    "Rewarding commission structure and access to high-demand properties for sustainable careers.",
                  image:
                    "https://images.unsplash.com/photo-1678693362793-e2fffac536d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-600">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="why-choose-us" className="py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              {...fadeInUp}
            >
              Why Choose The Alliance Africa?
            </motion.h2>
            <motion.div
              className="grid sm:grid-cols-2 gap-8"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                {
                  title: "Expertise in Real Estate Marketing",
                  description:
                    "Unmatched insights and strategies for extraordinary sales results.",
                  image:
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Wealth Creation for Realtors",
                  description:
                    "Best training, resources, and market access for lasting success.",
                  image:
                    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Developer-Centric Solutions",
                  description:
                    "Connecting developers with genuine buyers locally and globally.",
                  image:
                    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Proven Track Record",
                  description:
                    "Rapid growth and success make us the go-to partner across Africa.",
                  image:
                    "https://images.unsplash.com/photo-1626695436755-3e288720849c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((reason, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={500}
                    height={300}
                    className="w-full"
                  />
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-600">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="team" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-10 text-center"
              {...fadeInUp}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-xl mb-16 max-w-3xl mx-auto text-center text-gray-600"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our team of professionals is committed to delivering exceptional
              results. From visionary leadership to experienced real estate
              experts, we&apos;re here to revolutionize real estate marketing
              across Africa.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                {
                  name: "John Doe",
                  role: "CEO",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Jane Smith",
                  role: "Head of Marketing",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Mike Johnson",
                  role: "Lead Developer",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Sarah Brown",
                  role: "Customer Relations",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {member.name}
                    </CardTitle>
                    <p className="text-gray-600">{member.role}</p>
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              {...fadeInUp}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question:
                      "How can I join The Alliance Africa as a realtor?",
                    answer:
                      "Simply reach out through our contact form or social media handles, and our team will guide you through the onboarding process. You can also visit theallianceafrica.com for more information.",
                  },
                  {
                    question: "What type of properties do you market?",
                    answer:
                      "We market a wide range of properties, including developed and undeveloped lands. We work exclusively with reputable developers, offering both local and international real estate opportunities across Africa.",
                  },
                  {
                    question: "How do I access your training programs?",
                    answer:
                      "Our comprehensive training programs are available to all realtors who join The Alliance Africa. Detailed information about our training curriculum and schedule is provided upon onboarding.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              {...fadeInUp}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                {
                  icon: <Mail className="w-8 h-8 text-red-600" />,
                  content: "theallianceafrica@gmail.com",
                  href: "mailto:theallianceafrica@gmail.com",
                },
                {
                  icon: <Phone className="w-8 h-8 text-red-600" />,
                  content: "08084087172, 08087853645",
                  href: "tel:08084087172",
                },
                {
                  icon: <Globe className="w-8 h-8 text-red-600" />,
                  content: "theallianceafrica.com",
                  href: "https://theallianceafrica.com",
                },
                {
                  icon: <Instagram className="w-8 h-8 text-red-600" />,
                  content: "@theallianceafrica",
                  href: "https://www.instagram.com/theallianceafrica",
                },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  asChild
                  className="h-auto py-6 text-left justify-start"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
                    {item.icon}
                    <span className="mt-2 text-lg group-hover:text-red-600 transition-colors">
                      {item.content}
                    </span>
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Image
            src={logo}
            alt="The Alliance Africa Logo"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <p className="text-lg">
            &copy; {new Date().getFullYear()} The Alliance Africa. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}