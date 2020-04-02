export interface JobModel {
  title: string;
  company: string;
  location: string;
  created_at: string;
  company_logo: string;
  description: string;
  url: string;
}

export interface JobProp {
  job: JobModel;
  onClick(e?: React.MouseEvent<HTMLElement>): void;
}

export interface JobsProp {
  jobs: JobModel[];
}

export interface Modal {
  job?: JobModel;
  open: boolean;
  handleClose(e?: React.MouseEvent<HTMLElement>): void;
}
