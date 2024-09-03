import React from "react";
import { FaUpload, FaFilePdf } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";

const Attachments = ({ formData, changeHandle, errors, renderFileInfo }) => {
  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
        Attachments Section
      </h2>

      {/* Video Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Video Upload (Only .mp4, .flv are supported)
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="video-upload"
            accept=".mp4,.flv"
            onChange={(e) => changeHandle(e, "video")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {formData.video && (
            <div className="mt-4 flex justify-center">
              <video
                src={URL.createObjectURL(formData.video)}
                className="w-16 h-16 object-cover rounded-md shadow-md"
                controls
              />
            </div>
          )}
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload only .mp4, .flv file format, Max file size should be 200MB
        <span className="text-[#004A9C]">*</span>.
      </p>

      {/* Image Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Image Upload (Only .png, .jpg & .jpeg are supported)
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="image-upload"
            accept=".png,.jpg,.jpeg"
            onChange={(e) => changeHandle(e, "image")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {formData.image && (
            <div className="mt-4 flex justify-center">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Image Preview"
                className="w-16 h-16 object-cover rounded-md shadow-md"
              />
            </div>
          )}
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload in PNG, JPEG, JPG format, Max file size should be 200MB
        <span className="text-[#004A9C]">*</span>.
      </p>

      {/* Electricity Bill Upload */}
      <div className="flex flex-col sm:flex-row items-center border-dashed border-2 border-gray-300 p-4 sm:p-6">
        <div className="flex-1">
          <div className="flex flex-col items-center sm:border-r sm:border-r-gray-500 mb-4 sm:mb-0">
            <GrCloudUpload size={20} className="text-[#0BB68D] mb-2" />
            <label className="block text-[14px] font-[400] text-gray-600 pr-3 text-center">
              Electricity Bill (Only .png, .jpg, .jpeg & .pdf are supported)
            </label>
          </div>
        </div>
        <div className="flex-1">
          <input
            type="file"
            id="electricityBill-upload"
            accept=".png,.jpg,.jpeg,.pdf"
            onChange={(e) => changeHandle(e, "electricityBill")}
            className="block text-sm text-[#757575] ml-0 sm:ml-4 w-full sm:w-auto border-[#CECECE] border rounded-md shadow-sm p-2 cursor-pointer"
          />
          {formData.electricityBill && (
            <div className="mt-4 flex justify-center">
              {formData.electricityBill.type === "application/pdf" ? (
                <FaFilePdf size={48} className="text-red-500" />
              ) : (
                <img
                  src={URL.createObjectURL(formData.electricityBill)}
                  alt="Electricity Bill Preview"
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              )}
            </div>
          )}
        </div>
      </div>
      <p className="text-[12px] my-2 text-center">
        Please upload in PNG, JPEG, JPG, PDF format, Max file size should be
        200MB
        <span className="text-[#004A9C]">*</span>.
      </p>
    </div>
  );
};

export default Attachments;
