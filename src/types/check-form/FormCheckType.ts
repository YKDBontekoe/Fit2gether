import { PersonalCheckType } from '@/types/check-form/PersonalCheckType';
import { HealthCheckType } from '@/types/check-form/HealthCheckType';

export type FormCheckType = {
  personalData: PersonalCheckType;
  healthData: HealthCheckType;
};
