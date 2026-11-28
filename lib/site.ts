// Single source for company facts. Every value here is either confirmed by Harold
// or a marked {{placeholder}}. Do not add a fact without a source.
export const site = {
  name: 'Trapier Management',
  legalName: 'Trapier Management LLC',
  url: 'https://trapmanagement.org',
  email: 'info@trapiermanagement.com',
  founder: 'Harold A. Trapier',
  founderTitle: 'Founder and CEO',
  cage: '12LN8',
  uei: 'L6BAD35CZS74',
  certification: 'SBA-certified Service-Disabled Veteran-Owned Small Business (SDVOSB)',
  // Confirmed by SAM.gov activation notice, 2026-11-27. Next annual renewal 2027-11-24.
  samStatus: 'Active',
  // Placeholders Harold must fill before launch.
  naics: '{{naics_codes}}',
  psc: '{{psc_codes}}',
  vehicles: '{{contract_vehicles}}',
  pastPerformance: '{{trapier_past_performance}}',
  platforms: {
    sturgeon: 'https://sturgeongov.com',
    govcon: 'https://govconcommandcenter.com',
  },
} as const;

export const primaryCta = { label: 'Get your AI readiness score', href: '/ai-maturity-assessment' } as const;
