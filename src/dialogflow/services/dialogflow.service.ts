import { Injectable } from '@nestjs/common';

import dialogflow from '@google-cloud/dialogflow';
import { GetIntentDialogflowDto } from '../dto/get-intent-dialogflow.dto';

const keys = JSON.parse(process.env.DIALOGFLOW_CREDENTIAL);

const projectId = keys.googleProjectId;
const sessionId = keys.dialogFlowSessionID;

const CONFIGURATION = {
  credentials: {
    client_email: keys.googleClientEmail,
    private_key: keys.googlePrivateKey,
  },
};

@Injectable()
export class DialogflowService {
  private sessionClient: any;

  constructor() {
    this.sessionClient = new dialogflow.SessionsClient(CONFIGURATION);
  }
  async textQuery(payload: GetIntentDialogflowDto) {
    const { userId, userText } = payload;
    // const sessionPath = this.sessionClient.sessionPath(
    //   projectId,
    //   sessionId + userId,
    // );
    const sessionPath = this.sessionClient.projectAgentSessionPath(
      projectId,
      sessionId + userId,
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: userText,
          languageCode: keys.dialogFlowSessionLanguageCode,
        },
      },
    };

    try {
      const response = await this.sessionClient.detectIntent(request);
      // "queryResult": {
      //   "fulfillmentMessages": [
      //     {
      //       "platform": "PLATFORM_UNSPECIFIED",
      //       "text": {
      //         "text": [
      return response[0].queryResult.fulfillmentMessages[0].text;
    } catch (error) {
      console.log('erro', error);
      return { erro: error };
    }
  }
}
