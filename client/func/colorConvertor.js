
   export function hexToInt(hex){
        var str = parseInt(hex, 16);
        return str;

    };

   export function hexToRgb(hex){
        // expecting #6digit format
        var sub = hex.substring(1, 7)
        var r = hexToInt(sub.substring(0, 2))
        var g = hexToInt(sub.substring(2, 4))
        var b = hexToInt(sub.substring(4, 6))
    
        var res = "(" + r + ", " + g + ", " + b + ')';
        
        return res;
    };

    
    export default function hexToLumi(hex){
        var sub = hex.substring(1, 7)
        var r = hexToInt(sub.substring(0, 2))
        var g = hexToInt(sub.substring(2, 4))
        var b = hexToInt(sub.substring(4, 6))

        var res = r * 0.2126 + g * 0.7152 + b * 0.0722

        return res;
    };