"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./form";

export default function RealEstateCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
                <Form close={setIsModalOpen} />
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
    </>
  );
}
