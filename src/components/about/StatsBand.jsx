import { METRICS } from "../../utils/constants";
import StatCounter from "../common/StatCounter";

/**
 * Glass panel of animated company metrics. Reused on About and Home.
 */
export default function StatsBand() {
  return (
    <div className="glass rounded-3xl px-6 py-12 sm:px-8">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {METRICS.map((metric) => (
          <StatCounter
            key={metric.label}
            value={metric.value}
            suffix={metric.suffix}
            label={metric.label}
            numberClassName="grad-text"
            className="mx-auto"
          />
        ))}
      </div>
    </div>
  );
}
