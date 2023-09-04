import CopyText from "./CopyText";
import AppWidget from "./AppWidget";

const ShareLink = () => {
    const currentPageUrl = window.location.href;
    const message = encodeURIComponent(`Hey! I found this trip on Backpacker Tours. Check it out - ${currentPageUrl}`);
    const whatsappUrl = `https://web.whatsapp.com/send?text=${message}`;
    const facebookUrl = `https://www.facebook.com/sharer.php?t=${message}`
    const snapChatUrl = `https://www.snapchat.com/scan?attachmentUrl=${message}`;
    return (
        <section>
            <h5 className="text-center mb-3">Share</h5>
            <div className="d-flex gap-4 justify-content-center">
                <AppWidget url={whatsappUrl} icon="whatsapp" />
                <AppWidget url={facebookUrl} icon="facebook" />
                <AppWidget url={snapChatUrl} icon="snapchat" />
            </div>
            <CopyText pageUrl={currentPageUrl} />
        </section>
    )
}

export default ShareLink;