import { Candidate } from './candidate.model';

export type CandidateColumn = keyof Candidate | 'actions';

export const CANDIDATE_TABLE_COLUMNS: CandidateColumn[] = [
  'name',
  'surname',
  'seniority',
  'years',
  'availability'
];

export const COLUMN_LABELS: Record<CandidateColumn, string> = {
  _id: 'ID',
  name: 'First Name',
  surname: 'Last Name',
  seniority: 'Seniority Level',
  years: 'Experience',
  availability: 'Available',
  actions: 'Actions'
};

export const UI_TEXTS = {
  HOME: {
    TITLE: 'Talent Manager',
    APP_BADGE: 'Employee Management Tool',
    SUBTITLE: 'Strategic oversight of your recruitment pipeline',
    TABS: {
      LIST: 'CANDIDATE LIST',
      ADD: 'ADD NEW'
    }
  },
  FORM: {
    TITLE: 'Add Candidate',
    NAME_LABEL: 'First Name',
    SURNAME_LABEL: 'Last Name',
    FILE_LABEL: 'Excel File',
    BUTTON_SUBMIT: 'Upload Candidate',
    SUCCESS_MSG: 'Candidate uploaded successfully!',
    ERROR_MSG: 'Error uploading candidate. Check Excel format.'
  },
  DETAIL: {
    TITLE: 'Candidate Details',
    BACK_BUTTON: 'BACK TO DASHBOARD',
    ID_LABEL: 'Candidate ID',
    EXPERIENCE_UNIT: 'years'
  }
} as const;
