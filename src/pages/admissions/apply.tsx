import Breadcrumbs from "@/components/Breadcrumbs";
import { IconLoader } from "@tabler/icons-react";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { toast } from "sonner";

const Apply = () => {
  const [formData, setFormData] = useState({
    desiredClass: "",
    surname: "",
    firstName: "",
    otherName: "",
    dateOfBirth: "",
    gender: "",
    presentClass: "",
    hasSiblingInOIS: "",
    fatherName: "",
    fatherPhoneNumber: "",
    fatherEmail: "",
    motherName: "",
    motherPhoneNumber: "",
    motherEmail: "",
    parentsAddress: "",
    currentSchoolName: "",
    currentSchoolAddress: "",
    preferredExamLocation: "",
    OtherPreferredExamLocation: "",
    howDidYouKnowAboutOIS: "",
    otherReferralSource: "",
    passportPhotograph: null,
    childBirthCertificate: null,
    recentSchoolResult: null,
    evidenceOfPayment: null,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e: any) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted with data:", formData);

    try {
      const formDataToSend = { ...formData };

      if (!formData.recentSchoolResult) {
        return toast.error("pleas upload your child's recent school result");
      }

      if (!formData.passportPhotograph) {
        return toast.error("pleas upload your child's passport photograph");
      }

      const filesToUpload = [
        formData.passportPhotograph,
        formData.childBirthCertificate,
        formData.recentSchoolResult,
        formData.evidenceOfPayment,
      ];

      const uploadFilePromises = filesToUpload.map(async (file) => {
        if (file) {
          const fileData = new FormData();
          fileData.append("file", file);

          const uploadResponse = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/upload",
            {
              method: "POST",
              body: fileData,
            }
          );

          if (!uploadResponse.ok) {
            throw new Error("Failed to upload file");
          }

          const uploadResult = await uploadResponse.json();
          return uploadResult.file_url;
        }
        return null;
      });

      const uploadedFileURLs = await Promise.all(uploadFilePromises);

      formDataToSend.passportPhotograph = uploadedFileURLs[0];
      formDataToSend.childBirthCertificate = uploadedFileURLs[1];
      formDataToSend.recentSchoolResult = uploadedFileURLs[2];
      formDataToSend.evidenceOfPayment = uploadedFileURLs[3];

      if (formData.preferredExamLocation === "others") {
        formDataToSend.preferredExamLocation =
          formData.OtherPreferredExamLocation;
      }

      if (formData.howDidYouKnowAboutOIS === "others") {
        formDataToSend.howDidYouKnowAboutOIS = formData.otherReferralSource;
      }

      console.log(formDataToSend);

      const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL + "admission/apply";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || "Failed to submit form data");
      }

      const data = await res.json();
      console.log("Form submitted successfully:", data);
      toast.success(data.message);
      setFormData({
        desiredClass: "",
        surname: "",
        firstName: "",
        otherName: "",
        dateOfBirth: "",
        gender: "",
        presentClass: "",
        hasSiblingInOIS: "",
        fatherName: "",
        fatherPhoneNumber: "",
        fatherEmail: "",
        motherName: "",
        motherPhoneNumber: "",
        motherEmail: "",
        parentsAddress: "",
        currentSchoolName: "",
        currentSchoolAddress: "",
        preferredExamLocation: "",
        OtherPreferredExamLocation: "",
        howDidYouKnowAboutOIS: "",
        otherReferralSource: "",
        passportPhotograph: null,
        childBirthCertificate: null,
        recentSchoolResult: null,
        evidenceOfPayment: null,
      });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo title="Apply - Olashore International School" />
      <div>
        {/* Your Hero and Breadcrumbs components here */}
        <Breadcrumbs
          links={[
            { title: "Admission", route: "/admissions" },
            { title: "Admission Process", route: "/admissions/process" },
            { title: "Apply for Admission", route: null },
          ]}
        />
        <section className="   container mx-auto p-4 xl:px-16 mb-4 lg:mb-8">
          <h1 className="text-center text-2xl font-bold mb-12">
            APPLICATION FORM
          </h1>

          <p className="mb-10">
            Please complete the details below and we will contact you to arrange
            a suitable date for a visit to the school. <br />
            If you would like further details please call <strong>
              Rufai
            </strong>{" "}
            on 0803 446 6779
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-10">
              <aside className="space-y-10">
                <div className="flex flex-col gap-4">
                  <label htmlFor="desired-class">
                    Desired class of entry{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="desiredClass"
                    id="desired-class"
                    value={formData.desiredClass}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  >
                    <option value="">Please select</option>
                    <option value="year-7">Year 7 (JSS 1)</option>
                    <option value="year-8">Year 8 (JSS 2)</option>
                    <option value="year-8">Year 9 (JSS 3)</option>
                    <option value="year-8">Year 10 (SS 1)</option>
                    <option value="year-8">Year 11 (SS 2)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="child-surname">
                    Child&apos;s Surname <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="first-name">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="other-name">
                    Other Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="otherName"
                    id="other-name"
                    value={formData.otherName}
                    onChange={handleInputChange}
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="child-dob">
                    Child&apos;s date of birth{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="child-dob"
                    placeholder="dd/mm/yyyy"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="present-class">
                    Present Class <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="presentClass"
                    id="present-class"
                    value={formData.presentClass}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="father-name">
                    Father&apos;s Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    id="father-name"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="father-phoneNumber">
                    Father&apos;s Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherPhoneNumber"
                    id="father-phoneNumber"
                    value={formData.fatherPhoneNumber}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="father-email">
                    Father&apos;s Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="fatherEmail"
                    id="father-email"
                    value={formData.fatherEmail}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="mother-name">
                    Mother&apos;s Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    id="mother-name"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label>
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleInputChange}
                        required
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleInputChange}
                        required
                      />
                      <span>Female</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label>
                    Sibling(s) in OIS <span className="text-red-500">*</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="hasSiblingInOIS"
                      value="Yes"
                      checked={formData.hasSiblingInOIS === "Yes"}
                      onChange={handleInputChange}
                      required
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="hasSiblingInOIS"
                      value="No"
                      checked={formData.hasSiblingInOIS === "No"}
                      onChange={handleInputChange}
                      required
                    />
                    <span>No</span>
                  </label>
                </div>
              </aside>

              <aside className="space-y-10">
                <div className="flex flex-col gap-4">
                  <label htmlFor="mother-phoneNumber">
                    Mother&apos;s Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motherPhoneNumber"
                    id="mother-phoneNumber"
                    value={formData.motherPhoneNumber}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="mother-email">
                    Mother&apos;s Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="motherEmail"
                    id="mother-email"
                    value={formData.motherEmail}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="parents-address">
                    Parents&apos;s Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentsAddress"
                    id="parents-address"
                    value={formData.parentsAddress}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="current-school-name">
                    Current School Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="currentSchoolName"
                    id="current-school-name"
                    value={formData.currentSchoolName}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="current-school-address">
                    Current School Address
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="currentSchoolAddress"
                    id="current-school-address"
                    value={formData.currentSchoolAddress}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="desired-class">
                    Preferred Entrance Examination Location{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="preferredExamLocation"
                    id="preferred-exam-location"
                    value={formData.preferredExamLocation}
                    onChange={handleInputChange}
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  >
                    <option value="">Please select</option>
                    <option value="iloko">Iloko</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="lagos">Lagos</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="warri">Year 11 (SS 2)</option>
                    <option value="abuja">Abuja</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="current-school-address">
                    If others was ticked, Please specify
                  </label>
                  <input
                    type="text"
                    name="OtherPreferredExamLocation"
                    id="preferred-exam-location"
                    value={formData.OtherPreferredExamLocation}
                    onChange={handleInputChange}
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="referral-source">
                    How did you get to know about Olashore International School
                    ? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="howDidYouKnowAboutOIS"
                    id="referral-source"
                    value={formData.howDidYouKnowAboutOIS}
                    onChange={handleInputChange}
                    required
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  >
                    <option value="" disabled>
                      Please select
                    </option>
                    <option value="referral">Referral</option>
                    <option value="newspaper">Newspaper</option>
                    <option value="social media, please specify">
                      Social media, please specify
                    </option>
                    <option value="attended OIS events">
                      attended OIS events
                    </option>
                    <option value="flyer">Flyer</option>
                    <option value="radio station, what radio station?">
                      Radio station, what radio station?
                    </option>
                    <option value="banner">Banner</option>
                    <option value="primary school">Primary school</option>
                    <option value="friends or relative">
                      Friends or relative
                    </option>
                    <option value="website">Website</option>
                    <option value="others">Others, please specify</option>
                  </select>
                </div>

                {/* <div className="flex flex-col gap-4">
                  <label htmlFor="other-referral-source">
                    Please insert response to the above Section
                  </label>
                  <textarea
                    name="otherReferralSource"
                    id="other-referral-source"
                    value={formData.otherReferralSource}
                    onChange={handleInputChange}
                    rows={10}
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px] resize-none"
                  />
                </div> */}

                <div className="flex flex-col gap-4">
                  <label htmlFor="other-referral-source">
                    If others was ticked, Please specify
                  </label>
                  <input
                    name="otherReferralSource"
                    id="other-referral-source"
                    value={formData.otherReferralSource}
                    onChange={handleInputChange}
                    className="bg-[#EFF1F6] outline-none border-none text-black p-3 rounded-md text-sm tracking-[1.5px]"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="passport-photograph"
                      className="font-semibold"
                    >
                      Passport Photograph{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <input
                        type="file"
                        name="passportPhotograph"
                        id="passport-photograph"
                        accept="image/jpeg, image/png"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                      <label
                        htmlFor="passport-photograph"
                        className="cursor-pointer text-[#241A1E] hover:text- focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        <span className="text-base leading-normal">
                          Select a file
                        </span>
                        <span className="block text-xs mt-2">
                          PNG, JPG, GIF up to 10MB
                        </span>
                      </label>
                    </div>

                    {formData.passportPhotograph && (
                      <p className="mt-2 text-sm text-red-500 truncate">
                        {(formData.passportPhotograph as File).name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="child-birth-certificate"
                      className="font-semibold"
                    >
                      Child Birth Certificate
                    </label>
                    <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <input
                        type="file"
                        name="childBirthCertificate"
                        id="child-birth-certificate"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                      <label
                        htmlFor="child-birth-certificate"
                        className="flex flex-col items-center cursor-pointer text-[#241A1E] hover:text- focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        <span className="text-base leading-normal">
                          Select a file
                        </span>
                        <span className="block text-xs mt-2">
                          PNG, JPG, GIF up to 10MB
                        </span>
                      </label>
                    </div>

                    {formData.childBirthCertificate && (
                      <p className="mt-2 text-sm text-red-500 truncate">
                        {(formData.childBirthCertificate as File).name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="child-birth-certificate"
                      className="font-semibold"
                    >
                      Recent School Result{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <input
                        type="file"
                        name="recentSchoolResult"
                        id="recent-school-result"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                      <label
                        htmlFor="recent-school-result"
                        className="flex flex-col items-center cursor-pointer text-[#241A1E] hover:text- focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        <span className="text-base leading-normal">
                          Select a file
                        </span>
                        <span className="block text-xs mt-2">
                          PNG, JPG, GIF up to 10MB
                        </span>
                      </label>
                    </div>

                    {formData.recentSchoolResult && (
                      <p className="mt-2 text-sm text-red-500 truncate">
                        {(formData.recentSchoolResult as File).name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="evidence-of-payment"
                      className="font-semibold"
                    >
                      Evidence of Payment
                    </label>
                    <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <input
                        type="file"
                        name="evidenceOfPayment"
                        id="evidence-of-payment"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                      <label
                        htmlFor="evidence-of-payment"
                        className="flex flex-col items-center cursor-pointer text-[#241A1E] hover:text- focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        <span className="text-base leading-normal">
                          Select a file
                        </span>
                        <span className="block text-xs mt-2">
                          PNG, JPG, GIF up to 10MB
                        </span>
                      </label>
                    </div>

                    {formData.evidenceOfPayment && (
                      <p className="mt-2 text-sm text-red-500 truncate">
                        {(formData.evidenceOfPayment as File).name}
                      </p>
                    )}
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                disabled={loading}
                type="submit"
                className={`px-6 flex items-center gap-2 bg-[var(--yellow-color)] p-3 rounded-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
                }`}
              >
                {loading && <IconLoader className="animate-spin" />}
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Apply;
