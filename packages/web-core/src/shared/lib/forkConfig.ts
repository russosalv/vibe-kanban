// Build-time configuration for the new-vibe-kanban fork.
//
// This is the central place to toggle behaviour that diverges from the
// upstream BloopAI build. Currently:
// - IS_LOCAL_ONLY_FORK gates UI surfaces that depended on Bloop's hosted
//   backend (cloud projects, remote orgs, OAuth providers, relay tunnels).
//   When true (default in this fork), those surfaces should be hidden or
//   stubbed so the user does not see broken cloud entry points.
//
// To build a cloud-aware variant, set VITE_NVK_LOCAL_ONLY=false at build
// time. The default is "true" because the fork ships local-only releases.

const rawFlag = (import.meta as { env?: Record<string, string | undefined> }).env
  ?.VITE_NVK_LOCAL_ONLY;

export const IS_LOCAL_ONLY_FORK = (rawFlag ?? 'true') === 'true';
