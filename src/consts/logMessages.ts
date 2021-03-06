export const filterUncaughtExceptionMsg = 'One of `onBeforeSubmission` callbacks has thrown an ' +
  'exception so the original bug that you were filtering its data has not been submitted. ' +
  'Instead, A new bug has been created for this exception with trimmed timeline (For privacy ' +
  'purposes)';

export const filterStructureExceptionMsg = 'Cannot submit bug! The changes made by the ' +
  '`onBeforeSubmission` callbacks are invalid as they changes in the bug request payload ' +
  'structure so the original bug that you were filtering its data has not been submitted. ' +
  'Instead, a new bug has been created for this exception with trimmed timeline (For privacy ' +
  'purposes)';
