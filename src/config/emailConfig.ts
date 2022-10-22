import { registerAs } from '@nestjs/config';

/**
 * emailConfig.ts의 코드를 쉽게 설명하면 'email'이라는 토큰으로 ConfigFactory를 등록할 수 있는 함수라고 이해하시면 됩니다.
 * 이 함수를 이용해서 곧이어 설명할 ConfigModule을 동적으로 등록합니다.
 */
export default registerAs('email', () => ({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASSWORD,
  },
  baseUrl: process.env.EMAIL_BASE_URL,
}));
