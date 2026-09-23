import { FaTruck, FaUndo, FaBoxOpen } from 'react-icons/fa';

const features = [
  { icon: <FaTruck />, title: 'Fast Delivery', subtitle: '3-4 Days Delivery' },
  { icon: <FaUndo />, title: 'Super Easy Returns', subtitle: '14 Days Self Service' },
  { icon: <FaBoxOpen />, title: 'Free Shipping', subtitle: 'For Orders Over 1500 EGP' },
];

const FeaturesBar = () => {
  return (
    <div className="bg-bn-light-gray border-y border-bn-taupe/30">
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-3 md:py-4 grid grid-cols-3 gap-2 md:gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-1 md:gap-3 justify-center md:justify-start text-center md:text-left">
            <span className="text-bn-charcoal text-sm md:text-lg">{feature.icon}</span>
            <div>
              <p className="font-montserrat font-semibold text-[8px] md:text-xs uppercase tracking-widest text-bn-black">
                {feature.title}
              </p>
              <p className="font-montserrat text-[7px] md:text-[11px] text-bn-charcoal">
                {feature.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBar;