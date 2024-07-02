import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [editedVideo, setEditedVideo] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSendToBackend = async () => {
    if (!videoFile) {
      toast("Please upload a video first.");
      return;
    }

    setIsProcessing(true);

    // Simulate sending video to backend and receiving edited video
    setTimeout(() => {
      setIsProcessing(false);
      setEditedVideo(videoPreview); // For demonstration, using the same video as edited video
      toast("Video processing complete.");
    }, 3000);
  };

  const handleUploadToInstagram = () => {
    if (!editedVideo) {
      toast("Please process a video first.");
      return;
    }
    // Implement Instagram upload functionality here
    toast("Uploading to Instagram...");
  };

  const handleUploadToFacebook = () => {
    if (!editedVideo) {
      toast("Please process a video first.");
      return;
    }
    // Implement Facebook upload functionality here
    toast("Uploading to Facebook...");
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl">Video Upload and Preview</h1>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      {videoPreview && (
        <video
          src={videoPreview}
          controls
          className="w-full max-w-md mt-4"
        />
      )}
      <Button onClick={handleSendToBackend} disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Send to Backend"}
      </Button>
      {isProcessing && <Progress value={50} className="w-full max-w-md mt-4" />}
      {editedVideo && (
        <div className="flex flex-col items-center space-y-4 mt-4">
          <h2 className="text-2xl">Edited Video</h2>
          <video
            src={editedVideo}
            controls
            className="w-full max-w-md"
          />
          <a href={editedVideo} download="edited-video.mp4">
            <Button>Download Edited Video</Button>
          </a>
          <div className="flex space-x-4 mt-4">
            <Button onClick={handleUploadToInstagram} className="flex items-center space-x-2">
              <FaInstagram />
              <span>Upload to Instagram</span>
            </Button>
            <Button onClick={handleUploadToFacebook} className="flex items-center space-x-2">
              <FaFacebook />
              <span>Upload to Facebook</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;