import { TaxDeadline, QuickLink, AnnouncementSlide, TopicItem, UpdateArticle, TaxFormItem } from '../types';

export const TAX_DEADLINES: TaxDeadline[] = [
  {
    id: 'd1',
    date: '31 JUL 2026',
    badge: 'GST',
    badgeColor: 'bg-white text-[#00244a]',
    title: 'File GST return',
    description: 'File GST return (period ending in Jun)',
    category: 'GST',
    status: 'Upcoming'
  },
  {
    id: 'd2',
    date: '30 SEP 2026',
    badge: 'CIT',
    badgeColor: 'bg-[#cfe6f7] text-[#061e2b]',
    title: 'File ECI',
    description: 'File Estimated Chargeable Income (Jun financial year-end)',
    category: 'Corporate Income Tax',
    status: 'Upcoming'
  },
  {
    id: 'd3',
    date: '31 OCT 2026',
    badge: 'GST',
    badgeColor: 'bg-white text-[#00244a]',
    title: 'File GST return',
    description: 'File GST return (period ending in Sep)',
    category: 'GST',
    status: 'Upcoming'
  },
  {
    id: 'd4',
    date: '30 NOV 2026',
    badge: 'CIT',
    badgeColor: 'bg-[#cfe6f7] text-[#061e2b]',
    title: 'File Form C-S/C-S (Lite)/C',
    description: 'File Form C-S/C-S (Lite)/C corporate tax filing',
    category: 'Corporate Income Tax',
    status: 'Urgent'
  },
  {
    id: 'd5',
    date: '31 DEC 2026',
    badge: 'CIT',
    badgeColor: 'bg-[#cfe6f7] text-[#061e2b]',
    title: 'File ECI',
    description: 'File Estimated Chargeable Income (Sep financial year-end)',
    category: 'Corporate Income Tax',
    status: 'Upcoming'
  }
];

export const QUICK_LINKS: QuickLink[] = [
  {
    id: 'q1',
    title: 'Calculators',
    icon: 'calculate',
    actionKey: 'calculators',
    description: 'Individual Income Tax, Corporate Tax & Property Tax Estimators'
  },
  {
    id: 'q2',
    title: 'Payments',
    icon: 'payments',
    actionKey: 'payments',
    description: 'Pay tax via PayNow QR, GIRO, Credit Card or check payment status'
  },
  {
    id: 'q3',
    title: 'Digital Services',
    icon: 'important_devices',
    actionKey: 'digital-services',
    description: 'myTax Portal e-filing, notice downloads, and account management'
  },
  {
    id: 'q4',
    title: 'Forms',
    icon: 'description',
    actionKey: 'forms',
    description: 'Download IRAS official tax return forms, GIRO applications and templates'
  },
  {
    id: 'q5',
    title: 'e-Tax Guides',
    icon: 'auto_stories',
    actionKey: 'guides',
    description: 'Comprehensive guides on GST rules, Corporate tax, and Property tax rules'
  },
  {
    id: 'q6',
    title: 'Tax Rates',
    icon: 'trending_up',
    actionKey: 'rates',
    description: 'Official tax rate brackets for Individuals, Companies, and Properties'
  }
];

export const ANNOUNCEMENT_SLIDES: AnnouncementSlide[] = [
  {
    id: 's1',
    tag: 'Important Notice',
    title: 'Paid your Corporate Income Tax but payment not reflected?',
    description: 'Use the Corporate Tax Payment Status Checker to understand processing timelines and next steps if your payment hasn\'t appeared in myTax Portal after 3 working days.',
    actionText: 'FIND OUT MORE',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLv2Kupperb0XNBEOs-WU87ZN8XxnuDhjxasp7zztlGBI-P3lH-Vt8Q10eNMU6EXbF3a9B4OO2PNJ2LqPZcYsdbeHxHxm3KGd7n_x1nwSw8VtKrnscV0NNBxPyuej1ZITO3iJLMLo_ropcU104nobMeHuATLSKI8e0xaSWDKJQwZBssF651803dvk2ywzwljXU-nYgiOTU7_OCY0nBpjOAOakGXG6irg4ZKZUcn9_VSL6JnDDECftk-W8hRA',
    actionKey: 'corp-tax-checker'
  },
  {
    id: 's2',
    tag: 'Tax Season 2026',
    title: 'Auto-Inclusion Scheme (AIS) for Employment Income',
    description: 'Employers participating in AIS submit employment income details directly to IRAS. Employees can view pre-filled information when filing Form B1 or享受 No-Filing Service (NFS).',
    actionText: 'CHECK AIS STATUS',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    actionKey: 'ais-info'
  },
  {
    id: 's3',
    tag: 'GST Updates 2026',
    title: 'GST Voucher Scheme & Invoice Requirements',
    description: 'Learn about the latest GST rate implementation rules, invoice formatting for businesses, and cash voucher disbursements for eligible Singaporean households.',
    actionText: 'READ GST GUIDE',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    actionKey: 'gst-guide'
  }
];

export const POPULAR_TOPICS: TopicItem[] = [
  // Employees
  {
    id: 't-emp-1',
    title: 'Individual Income Tax rates',
    category: 'Employees',
    summary: 'Singapore personal income tax rates are progressive from 0% to 24% depending on chargeability.',
    details: [
      'First $20,000 of taxable income is charged at 0%.',
      'Next $10,000 is charged at 2%.',
      'Next $10,000 is charged at 3.5%.',
      'Tax chargeable tops out at 24% for income above $1,000,000.',
      'Non-residents are taxed at a flat rate of 15% or progressive resident rates (whichever yields higher tax).'
    ]
  },
  {
    id: 't-emp-2',
    title: 'Tax reliefs, rebates and deductions',
    category: 'Employees',
    summary: 'Personal tax reliefs reduce chargeable income. Maximum total personal relief cap is $80,000 per YA.',
    details: [
      'Earned Income Relief ($1,000 for below age 55; $6,000 for 55-59; $8,000 for 60+).',
      'CPF Cash Top-Up Relief up to $8,000 for self and $8,000 for loved ones.',
      'Supplementary Retirement Scheme (SRS) relief up to $15,300 for Singapore Citizens / PRs ($35,700 for foreigners).',
      'Qualifying Child Relief (QCR) $4,000 per child.'
    ]
  },
  {
    id: 't-emp-3',
    title: 'Experiencing difficulties in paying?',
    category: 'Employees',
    summary: 'Request for GIRO interest-free installment plans up to 12 months or appeal for payment extension.',
    details: [
      'Apply online via myTax Portal using Singpass.',
      'Auto-approval for eligible taxpayer accounts.',
      'Standard GIRO deduction takes place on 6th of each month.'
    ]
  },
  {
    id: 't-emp-4',
    title: 'CPF Cash Top-up Relief',
    category: 'Employees',
    summary: 'Enjoy tax relief when you make cash top-ups to your own or family members\' CPF Special or Retirement Account.',
    details: [
      'Up to $8,000 per year for top-up to self.',
      'Additional $8,000 per year for top-ups to parents, grandparents, spouse, or siblings.',
      'Top-ups must be made before 31 Dec to qualify for the coming Year of Assessment.'
    ]
  },
  {
    id: 't-emp-5',
    title: 'SRS contributions and tax relief',
    category: 'Employees',
    summary: 'Save for retirement while reducing your taxable income through Supplementary Retirement Scheme.',
    details: [
      'Singapore Citizens / PR cap: $15,300.',
      'Foreigners cap: $35,700.',
      'Investment gains in SRS accumulate tax-free until withdrawal.'
    ]
  },
  {
    id: 't-emp-6',
    title: 'Tax Season 2026 - All you need to know',
    category: 'Employees',
    summary: 'E-filing period runs from 1 Mar to 18 Apr 2026. NFS taxpayers receive NOA directly.',
    details: [
      'No-Filing Service (NFS): Taxpayers who receive NFS notification do not need to file unless adding relief changes.',
      'Notice of Assessment (NOA) will be issued digitally in myTax Portal starting end April.'
    ]
  },
  {
    id: 't-emp-7',
    title: 'IRAS Digital Notices',
    category: 'Employees',
    summary: 'Go paperless with e-Notices via myTax Portal and receive SMS / Email alerts.',
    details: [
      'Instant notification upon NOA issuance.',
      'Access historical notices for up to 5 years.'
    ]
  },
  {
    id: 't-emp-8',
    title: 'Check Outstanding Property Tax',
    category: 'Employees',
    summary: 'Verify property tax account balance and annual value (AV) ratings online.',
    details: [
      'Property tax is calculated based on Annual Value (AV) x Tax Rate.',
      'Owner-occupier progressive tax rates apply to residential properties.'
    ]
  },
  {
    id: 't-emp-9',
    title: '2026 Property Tax Bill',
    category: 'Employees',
    summary: 'Property tax bills are issued in December every year and payable by 31 January.',
    details: [
      'GIRO plan offers up to 12 interest-free monthly installments.',
      'Rebates granted by MOF are automatically applied.'
    ]
  },

  // Non-resident individuals
  {
    id: 't-nr-1',
    title: 'Non-resident employment income tax',
    category: 'Non-resident individuals',
    summary: 'Tax rates and exemptions for non-residents working in Singapore.',
    details: [
      'Worked 60 days or less: Exempt from income tax (excludes company directors & public entertainers).',
      'Worked 61 to 182 days: Taxed at flat 15% or resident progressive rates, whichever is higher.',
      'Worked 183 days or more in a calendar year: Taxed as tax resident.'
    ]
  },
  {
    id: 't-nr-2',
    title: 'Tax clearance for foreign employees (Form IR21)',
    category: 'Non-resident individuals',
    summary: 'Employers must seek tax clearance at least 1 month before foreign employee leaves job.',
    details: [
      'Employer holds back payment of monies due to employee.',
      'IRAS processes Form IR21 within 7 to 10 working days.',
      'Any overpaid tax is refunded directly to employee or employer.'
    ]
  },

  // Self-employed / Partners
  {
    id: 't-se-1',
    title: 'Fixed Expense Deduction Amount (FEDA)',
    category: 'Self-employed/Partners',
    summary: 'Simplified expense claiming method for commission agents, private hire driver and delivery riders.',
    details: [
      'Claim FEDA as a fixed percentage of gross income instead of tracking actual business expenses.',
      'Private-hire car drivers and taxi drivers can claim FEDA up to 60%.',
      'Commission agents can claim FEDA up to 25%.'
    ]
  },
  {
    id: 't-se-2',
    title: 'Medisave Contributions for Self-Employed',
    category: 'Self-employed/Partners',
    summary: 'Mandatory CPF Medisave contribution based on Net Trade Income (NTI).',
    details: [
      'Required if NTI exceeds $6,000 per year.',
      'Contributions are tax deductible under CPF Relief.'
    ]
  },

  // Companies
  {
    id: 't-c-1',
    title: 'Corporate Income Tax Rate & Partial Exemption',
    category: 'Companies',
    summary: 'Flat 17% corporate income tax rate with attractive partial tax exemption schemes.',
    details: [
      '75% exemption on first $10,000 of normal chargeable income.',
      '50% exemption on next $190,000 of normal chargeable income.',
      'New start-up companies enjoy up to 75% exemption on first $100,000 for first 3 YAs.'
    ]
  },
  {
    id: 't-c-2',
    title: 'Estimated Chargeable Income (ECI) Filing',
    category: 'Companies',
    summary: 'File ECI within 3 months from the end of financial year.',
    details: [
      'Enjoy GIRO installments up to 10 months if ECI is filed early.',
      'Exemption applies if annual revenue is $5M or less AND ECI is NIL.'
    ]
  }
];

export const LATEST_UPDATES: UpdateArticle[] = [
  {
    id: 'u1',
    type: 'PAGES',
    date: '21 Jul 2026',
    title: 'Country-by-Country Reporting (CbCR)',
    summary: 'Essential guidance on reporting requirements for multinational enterprise groups with a consolidated group revenue of at least €750 million.',
    content: [
      'Singapore Ultimate Parent Entities (UPEs) of Multinational Enterprise (MNE) groups with consolidated group revenue exceeding €750M in the preceding financial year are required to file CbC Reports.',
      'The CbCR return must be submitted electronically via myTax Portal within 12 months from the end of the ultimate parent entity’s financial year.',
      'Updated XML schema v2.0 validation checks are now active.'
    ]
  },
  {
    id: 'u2',
    type: 'PAGES',
    date: '21 Jul 2026',
    title: 'Transfer Pricing',
    summary: 'Updated administrative practices for related party transactions, ensuring arm\'s length principles are correctly applied for cross-border activities.',
    content: [
      'IRAS has issued updated Transfer Pricing (TP) Guidelines introducing streamlined documentation requirements for routine service providers.',
      'Surcharges of 5% apply to transfer pricing adjustments made during IRAS audits.',
      'Taxpayers are reminded to maintain contemporaneous TP documentation before the filing due date of the tax return.'
    ]
  },
  {
    id: 'u3',
    type: 'PAGES',
    date: '17 Jul 2026',
    title: 'Responsibilities of precedent partners',
    summary: 'Clarification on the tax filing obligations and reporting duties specifically assigned to the nominated precedent partner in business partnerships.',
    content: [
      'The precedent partner is responsible for filing Form P (Partnership Income Tax Return) on behalf of all partners.',
      'Divisions of net trade income, capital allowances, and partner salaries must be accurately apportioned in accordance with the partnership agreement.',
      'Failure to file Form P may result in composition fines and summons issued to the precedent partner.'
    ]
  }
];

export const TAX_FORMS: TaxFormItem[] = [
  { id: 'f1', code: 'Form B1', title: 'Individual Income Tax Return for Tax Residents', taxType: 'Individual', description: 'Used by tax residents to declare employment income, trade income, and tax relief claims.', fileSize: '420 KB' },
  { id: 'f2', code: 'Form C-S', title: 'Simplified Corporate Income Tax Return', taxType: 'Corporate', description: 'For qualifying small companies incorporated in Singapore with revenue ≤ $5M.', fileSize: '380 KB' },
  { id: 'f3', code: 'Form C-S (Lite)', title: 'Ultra-Simplified Return for Micro Companies', taxType: 'Corporate', description: 'For small companies with annual revenue ≤ $200,000.', fileSize: '210 KB' },
  { id: 'f4', code: 'GST F5', title: 'GST Return for Taxable Periods', taxType: 'GST', description: 'Quarterly or monthly declaration of taxable supplies, output GST, and input GST claims.', fileSize: '310 KB' },
  { id: 'f5', code: 'Form IR21', title: 'Notification by Employer for Foreign Employee Tax Clearance', taxType: 'Employer', description: 'Filed when foreign employees cease employment in Singapore or leave for > 3 months.', fileSize: '510 KB' }
];
