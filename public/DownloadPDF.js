// DownloadPDFButton.js

import React from 'react';

class DownloadPDFButton extends React.Component {
    handleDownloadClick = () => {
        // Logika untuk mengunduh PDF
    };

    render() {
    return (
        <button onClick={this.handleDownloadClick}>
        Download PDF
        </button>
        );
    }
}

export default DownloadPDFButton;
