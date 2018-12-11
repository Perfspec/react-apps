const API_IP="http://localhost:";
const API_PORT="8080";
const CV=API_IP+API_PORT+"/cv";

export const GET_ALL_CVS=CV+"/getAll";
export const GET_CV=CV+"/getCV/";
export const DELETE_CV=CV+"/deleteCV/";
export const UPDATE_CV=CV+"/updateCV/";

export const GET_ALL_FLAGGED=CV+"/getAllFlagged";
export const GET_MED_FLAGGED=CV+"/getAllMediumFlagged";
export const GET_BAD_FLAGGED=CV+"/getAllBadFlagged";
export const UPDATE_FLAG=CV+"/updateFlag/"
