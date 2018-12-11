import axios from 'axios';
import {GET_ALL_CVS, GET_CV, DELETE_CV,
   UPDATE_CV, GET_ALL_FLAGGED, GET_MED_FLAGGED,
 GET_BAD_FLAGGED, UPDATE_FLAG} from './consts';

export function getCVs(){
  axios.get(GET_ALL_CVS)
  .then(response => {
    return response.data; })
}

export function getCV(id){
  axios.get(GET_CV+id)
  .then(response => {
    return response.data; })
}

export function deleteCV(id){
  axios.delete(DELETE_CV+id)
  .then(response => {
    return response.data; })
}

export function updateCV(id, cv){
  axios.put(UPDATE_CV+id, cv)
  .then(response => {
    return response.data; })
}

export function getFlags(){
  axios.get(GET_ALL_FLAGGED)
  .then(response => {
    return response.data; })
}

export function getMedFlags(){
  axios.get(GET_MED_FLAGGED)
  .then(response => {
    return response.data; })
}

export function getBadFlags(){
  axios.get(GET_BAD_FLAGGED)
  .then(response => {
    return response.data; })
}

export function updateFlag(id,flag){
  axios.put(UPDATE_FLAG+id+"/"+flag)
  .then(response => {
    return response.data; })
}
