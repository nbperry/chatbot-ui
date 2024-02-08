import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
	id: string;
	name: string;
	maxLength: number; // maximum length of a message
	tokenLimit: number;
}

export enum OpenAIModelID {
	GPT_3_5 = 'gpt-3.5-turbo-1106',
	GPT_4_TURBO = 'gpt-4-1106-preview',	

}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
	[OpenAIModelID.GPT_3_5]: {
		id: OpenAIModelID.GPT_3_5,
		name: 'GPT-3.5-turbo-16k-1106',
		maxLength: 100000,
		tokenLimit: 16000,
	},

	[OpenAIModelID.GPT_4_TURBO]: {
		id: OpenAIModelID.GPT_4_TURBO,
		name: 'GPT-4 turbo 1106 preview',
		maxLength: 100000,
		tokenLimit: 16000,
	},
	
};
