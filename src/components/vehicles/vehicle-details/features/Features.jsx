import { renderVehicleFeatures } from "../../../../utils/helpers";
import { FeaturesList } from "./FeaturesList";

export const Features = () => {
  const features = renderVehicleFeatures();

  return (
    <div className="bg-white p-8 border border-gray-300 rounded-3xl mb-10">
      <h3 className="text-xl font-600 mb-10">Features</h3>
      <div className="flex gap-16 flex-wrap xl:flex-nowrap xl:flex-row">
        <div>
          <h3 className="text-base mb-5">Interior</h3>
          <FeaturesList features={features.interior} />
        </div>
        <div>
          <h3 className="text-base mb-5">Exterior</h3>
          <FeaturesList features={features.exterior} />
        </div>
        <div>
          <h3 className="text-base mb-5">Comfort</h3>
          <FeaturesList features={features.comfort} />
        </div>
        <div>
          <h3 className="text-base mb-5">Safety</h3>
          <FeaturesList features={features.safety} />
        </div>
      </div>
    </div>
  );
};