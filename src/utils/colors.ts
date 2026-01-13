export function darkenHexColor(hexColor: string, amount: number): string {
    // Remove '#' if present
    let usePound = false;
    if (hexColor[0] === "#") {
        hexColor = hexColor.slice(1);
        usePound = true;
    }

    // Parse the hex color to an integer
    const num = parseInt(hexColor, 16);

    // Extract and darken Red component
    let r = (num >> 16) - amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    // Extract and darken Green component
    let g = ((num >> 8) & 0x00FF) - amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    // Extract and darken Blue component
    let b = (num & 0x0000FF) - amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    // Convert back to hex and ensure two digits for each component
    const toHex = (c: number) => ("0" + c.toString(16)).slice(-2);

    return (usePound ? "#" : "") + toHex(r) + toHex(g) + toHex(b);
}
