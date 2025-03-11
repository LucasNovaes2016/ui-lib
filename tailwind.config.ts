import tailwindFormsPlugin from '@tailwindcss/forms';
import tailwindTypographyPlugin from '@tailwindcss/typography';

export default {
  content: ['src/**/*.{ts,tsx}'],
  plugins: [tailwindFormsPlugin, tailwindTypographyPlugin],
};
