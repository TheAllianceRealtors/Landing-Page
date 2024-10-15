"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Globe, Instagram } from "lucide-react";
import Image from "next/image";
import { Parallax } from "react-parallax";
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
import michealBabatunde from "@/app/images/micheal-babatunde.jpeg";
import akindeleIshola from "@/app/images/akindele-ishola.jpeg";
import emmanuelMakinde from "@/app/images/emmanuel-makinde.jpeg";
import ogunsholaStephen from "@/app/images/ogunshola-stephen.jpeg";
import peterFadare from "@/app/images/peter-fadare.jpeg";
import ritaNwanga from "@/app/images/rita-nwanga.jpeg";
import timileyinOni from "@/app/images/timileyin-oni.jpeg";
import zainabOtubambo from "@/app/images/zainab-otubambo.jpeg";

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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
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
              src="https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8971.jpg?t=st=1728973002~exp=1728976602~hmac=8dceffae7dd31dfe419fa2fa72323aecc0cf4b1d00379e12616dae181a92ec23&w=2000"
              alt="Modern building"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
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
              Join Africa's fastest-growing real estate marketing group and
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

        <Parallax
          bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          strength={500}
          className="relative bg-cover"
        >
          <section id="about" className="py-24">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-10 text-center text-white"
                {...fadeInUp}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="text-xl mb-16 max-w-3xl mx-auto text-center text-white"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At The Alliance Realtors Group, we are a league of
                top-performing independent real estate marketers and
                entrepreneurs dedicated to transforming the real estate industry
                in Africa.
              </motion.p>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {[
                    {
                      title: "Our Mission",
                      content:
                        "Providing local and global market access to genuine real estate opportunities.",
                      contentTwo:
                        "Building and empowering the largest community of independent real estate marketers and entrepreneurs, creating wealth and success stories that transcend boundaries.",
                      image:
                        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      title: "Our Vision",
                      content:
                        "To become a leading real estate marketing company of global repute.",
                      image:
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      title: "Our Impact",
                      content:
                        "Empowering a network of realtors across the continent and fostering growth in Africa's booming real estate sector.",
                      image:
                        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_33.33%]"
                    >
                      <Card className="m-4 bg-white/10 backdrop-blur-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-white">{item.content}</p>
                          {item.contentTwo && (
                            <p className="text-white mt-2">{item.contentTwo}</p>
                          )}
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
                  className="mr-2 bg-white/10 hover:bg-white/20 text-white"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </Parallax>

        <Parallax
          bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          strength={500}
          className="relative bg-cover"
        >
          <section id="services" className="py-24">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white"
                {...fadeInUp}
              >
                Service Highlights
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
                      "We provide comprehensive sales and marketing solutions that help real estate developers reach their target markets and close deals faster. From digital marketing strategies to on-ground sales efforts, we tailor our services to meet the specific needs of each project.",
                    image:
                      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Training & Development",
                    description:
                      "We offer extensive training programs for independent real estate marketers, empowering them with the skills and knowledge needed to succeed. Our training covers everything from sales techniques to understanding the local real estate market, ensuring our marketers are always ahead of the competition.",
                    image:
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Access to Genuine Properties",
                    description:
                      "We partner exclusively with reputable developers to provide our network of marketers and clients with access to genuine, high-quality real estate products. This ensures trust and transparency throughout the entire sales process.",
                    image:
                      "https://images.unsplash.com/photo-1527665830090-864a163d49ab?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Global Market Reach",
                    description:
                      "Our marketing strategies extend beyond local boundaries. By leveraging global platforms and networks, we ensure that African real estate products reach both local and international investors, maximizing exposure and sales potential.",
                    image:
                      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Wealth Creation Opportunities",
                    description:
                      "Our unique business model allows independent real estate marketers to build successful, sustainable careers by offering them access to high-demand properties and rewarding commission structures and performance benefits.",
                    image:
                      "https://images.unsplash.com/photo-1678693362793-e2fffac536d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>
        </Parallax>

        <Parallax
          bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          strength={500}
          className="relative bg-cover"
        >
          <section id="why-choose-us" className="py-24">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white"
                {...fadeInUp}
              >
                Why Partner with The Alliance Realtors Group?
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
                      "With a deep understanding of the real estate landscape in Nigeria, we provide our partners with the strategic insights and marketing power they need to achieve extraordinary results.",
                    image:
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Wealth Creation for Realtors",
                    description:
                      "Our network of independent marketers benefits from industry-leading training, resources, and market access, enabling them to generate wealth and create success stories in the real estate sector.",
                    image:
                      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "Developer-Centric Solutions",
                    description:
                      "We focus on driving sales for real estate developers by connecting them with genuine buyers, both locally and globally. Our sales systems are designed to maximize results.",
                    image:
                      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  {
                    title: "A Reputation for Growth",
                    description:
                      "As Africa's fastest-growing real estate marketing group, we bring momentum and energy to every partnership, fueling growth for both our team members and developers.",
                    image:
                      "https://images.unsplash.com/photo-1626695436755-3e288720849c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                ].map((reason, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-md overflow-hidden"
                  >
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      width={500}
                      height={300}
                      className="w-full"
                    />
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        {reason.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>
        </Parallax>

        <Parallax
          bgImage="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          strength={500}
          className="relative bg-cover"
        >
          <section id="team" className="py-24">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-10 text-center text-white"
                {...fadeInUp}
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                className="text-xl mb-16 max-w-3xl mx-auto text-center text-white"
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
                    name: "Micheal Babatunde",
                    role: "President",
                    image: michealBabatunde,
                  },
                  {
                    name: "Timileyin Oni",
                    role: "General Manager",
                    image: timileyinOni,
                  },
                  {
                    name: "Emmanuel Makinde",
                    role: "Head of Administrations",
                    image: emmanuelMakinde,
                  },
                  {
                    name: "Ogunsola Stephen",
                    role: "Head of Marketing",
                    image: ogunsholaStephen,
                  },
                  {
                    name: "Akindele Ishola",
                    role: "Sales Executive",
                    image: akindeleIshola,
                  },
                  {
                    name: "Rita Nwanga",
                    role: "Sales Executive",
                    image: ritaNwanga,
                  },
                  {
                    name: "Peter Fadare",
                    role: "Designer",
                    image: peterFadare,
                  },
                  {
                    name: "Zainab Otubambo",
                    role: "Frontdesk Officer",
                    image: zainabOtubambo,
                  },
                ].map((member, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-md overflow-hidden"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white">
                        {member.name}
                      </CardTitle>
                      <p className="text-white/80">{member.role}</p>
                    </CardHeader>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>
        </Parallax>

        <section id="call-to-action" className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-16 text-center"
              {...fadeInUp}
            >
              Join the Movement
            </motion.h2>
            <motion.div
              className="max-w-4xl mx-auto text-center"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-gray-300 mb-8">
                Whether you&apos;re a developer looking for unparalleled sales
                and marketing solutions, or an entrepreneur seeking financial
                freedom through real estate, The Alliance Realtors Group is the
                partner you need to succeed.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-500">
                      Real Estate Developers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Let us help you achieve massive sales growth by leveraging
                      our expertise and extensive marketing network.
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Partner with Us <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-red-500">
                      Realtors & Entrepreneurs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Join Africa&apos;s fastest-growing real estate marketing
                      group and unlock unlimited potential for wealth creation.
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Join Our Network <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <p className="text-xl text-gray-300 mt-8">
                Together, we&apos;re shaping the future of real estate.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-gray-800 text-white">
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
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-900 text-white">
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
                  content: "thealliancerealtorsgroup@gmail.com",
                  href: "mailto:thealliancerealtorsgroup@gmail.com",
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
                  content: "@thealliancerealtorsgroup",
                  href: "https://www.instagram.com/thealliancerealtorsgroup",
                },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  asChild
                  className="h-auto py-6 text-left justify-start bg-gray-800 hover:bg-gray-700"
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

      <footer className="bg-gray-900 text-white py-12">
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
