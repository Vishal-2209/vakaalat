"use client";

import { Share2, Facebook, Twitter, Linkedin, Check } from 'lucide-react';
import { Button } from '@/components/Button';
import { useState, useEffect } from 'react';

interface ShareButtonsProps {
    title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const shareToTwitter = () => {
        if (!currentUrl) return;
        const text = encodeURIComponent(title);
        const url = encodeURIComponent(currentUrl);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
    };

    const shareToLinkedIn = () => {
        if (!currentUrl) return;
        const url = encodeURIComponent(currentUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
    };

    const shareToFacebook = () => {
        if (!currentUrl) return;
        const url = encodeURIComponent(currentUrl);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
    };

    const copyToClipboard = async () => {
        if (!currentUrl) return;
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="flex items-center gap-4">
            <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-colors"
                onClick={shareToTwitter}
                title="Share to Twitter"
            >
                <Twitter className="w-5 h-5" />
            </Button>
            <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-colors"
                onClick={shareToLinkedIn}
                title="Share to LinkedIn"
            >
                <Linkedin className="w-5 h-5" />
            </Button>
            <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-colors"
                onClick={shareToFacebook}
                title="Share to Facebook"
            >
                <Facebook className="w-5 h-5" />
            </Button>
            <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-colors relative"
                onClick={copyToClipboard}
                title="Copy Link"
            >
                {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
            </Button>
        </div>
    );
}
