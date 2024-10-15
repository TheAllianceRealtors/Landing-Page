"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RealEstateCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
        setIsModalOpen(false);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <Card className="bg-white/10 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-red-500">
            Real Estate Developers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Let us help you achieve massive sales growth by leveraging our
            expertise and extensive marketing network.
          </p>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Partner with Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
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
            Join Africa&apos;s fastest-growing real estate marketing group and
            unlock unlimited potential for wealth creation.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <a
              href="https://app.thealliancerealtorsgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Join Our Network <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}