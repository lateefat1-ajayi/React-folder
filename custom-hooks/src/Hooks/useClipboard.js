import { useState } from "react";


const useClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
        } catch (error) {
            console.log("Failed to copy",error)
        }
    }
    return {copied, copy}
}

export default useClipboard
