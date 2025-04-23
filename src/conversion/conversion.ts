export const conversionTextToBase64 = (text: string): string => {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        return btoa(String.fromCharCode(...new Uint8Array(data)));
    } catch (e) {
        console.log(e)
        throw new Error(e as string | undefined)
    }
};

export const conversionBase64ToText = (base64: string): string => {
    if (typeof base64 !== 'string') {
        throw new Error('Input must be a string');
    }
    try {
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const decoder = new TextDecoder();
        return decoder.decode(bytes);
    } catch (e) {
        console.log(e)
        throw new Error(e as string | undefined)
    }
};
