export interface TaxDeadline {
  id: string;
  date: string;
  badge: 'GST' | 'CIT' | 'IIT' | 'PT';
  badgeColor?: string;
  title: string;
  description: string;
  actionUrl?: string;
  category: 'GST' | 'Corporate Income Tax' | 'Individual Income Tax' | 'Property Tax';
  status: 'Upcoming' | 'Urgent' | 'Open';
}

export interface QuickLink {
  id: string;
  title: string;
  icon: string;
  actionKey: 'calculators' | 'payments' | 'digital-services' | 'forms' | 'guides' | 'rates';
  description: string;
}

export interface AnnouncementSlide {
  id: string;
  tag: string;
  title: string;
  description: string;
  actionText: string;
  image: string;
  actionKey: string;
}

export interface TopicItem {
  id: string;
  title: string;
  category: 'Employees' | 'Non-resident individuals' | 'Self-employed/Partners' | 'Companies';
  summary: string;
  details: string[];
  links?: { title: string; url: string }[];
}

export interface UpdateArticle {
  id: string;
  type: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
}

export interface TaxFormItem {
  id: string;
  code: string;
  title: string;
  taxType: string;
  description: string;
  fileSize: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'iras-bot';
  text: string;
  timestamp: string;
  options?: string[];
  actionLink?: { label: string; actionKey: string };
}
