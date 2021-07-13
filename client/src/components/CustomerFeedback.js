import QuoteSlider from './generics/QuoteSlider';
import { ImBubble } from 'react-icons/im';

const CustomerFeedback = ({ quotes }) => {
    return (
        <div id="kunden" className="CustomerFeedback main-container component">
            <div>
                <div className="component-header">
                    <ImBubble className="component-icon" />
                    <h1 className="component-title">Kundenfeedback</h1>
                </div>
                <div className="component-content">
                    <QuoteSlider
                        quotes={quotes}
                        showNavigation={false}
                        autoScroll={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;
