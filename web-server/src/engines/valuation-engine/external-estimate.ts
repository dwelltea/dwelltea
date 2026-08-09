import { ConfidenceBand, ExternalEstimateInputs, SelectedExternalEstimate, SubjectProperty } from "./types";
import { daysBetween } from "./math";

function band(score: number): ConfidenceBand {
  if (score >= 85) return "High";
  if (score >= 70) return "Good";
  if (score >= 55) return "Moderate";
  return "Low";
}

export function selectExternalEstimate(subject: SubjectProperty, inputs: ExternalEstimateInputs): SelectedExternalEstimate {
  const repliers = inputs.repliersEstimate ?? 0;
  const houski = inputs.houskiEstimate ?? 0;
  const available = [repliers, houski].filter((v) => v > 0);

  if (!available.length) {
    return { isAvailable: false, selectedEstimate: 0, selectedSource: "", freshnessDays: 999, confidenceScore: 0, confidenceBand: "Low", guidance: "No external estimate available." };
  }

  let selectedEstimate = 0;
  let selectedSource = "";

  switch (inputs.preference) {
    case "Repliers":
      selectedEstimate = repliers || houski;
      selectedSource = repliers ? "Repliers" : "Houski";
      break;
    case "Houski":
      selectedEstimate = houski || repliers;
      selectedSource = houski ? "Houski" : "Repliers";
      break;
    case "Lower of available":
      selectedEstimate = Math.min(...available);
      selectedSource = "Lower of available";
      break;
    case "Higher of available":
      selectedEstimate = Math.max(...available);
      selectedSource = "Higher of available";
      break;
    default:
      selectedEstimate = available.reduce((a, b) => a + b, 0) / available.length;
      selectedSource = available.length > 1 ? "Average" : (repliers ? "Repliers" : "Houski");
      break;
  }

  let selectedTimestamp: string | undefined;
  if (selectedSource === "Repliers") selectedTimestamp = inputs.repliersTimestamp ?? undefined;
  else if (selectedSource === "Houski") selectedTimestamp = inputs.houskiTimestamp ?? undefined;
  else selectedTimestamp = [inputs.repliersTimestamp, inputs.houskiTimestamp].filter(Boolean).sort().pop() ?? undefined;

  const freshnessDays = daysBetween(subject.valuationDate, selectedTimestamp);
  const confidenceScore = freshnessDays <= 7 ? 55 : freshnessDays <= 30 ? 50 : 45;

  const guidance =
    inputs.policy === "Reference only"
      ? "External estimate available as reference only and should not replace the Dwelltea estimate."
      : inputs.policy === "Prefer External fallback"
        ? "Use external estimate only when Dwelltea does not have enough local evidence to publish a strong internal estimate."
        : "Keep Dwelltea fallback as the primary internal fallback and show external estimate only as reference.";

  return {
    isAvailable: true,
    selectedEstimate,
    selectedSource,
    selectedTimestamp,
    freshnessDays,
    confidenceScore,
    confidenceBand: band(confidenceScore),
    guidance,
  };
}
