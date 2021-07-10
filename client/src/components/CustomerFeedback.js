import ArrowNavigation from './generics/ArrowNavigation';
import QuoteSlider from './generics/QuoteSlider';
import { ImBubble } from 'react-icons/im';

const CustomerFeedback = () => {
    return (
        <div id="kunden" className="CustomerFeedback main-container component">
            <ArrowNavigation id={4} direction={'up'} />
            <div>
                <div className="component-header">
                    <ImBubble className="component-icon" />
                    <h1 className="component-title">Kundenfeedback</h1>
                </div>
                <div className="component-content">
                    <QuoteSlider />
                </div>
            </div>
            <ArrowNavigation id={4} direction={'down'} />
        </div>
    );
};

export default CustomerFeedback;
