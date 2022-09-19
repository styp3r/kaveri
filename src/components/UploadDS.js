import DSInputFields from './DSInputFields';

function UploadDS() {
    return (
        <div id="uploadDSPage">
            <div className="uploadDSPageContainer">
                <DSInputFields mode="Upload" />
            </div>
        </div>
    );
}

export default UploadDS;