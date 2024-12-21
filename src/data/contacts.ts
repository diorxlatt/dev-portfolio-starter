import { Contact } from '../types/contact';

export const contacts: Contact[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    url: import.meta.env.VITE_INSTAGRAM_URL,
    icon: 'Instagram',
    label: 'Follow me on Instagram'
  },
  {
    id: 'telegram',
    platform: 'Telegram',
    url: import.meta.env.VITE_TELEGRAM_URL,
    icon: 'Send',
    label: 'Contact me on Telegram'
  },
  {
    id: 'discord',
    platform: 'Discord',
    url: import.meta.env.VITE_DISCORD_URL,
    icon: 'MessageSquare',
    label: 'Join my Discord server'
  }
];