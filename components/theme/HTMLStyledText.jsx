import React from 'react';
import AppText from "./AppText";

const HTMLStyledText = ({ children }) => {
    const parseText = (text) => {
        const italicRegex = /<i>(.*?)<\/i>/g;
        const boldRegex = /<b>(.*?)<\/b>/g;
        const linkRegex = /<a [^>]*?v="([^"]+)"[^>]*?\/?>/g;

        let parsedText = text.replace(italicRegex, (_, content) => {
            return <AppText style={{ fontStyle: 'italic' }}>{content}</AppText>;
        });

        parsedText = parsedText.replace(boldRegex, (_, content) => {
            return <AppText style={{ fontWeight: 'bold' }}>{content}</AppText>;
        });

        parsedText = parsedText.replace(linkRegex, (_, content) => {
            return content;
        });

        return parsedText;
    };

    return <AppText>{parseText(children)}</AppText>;
};

export default HTMLStyledText;
