import figlet from "figlet";
import Bloody from "figlet/importable-fonts/Bloody";
import { useEffect, useState } from "react";

figlet.parseFont("Bloody", Bloody);

const TextSett = ({ text, font}) => {
    const[ascii, setAscii] = useState("");

    useEffect(() => {
        figlet.text(text, { font, whitespaceBreak: true, horizontalLayout: "fitted" }, ( err, data )=> {
            if(err){
                console.log(err);
            } else {
                setAscii(data);
            }
        });
    }, [text, font]);

    return(
        <pre className="text-center whitespace-pre">{ascii}</pre>
    )
};

export default TextSett;