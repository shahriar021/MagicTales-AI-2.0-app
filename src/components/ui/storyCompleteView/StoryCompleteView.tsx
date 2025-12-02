import { useCallback } from "react";
import { Alert } from "react-native";
import * as Print from "expo-print";
import * as Notifications from 'expo-notifications';
const sendDownloadNotification = async (fileName:string) => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "✅ Download Successful!",
                body: `Your story has been saved to your files as: ${fileName}`,
                data: { file: fileName },
            },
            trigger: null, // Send immediately
        });
    };

export const handleDownload = async (info:string) => {
    const fileName = "magicTales.pdf";
        if (!info) {
            Alert.alert('Error', 'No content available to create a PDF.');
            return;
        }

        // 2. Prepare the content as a simple HTML string
        // We wrap the text in <p> tags and replace newlines with <br> for formatting
        const htmlContent = `
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            padding: 20px; 
                        }
                        p { 
                            font-size: 16px; 
                            line-height: 1.5; 
                            white-space: pre-wrap; /* Keeps manual line breaks from textContent */
                        }
                    </style>
                </head>
                <body>
                    <p>${info.replace(/\n/g, '<br>')}</p>
                </body>
            </html>
        `;

       try {
      await Print.printAsync({ html: htmlContent });
      await sendDownloadNotification(fileName);
      
    } catch (error) {
      Alert.alert("Error", "Failed to generate PDF.");
      console.error(error);
    }

}