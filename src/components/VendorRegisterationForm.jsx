import React, { useState } from 'react';
import Footer from './Footer';

const VendorRegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    // Page 1 - Company Details
    companyName: '',
    contactPersonName: '',
    contactNumber: '',
    alternateContact: '',
    emailId: '',
    gstNumber: '',
    panCardNumber: '',
    businessProfile: null,
    
    // Page 2 - Bank Details
    bankName: '',
    beneficiaryName: '',
    accountNumber: '',
    ifscCode: '',
    cancelCheque: null,
    
    // Page 3 - Service Details
    productsDealing: '',
    itemSpecialized: '',
    serviceSpecialized: '',
    ratingCommercial: '',
    ratingQualityDelivery: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle file change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      if (file.size > maxSize) {
        setErrors(prev => ({ ...prev, [name]: 'File size must be less than 10MB' }));
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate current page
 // Validate current page
const validatePage = (page) => {
  const newErrors = {};

  if (page === 1) {
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactPersonName.trim()) newErrors.contactPersonName = 'Contact person name is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.alternateContact.trim()) newErrors.alternateContact = 'Alternate contact is required'; // ADD THIS LINE
    if (!formData.emailId.trim()) newErrors.emailId = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.emailId)) newErrors.emailId = 'Email is invalid';
    if (!formData.gstNumber.trim()) newErrors.gstNumber = 'GST number is required';
    if (!formData.panCardNumber.trim()) newErrors.panCardNumber = 'PAN card number is required';
    if (!formData.businessProfile) newErrors.businessProfile = 'Business profile is required';
  }

  if (page === 2) {
    if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
    if (!formData.beneficiaryName.trim()) newErrors.beneficiaryName = 'Beneficiary name is required';
    if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifscCode.trim()) newErrors.ifscCode = 'IFSC code is required';
    if (!formData.cancelCheque) newErrors.cancelCheque = 'Cancel cheque is required';
  }

  if (page === 3) {
    if (!formData.productsDealing.trim()) newErrors.productsDealing = 'This field is required';
    if (!formData.itemSpecialized.trim()) newErrors.itemSpecialized = 'This field is required';
    if (!formData.serviceSpecialized.trim()) newErrors.serviceSpecialized = 'This field is required';
    if (!formData.ratingCommercial) newErrors.ratingCommercial = 'Please provide a rating';
    if (!formData.ratingQualityDelivery) newErrors.ratingQualityDelivery = 'Please provide a rating';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  // Handle next page
  const handleNext = () => {
    if (validatePage(currentPage)) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle previous page
  const handleBack = () => {
    setCurrentPage(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePage(3)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data
      const submitData = new FormData();
      submitData.append('formType', 'vendor');
      
      // Add all text fields
      Object.keys(formData).forEach(key => {
        if (formData[key] && typeof formData[key] !== 'object') {
          submitData.append(key, formData[key]);
        }
      });

      // Handle file uploads
      if (formData.businessProfile) {
        const base64 = await fileToBase64(formData.businessProfile);
        submitData.append('businessProfileData', base64);
        submitData.append('businessProfileName', formData.businessProfile.name);
        submitData.append('businessProfileType', formData.businessProfile.type);
      }

      if (formData.cancelCheque) {
        const base64 = await fileToBase64(formData.cancelCheque);
        submitData.append('cancelChequeData', base64);
        submitData.append('cancelChequeName', formData.cancelCheque.name);
        submitData.append('cancelChequeType', formData.cancelCheque.type);
      }

      // Submit to Google Apps Script
      const SCRIPT_URL = import.meta.env.VITE_CAREER_SCRIPT_URL; // Replace with your actual URL
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: submitData
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            companyName: '',
            contactPersonName: '',
            contactNumber: '',
            alternateContact: '',
            emailId: '',
            gstNumber: '',
            panCardNumber: '',
            businessProfile: null,
            bankName: '',
            beneficiaryName: '',
            accountNumber: '',
            ifscCode: '',
            cancelCheque: null,
            productsDealing: '',
            itemSpecialized: '',
            serviceSpecialized: '',
            ratingCommercial: '',
            ratingQualityDelivery: ''
          });
          setCurrentPage(1);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus({ type: 'error', message: 'Submission failed. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render rating scale
  const renderRatingScale = (name, label) => (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-800">
        {label} <span className="text-red-600 ml-0.5">*</span>
      </label>
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-600 font-medium min-w-[50px]">Worst</span>
        <div className="flex gap-2 flex-1 overflow-x-auto pb-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <div key={num} className="flex flex-col items-center flex-shrink-0">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name={name}
                  value={num}
                  checked={formData[name] === String(num)}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <span className="block w-8 h-8 border-2 border-gray-300 rounded-full transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 peer-checked:shadow-lg peer-checked:shadow-purple-300 mb-1"></span>
                <span className="text-[10px] text-gray-600 block text-center">{num}</span>
              </label>
            </div>
          ))}
        </div>
        <span className="text-xs text-gray-600 font-medium min-w-[60px] text-right">Excellent</span>
      </div>
      {errors[name] && <span className="block text-red-600 text-xs mt-1">{errors[name]}</span>}
    </div>
  );

  return (
    <>
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Form Title */}
        <h1 className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-3xl font-semibold text-center py-8">
          Vendor Registration
        </h1>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center py-8 px-5 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-base transition-all ${
                currentPage >= 1 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="text-xs text-gray-600 font-medium mt-2">Company Details</span>
            </div>
            
            {/* Line 1 */}
            <div className={`w-20 h-0.5 mx-2.5 transition-all ${
              currentPage >= 2 
                ? 'bg-gradient-to-r from-purple-600 to-purple-800' 
                : 'bg-gray-200'
            }`}></div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-base transition-all ${
                currentPage >= 2 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="text-xs text-gray-600 font-medium mt-2">Bank Details</span>
            </div>
            
            {/* Line 2 */}
            <div className={`w-20 h-0.5 mx-2.5 transition-all ${
              currentPage >= 3 
                ? 'bg-gradient-to-r from-purple-600 to-purple-800' 
                : 'bg-gray-200'
            }`}></div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-base transition-all ${
                currentPage >= 3 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className="text-xs text-gray-600 font-medium mt-2">Service Details</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Page 1: Company Details */}
          {currentPage === 1 && (
            <div className="p-10">
              {/* Growth Image */}
              <div className="mb-8">
                <img 
                  src="https://raw.githubusercontent.com/yourusername/yourrepo/main/growth-image.jpg" 
                  alt="Growth" 
                  className="w-full h-40 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Company Name */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Company Name <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.companyName && <span className="block text-red-600 text-xs mt-1">{errors.companyName}</span>}
              </div>

              {/* Contact Person Name */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Contact Person Name <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.contactPersonName && <span className="block text-red-600 text-xs mt-1">{errors.contactPersonName}</span>}
              </div>

              {/* Contact Number */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Contact Number <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.contactNumber && <span className="block text-red-600 text-xs mt-1">{errors.contactNumber}</span>}
              </div>

              {/* Alternate Contact */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Alternate Contact <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="tel"
                  name="alternateContact"
                  value={formData.alternateContact}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.alternateContact && <span className="block text-red-600 text-xs mt-1">{errors.alternateContact}</span>}
              </div>

              {/* Email ID */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  E-mail id <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.emailId && <span className="block text-red-600 text-xs mt-1">{errors.emailId}</span>}
              </div>

              {/* GST Number */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  GST Number of your company <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.gstNumber && <span className="block text-red-600 text-xs mt-1">{errors.gstNumber}</span>}
              </div>

              {/* PAN Card Number */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Your Company's PAN Card Number <span className="text-red-600 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                  placeholder="Your answer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                />
                {errors.panCardNumber && <span className="block text-red-600 text-xs mt-1">{errors.panCardNumber}</span>}
              </div>

              {/* Business Profile Upload */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Submit your Business Profile <span className="text-red-600 ml-0.5">*</span>
                </label>
                <p className="text-xs text-gray-600 mb-2">Upload 1 supported file: PDF, document, or image. Max 10 MB.</p>
                <div className="flex items-center gap-3">
                  <button 
                    type="button" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-orange-500 text-sm font-medium hover:bg-gray-50 hover:border-purple-600 transition-all"
                    onClick={() => document.getElementById('businessProfile').click()}
                  >
                    <span className="text-base">📎</span> Add file
                  </button>
                  <input
                    type="file"
                    id="businessProfile"
                    name="businessProfile"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {formData.businessProfile && <span className="text-sm text-gray-700">{formData.businessProfile.name}</span>}
                </div>
                {errors.businessProfile && <span className="block text-red-600 text-xs mt-1">{errors.businessProfile}</span>}
              </div>
            </div>
          )}

          {/* Page 2: Bank Details */}
          {currentPage === 2 && (
            <div>
              {/* Section Header */}
              <div className=" text-black px-10 py-6">
                <h2 className="text-2xl font-semibold mb-2">Bank Details</h2>
                <p className="text-sm opacity-90">To get your bank register with our portal to make ease of payment.</p>
              </div>

              <div className="p-10">
                {/* Bank Name */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Name of Bank in which you have Account <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.bankName && <span className="block text-red-600 text-xs mt-1">{errors.bankName}</span>}
                </div>

                {/* Beneficiary Name */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Beneficiary name <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="beneficiaryName"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.beneficiaryName && <span className="block text-red-600 text-xs mt-1">{errors.beneficiaryName}</span>}
                </div>

                {/* Account Number */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Account Number <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.accountNumber && <span className="block text-red-600 text-xs mt-1">{errors.accountNumber}</span>}
                </div>

                {/* IFSC Code */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    IFSC Code <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.ifscCode && <span className="block text-red-600 text-xs mt-1">{errors.ifscCode}</span>}
                </div>

                {/* Cancel Cheque Upload */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Cancel Cheque copy <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <p className="text-xs text-gray-600 mb-2">Upload 1 supported file: PDF, document, or image. Max 10 MB.</p>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-purple-600 text-sm font-medium hover:bg-gray-50 hover:border-purple-600 transition-all"
                      onClick={() => document.getElementById('cancelCheque').click()}
                    >
                      <span className="text-base">📎</span> Add file
                    </button>
                    <input
                      type="file"
                      id="cancelCheque"
                      name="cancelCheque"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {formData.cancelCheque && <span className="text-sm text-gray-700">{formData.cancelCheque.name}</span>}
                  </div>
                  {errors.cancelCheque && <span className="block text-red-600 text-xs mt-1">{errors.cancelCheque}</span>}
                </div>
              </div>
            </div>
          )}

          {/* Page 3: Service Details */}
          {currentPage === 3 && (
            <div>
              {/* Section Header */}
              <div className=" text-black px-10 py-6">
                <h2 className="text-2xl font-semibold">Service Details</h2>
              </div>

              <div className="p-10">
                {/* Products Dealing */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    What are the products in which you deal with: <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="productsDealing"
                    value={formData.productsDealing}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.productsDealing && <span className="block text-red-600 text-xs mt-1">{errors.productsDealing}</span>}
                </div>

                {/* Item Specialized */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Item in which you are specialized to supply: <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="itemSpecialized"
                    value={formData.itemSpecialized}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.itemSpecialized && <span className="block text-red-600 text-xs mt-1">{errors.itemSpecialized}</span>}
                </div>

                {/* Service Specialized */}
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Service in which you are specialized: <span className="text-red-600 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="serviceSpecialized"
                    value={formData.serviceSpecialized}
                    onChange={handleChange}
                    placeholder="Your answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                  {errors.serviceSpecialized && <span className="block text-red-600 text-xs mt-1">{errors.serviceSpecialized}</span>}
                </div>

                {/* Rating Scales */}
                {renderRatingScale('ratingCommercial', 'How do you rate yourself: Commercially - Price wise')}
                {renderRatingScale('ratingQualityDelivery', 'How do you rate yourself: Timely Delivery and Excellent Quality')}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-3 px-10 pb-8">
            {currentPage > 1 && (
              <button 
                type="button" 
                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            
            {currentPage < 3 ? (
              <button 
                type="button" 
                className="flex-1 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-orange-500 hover:-translate-y-0.5 transition-all"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button 
                type="submit" 
                className="flex-1 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-orange-500 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
            
            <button 
              type="button" 
              className="px-8 py-3 bg-white border border-gray-300 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all"
              onClick={() => {
                setFormData({
                  companyName: '',
                  contactPersonName: '',
                  contactNumber: '',
                  alternateContact: '',
                  emailId: '',
                  gstNumber: '',
                  panCardNumber: '',
                  businessProfile: null,
                  bankName: '',
                  beneficiaryName: '',
                  accountNumber: '',
                  ifscCode: '',
                  cancelCheque: null,
                  productsDealing: '',
                  itemSpecialized: '',
                  serviceSpecialized: '',
                  ratingCommercial: '',
                  ratingQualityDelivery: ''
                });
                setErrors({});
              }}
            >
              Clear form
            </button>
          </div>

          {/* Page Indicator */}
          <div className="text-center px-10 pb-8 text-sm text-gray-600">
            Page {currentPage} of 3
          </div>

          {/* Submit Status */}
          {submitStatus && (
            <div className={`mx-10 mb-8 px-4 py-3 rounded-lg text-center text-sm font-medium ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
    <div>
        
    </div>
    <Footer/>
     </>
  );
};

export default VendorRegistrationForm;