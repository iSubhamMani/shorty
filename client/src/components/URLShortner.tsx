"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = async () => {
    if (!url.trim()) {
      toast("Please enter a valid URL");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const shortCode = Math.random().toString(36).substring(2, 8);
      setShortenedUrl(`https://shorty.app/${shortCode}`);
      setIsLoading(false);
      toast("URL shortened successfully!");
    }, 1500);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      toast("Copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy URL");
    }
  };

  const openUrl = () => {
    window.open(shortenedUrl, "_blank");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <Input
            type="url"
            placeholder="https://your-very-long-url-here.com/with/lots/of/parameters"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-16 text-sm sm:text-base md:text-lg px-4 md:px-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 focus:translate-x-[-2px] focus:translate-y-[-2px]"
            onKeyDown={(e) => e.key === "Enter" && handleShorten()}
          />

          <Button
            onClick={handleShorten}
            disabled={isLoading}
            className="cursor-pointer w-full h-16 text-sm sm:text-base md:text-lg font-black bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "SHORTENING..." : "SHORTEN IT!"}
          </Button>
        </div>

        {shortenedUrl && (
          <div className="bg-gray-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm font-bold text-gray-600 mb-2">
              YOUR SHORTENED URL:
            </p>
            <div className="flex items-center gap-2 mb-4">
              <code className="text-lg font-mono bg-white px-3 py-2 border-2 border-black flex-1 break-all">
                {shortenedUrl}
              </code>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="flex-1 h-12 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
              >
                <Copy className="w-4 h-4 mr-2" />
                COPY
              </Button>
              <Button
                onClick={openUrl}
                variant="outline"
                className="flex-1 h-12 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                VISIT
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default URLShortener;
