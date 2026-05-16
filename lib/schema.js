const BASE = 'https://mv.metamorphosis.com.bd';

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#business`,
  name: 'Metamorphosis MV',
  url: BASE,
  telephone: '+9607417734',
  email: 'marketing@metamorphosis.com.bd',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Malé',
    addressCountry: 'MV',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 4.1748, longitude: 73.5089 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  knowsLanguage: 'en',
  areaServed: { '@type': 'Country', name: 'Maldives' },
  sameAs: [
    'https://www.linkedin.com/company/metamorphosis-odoo-erp',
    'https://www.facebook.com/metamorphosis.com.bd',
    'https://metamorphosis.com.bd',
  ],
};

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#org`,
  name: 'Metamorphosis MV',
  url: BASE,
  foundingYear: 2016,
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 40 },
  parentOrganization: { '@type': 'Organization', name: 'Metamorphosis Ltd.', url: 'https://metamorphosis.com.bd' },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Odoo Silver Partner',
    credentialCategory: 'certification',
  },
  sameAs: [
    'https://www.linkedin.com/company/metamorphosis-odoo-erp',
    'https://www.facebook.com/metamorphosis.com.bd',
  ],
};

export function localBusinessSchema() {
  return LOCAL_BUSINESS;
}

export function organizationSchema() {
  return ORGANIZATION;
}

export function serviceSchema({ name, description, url, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE}${url}`,
    serviceType,
    areaServed: { '@type': 'Country', name: 'Maldives' },
    provider: { '@id': `${BASE}/#business` },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE}/contact`,
      servicePhone: '+9607417734',
    },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${BASE}${url}`,
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    name: 'Metamorphosis MV',
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/services?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function blogPostSchema({ title, description, url, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${BASE}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: 'Metamorphosis MV', url: BASE },
    publisher: { '@type': 'Organization', name: 'Metamorphosis MV', url: BASE },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}${url}` },
  };
}

export function jsonLd(schema) {
  return JSON.stringify(schema);
}
