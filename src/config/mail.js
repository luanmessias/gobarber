export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'GoBarber Team <noreply@gobarber.com',
  },
};

/**
 * Quando estiver Online usar esses:
 *
 * Amazon SES
 * Mailgun
 * Sparkspot
 * Mandril (Mailchimp)
 * GMail
 *
 * Apenas para dev
 * Mailtrap
 *
 */
