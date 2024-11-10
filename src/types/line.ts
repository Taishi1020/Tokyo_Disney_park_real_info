import { TextMessage, WebhookEvent , MessageEvent} from '@line/bot-sdk';

export interface LineConfig {
  channelSecret: string;
  channelAccessToken: string;
}

export interface  LineMessageHandler {
  handleEvent(event: WebhookEvent): Promise<void>;
  handleMessage(event: MessageEvent & {message: TextMessage}): Promise<void>
}
