// In the upstream codebase this banner announced Bloop's cloud shutdown and
// linked to vibekanban.com. In this fork the kanban functionality is restored
// and the banner has no purpose, so the component renders nothing. The export
// flow is still reachable from the rest of the UI.

interface CloudShutdownExportBannerProps {
  // Kept for compatibility with existing call sites.
  onClick?: () => void;
}

export function CloudShutdownExportBanner(_props: CloudShutdownExportBannerProps) {
  return null;
}
