import { convertMillisecondsToLocalDateTime } from "../../utils/date";
import { baseUrl, ChargeSheet } from "../_api";

export const createChargeSheet = async ({
  chargeSheetId,
  fileId,
  suspectorNic,
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
}: ChargeSheet): Promise<boolean> => {
  const url = `${baseUrl}/api/charge-sheet`;

  const rawBody = {
    id:chargeSheetId,

    investigation: {
      fileId: fileId,
    },

    suspector: {
      nic: suspectorNic
  },

    chargeSheetIssuedDate: convertMillisecondsToLocalDateTime(
      chargeSheetIssuedDate
    ),
    dateOfAnswered: convertMillisecondsToLocalDateTime(dateOfAnswered),
    dateOfPersonalFileCalled: convertMillisecondsToLocalDateTime(
      dateOfPersonalFileCalled
    ),
    dateOfPersonalReturned: convertMillisecondsToLocalDateTime(
      dateOfPersonalReturned
    ),
    dateOfDisciplinaryOrderTaken: convertMillisecondsToLocalDateTime(
      dateOfDisciplinaryOrderTaken
    ),
    dateOfAppealedForPSC:
      convertMillisecondsToLocalDateTime(dateOfAppealedForPSC),
    pscOrderDescription,

    dateOfPSCOrderTaken:
      convertMillisecondsToLocalDateTime(dateOfPSCOrderTaken),

    dateOfAppealedToAAT:
      convertMillisecondsToLocalDateTime(dateOfAppealedToAAT),

    dateOfAATOrderTaken:
      convertMillisecondsToLocalDateTime(dateOfAATOrderTaken),

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
