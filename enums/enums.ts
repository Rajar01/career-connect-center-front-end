enum UserType {
  Guest,
  Company,
  Employer,
}

enum JobType {
  FULL_TIME = 'full time',
  PART_TIME = 'part time',
  CONTRACT = 'contracts',
}

enum WorkType {
  ON_SITE = 'on site',
  REMOTE = 'remote',
  HYBRID = 'hybrid',
}

enum ExperienceLevel {
  FRESHER_ENTRY_LEVEL = 'fresher/entry level',
  JUNIOR = 'junior',
  MID_LEVEL = 'mid level',
  SENIOR = 'senior',
  LEAD_MANAGERIAL = 'lead managerial',
  DIRECTOR_EXECUTIVE = 'director executive',
}

enum StatusType {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export {
  UserType, JobType, WorkType, ExperienceLevel, StatusType,
};
