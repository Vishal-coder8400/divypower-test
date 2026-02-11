import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CareerForm() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [workExperienceDesc, setWorkExperienceDesc] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [totalWorkExperience, setTotalWorkExperience] = useState("");
  const [currentCTC, setCurrentCTC] = useState("");
  const [expectedCTC, setExpectedCTC] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [position, setPosition] = useState("");
  const [CV, setCv] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileRef = useRef();

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (!CV) {
      toast.error("Please upload your CV");
      setLoading(false);
      return;
    }

    if (!name || !contactNumber || !email || !workExperienceDesc || !position) {
      toast.error("Please fill all required fields");
      setLoading(false);
      return;
    }

    // Check file size (max 10MB)
    if (CV.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      setLoading(false);
      return;
    }

    try {
      // Convert file to base64
      toast.info("Processing file...");
      const base64File = await fileToBase64(CV);
      
      // Remove the data:mime;base64, prefix
      const base64Data = base64File.split(',')[1];
      
      console.log("File info:", {
        name: CV.name,
        type: CV.type,
        size: CV.size,
        base64Length: base64Data.length
      });

      // Create form data object (will be sent as JSON)
      const formData = {
        formType: "career",
        name: name,
        contactNumber: contactNumber,
        whatsappNumber: whatsappNumber,
        email: email,
        qualification: qualification,
        workExperienceDesc: workExperienceDesc,
        permanentAddress: permanentAddress,
        currentAddress: currentAddress,
        totalWorkExperience: totalWorkExperience,
        currentCTC: currentCTC,
        expectedCTC: expectedCTC,
        noticePeriod: noticePeriod,
        position: position,
        // File data as base64
        resumeData: base64Data,
        resumeName: CV.name,
        resumeType: CV.type
      };

      console.log("Submitting form data...");

      const res = await fetch(import.meta.env.VITE_CAREER_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const text = await res.text();
      console.log("Server response:", text);

      if (!text.includes("success")) {
        throw new Error("Script returned: " + text);
      }

      toast.success("Application submitted successfully! Resume uploaded to Drive.");

      // Reset all fields
      setName("");
      setContactNumber("");
      setWhatsappNumber("");
      setEmail("");
      setQualification("");
      setWorkExperienceDesc("");
      setPermanentAddress("");
      setCurrentAddress("");
      setTotalWorkExperience("");
      setCurrentCTC("");
      setExpectedCTC("");
      setNoticePeriod("");
      setPosition("");
      setCv(null);
      fileRef.current.value = "";
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Submission failed: " + err.message);
    }

    setLoading(false);
  };

  const handleClearForm = () => {
    setName("");
    setContactNumber("");
    setWhatsappNumber("");
    setEmail("");
    setQualification("");
    setWorkExperienceDesc("");
    setPermanentAddress("");
    setCurrentAddress("");
    setTotalWorkExperience("");
    setCurrentCTC("");
    setExpectedCTC("");
    setNoticePeriod("");
    setPosition("");
    setCv(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#090971]">
            Career <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Application Form</span>
          </h2>
          <p className="text-gray-600 text-sm">
            <span className="text-red-500">*</span> Indicates required question
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Your answer"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* WhatsApp Contact Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              WhatsApp Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Your answer"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Your answer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Brief Description about Work Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Brief Description about your Work Experience <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Your answer"
              value={workExperienceDesc}
              onChange={(e) => setWorkExperienceDesc(e.target.value)}
              required
              className="w-full border-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-3 rounded-lg transition-colors resize-none"
            />
          </div>

          {/* Permanent Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Permanent Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Current Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Current Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Total Work Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Total Work Experience <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={totalWorkExperience}
              onChange={(e) => setTotalWorkExperience(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Current CTC */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Current CTC ( Write NA in case of fresher ) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={currentCTC}
              onChange={(e) => setCurrentCTC(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Expected CTC */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Expected CTC <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={expectedCTC}
              onChange={(e) => setExpectedCTC(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Notice Period */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Notice Period ( Write NA in case of fresher ) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Position which you have applied for ( Write NA in case of fresher ) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your answer"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 px-1 transition-colors"
            />
          </div>

          {/* Upload CV */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload CV <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Upload 1 supported file. Max 10 MB.
            </p>
            <div className="flex items-center gap-3">
              <label
                htmlFor="cv-upload"
                className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add file
              </label>
              <input
                id="cv-upload"
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) => setCv(e.target.files[0])}
                className="hidden"
              />
              {CV && (
                <span className="text-sm text-gray-600">
                  {CV.name} ({(CV.size / 1024).toFixed(1)} KB)
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            
            <button
              type="button"
              onClick={handleClearForm}
              className="flex-1 sm:flex-initial bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Clear form
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default CareerForm;