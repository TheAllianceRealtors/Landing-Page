import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  companyProfileDocument: File | null;
  certificateOfIncorporation: File | null;
  portfolioOrSampleProperties: File | null;
  briefOverviewOfPartnershipInterest: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

interface FormProps {
  close: Dispatch<SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ close }) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    companyProfileDocument: null,
    certificateOfIncorporation: null,
    portfolioOrSampleProperties: null,
    briefOverviewOfPartnershipInterest: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      if (files[0].size > MAX_FILE_SIZE) {
        toast.error(`File ${files[0].name} is too large. Maximum size is 5MB.`);
        e.target.value = "";
        return;
      }
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(null);

    try {
      const formDataObj = new FormData();
      // Append each form field to the FormData object
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataObj.append(key, value); // Append file if it’s a file
        } else if (value !== null) {
          formDataObj.append(key, value.toString()); // Append other fields as strings
        }
      });

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "We've received your message and will get back to you soon.",
          { duration: 2000 }
        );
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          companyProfileDocument: null,
          certificateOfIncorporation: null,
          portfolioOrSampleProperties: null,
          briefOverviewOfPartnershipInterest: "",
        });
      } else {
        setFormError(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setFormError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      close(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
      </div>
      <div>
        <Label htmlFor="contactPerson">Contact Person</Label>
        <Input
          id="contactPerson"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleInputChange}
          required
          aria-required="true"
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
          aria-required="true"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
      </div>
      <div>
        <Label htmlFor="companyProfileDocument">
          Company Profile Document (Max 5MB)
        </Label>
        <Input
          id="companyProfileDocument"
          name="companyProfileDocument"
          type="file"
          onChange={handleFileChange}
          //   accept=".pdf,.doc,.docx"
          aria-describedby="companyProfileDocument-help"
        />
      </div>
      <div>
        <Label htmlFor="certificateOfIncorporation">
          Certificate of Incorporation (Max 5MB)
        </Label>
        <Input
          id="certificateOfIncorporation"
          name="certificateOfIncorporation"
          type="file"
          onChange={handleFileChange}
          //   accept=".pdf,.jpg,.jpeg,.png"
          aria-describedby="certificateOfIncorporation-help"
        />
      </div>
      <div>
        <Label htmlFor="portfolioOrSampleProperties">
          Portfolio/Sample Properties (Max 5MB)
        </Label>
        <Input
          id="portfolioOrSampleProperties"
          name="portfolioOrSampleProperties"
          type="file"
          onChange={handleFileChange}
          //   accept=".pdf,.doc,.docx,.ppt,.pptx"
          aria-describedby="portfolioOrSampleProperties-help"
        />
      </div>
      <div>
        <Label htmlFor="briefOverviewOfPartnershipInterest">
          Brief Overview of Partnership Interest
        </Label>
        <Textarea
          id="briefOverviewOfPartnershipInterest"
          name="briefOverviewOfPartnershipInterest"
          value={formData.briefOverviewOfPartnershipInterest}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
      </div>
      {formError && (
        <p className="text-red-500 text-sm" role="alert">
          {formError}
        </p>
      )}
      <Button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white w-full"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default Form;
