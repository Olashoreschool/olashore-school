import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import { IconLoader } from "@tabler/icons-react";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { toast } from "sonner";

const ArrangeAVisit = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL + "visit";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || "Failed to submit form data");
      }

      const data = await res.json();
      console.log("Form submitted successfully:", data);
      toast.success(data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo title="Arrange a visit - Olashore International School" />
      <div>
        <Hero
          // backgroundImage={image}
          title="Arrange a Visit"
          description="Please complete the details below and we will contact you to arrange a suitable date for a visit to the school."
        />

        <Breadcrumbs links={[{ title: "Arrange a Visit", route: null }]} />

        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <p className="mb-8">
            Please complete the details below and we will contact you to arrange
            a suitable date for a visit to the school.
            <br />
            If you would like further details please call on{" "}
            <strong>Rufai</strong> on 0807 450 3992
          </p>
          <div
            className="card p-8 lg:w-[550px] mx-auto rounded-lg"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <form
              action=""
              onSubmit={handleSubmit}
              className=" text-black space-y-10"
            >
              <div className="flex flex-col gap-4">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="contact-number">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  id="contact-number"
                  className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  disabled={loading}
                  type="submit"
                  className={`px-6 flex items-center gap-2 bg-[var(--yellow-color)] p-3 rounded-lg ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-80"
                  }`}
                >
                  {loading && <IconLoader className="animate-spin" />}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArrangeAVisit;
