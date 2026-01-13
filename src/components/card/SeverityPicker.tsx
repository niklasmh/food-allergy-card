import { useStore } from "../../store";
import { Allergies, Severity } from "../../allergies";

type SeverityPickerProps = {
  allergyId: Allergies;
  severity: Severity;
};

export function SeverityPicker({ allergyId, severity }: SeverityPickerProps) {
  const { setAllergySeverity } = useStore();

  const severities: Severity[] = [1, 2, 3];

  return (
    <div className="flex flex-row gap-1">
      {severities.map((s) => (
        <button
          key={s}
          data-testid={`severity-button-${s}`}
          className={
            "w-6 h-6 rounded-full text-xs " +
            (severity === s ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700")
          }
          onClick={() => setAllergySeverity(allergyId, s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
