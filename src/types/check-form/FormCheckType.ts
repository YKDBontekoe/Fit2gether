import { PersonalCheckType } from '@/types/check-form/PersonalCheckType';
import { HealthCheckType } from '@/types/check-form/HealthCheckType';
import { GeneralCheckType } from '@/types/check-form/GeneralCheckType';

export type FormCheckType = {
  personalData: PersonalCheckType;
  healthData: HealthCheckType;
  generalData: GeneralCheckType;
};
