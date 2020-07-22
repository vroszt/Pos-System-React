import axios from "axios";
import "./axiosClient";
import { URL_PREFIX } from './apiBuilder';

const getTransactionId = () => axios.get(`${URL_PREFIX}/sale/transactionId`);

// eslint-disable-next-line
export default { getTransactionId, saveNormalSale, saveCreditSale };
