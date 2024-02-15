import React from 'react';
import './button.css';

// Define the props interface for the Button component
interface IButtonProps {
  primary?: boolean; // Is this the primary button?
  backgroundColor?: string; // Background color of the button
  size?: 'small' | 'medium' | 'large'; // Size of the button
  label: string; // Button label
  onClick?: () => void; // Click handler for the button
  downloadUrl?: string; // URL for downloading the resume
}

// Button component
export const Button = ({
  primary = false, // Default button type is secondary
  size = 'medium', // Default size is medium
  backgroundColor, // Background color of the button
  label, // Button label
  onClick, // Click handler for the button
  downloadUrl, // URL for downloading the resume
  ...props // Other HTML button attributes
}: IButtonProps) => {
  // Determine button mode based on whether it's primary or secondary
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  // Function to handle download action
  const handleDownload = () => {
    if (downloadUrl) {
      // Create a temporary link element
      const link = document.createElement('a');
      // Set the href attribute to the download URL
      link.href = downloadUrl;
      // Set the download attribute to specify the default file name
      link.download = 'resume.docx';
      // Append the link to the document body
      document.body.appendChild(link);
      // Simulate a click on the link to trigger the download
      link.click();
      // Remove the link from the document body after the download
      document.body.removeChild(link);
    }
  };

  // Render the button component
  return (
    <>
      {/* Main button with label */}
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        onClick={onClick} // Attach click handler if provided
        {...props} // Spread other button attributes
      >
        {label}
      </button>
      {/* Download button */}
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        onClick={handleDownload} // Attach download handler
      >
        Download Resume
      </button>
    </>
  );
};
