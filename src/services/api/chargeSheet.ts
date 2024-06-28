import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { baseUrl,ChargeSheet } from "../api";

export const createChargeSheet =async({
    chargeSheetId,
    chargeSheetIssuedDate,
    dateOfAnswered,
    dateOfPersonalFileCalled,
    dateOfPersonalReturned,
    dateOfDisciplinaryOrderTaken,
    dateOfAppealedForPSC,
    pscOrderDescription,
    dateOfPSCOrderTaken,
    dateOfAppealedToAAT,
    dateOfAATOrderTaken,
    aatOrderDescription,
}:ChargeSheet): Promise<boolean> => {
    const url = `${baseUrl}/api/charge-sheet`;
  
    const rawBody = {
        chargeSheetId,
        chargeSheetIssuedDate: convertMillisecondsToLocalDateTime(
            Date.parse(chargeSheetIssuedDate)
          ),
        dateOfAnswered: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfAnswered)
          ),
        dateOfPersonalFileCalled: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfPersonalFileCalled)
          ),
        dateOfPersonalReturned: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfPersonalReturned)
          ),
        dateOfDisciplinaryOrderTaken: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfDisciplinaryOrderTaken)
          ),
        dateOfAppealedForPSC: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfAppealedForPSC)
          ),
        pscOrderDescription,

        dateOfPSCOrderTaken: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfPSCOrderTaken)
          ),
        dateOfAppealedToAAT: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfAppealedToAAT)
          ),
        dateOfAATOrderTaken: convertMillisecondsToLocalDateTime(
            Date.parse(dateOfAATOrderTaken)
          ),
        aatOrderDescription,
    };
  
    const reqOption: RequestInit = {
      method: "POST",
      body: JSON.stringify(rawBody),
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    let response;
    try {
      response = await fetch(url, reqOption);
    } catch (error) {
      console.log(error);
    }
  
    return response?.status === 200 ? true : false;
  };
  